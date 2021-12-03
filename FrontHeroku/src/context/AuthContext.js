import { createContext } from "react";
import { apiRegister, apiLogin } from "./Api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
//Context esta dise;ado para pasar datos de un componmente a otro
//sin utilizar las props
//Manejo de los usuarios Context- creo contexto
const AuthContext = createContext();

//recibo  los hijos en el provider del contexto
const AuthProvider = ({ children }) => {
  //Creo un esado asociado a la dashboard para saber si estoy autenticado o no
  // la autenticacion inicia con estado falso
  const [auth, setAuth] = useState(false);

  //creo el navegate para redirigir la rutas autenticadas y no autenticadas
  const navigate = useNavigate();

  //otro hook  para que al actualizar pagina pase al paginas privadas
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setAuth(true);
      //  navigate('/')
    }
  }, []);

  //recibo el objeto completo de un usuario desde Register-Creo el metodo
  const handleRegister = (objUser) => {
    console.log(objUser);
    //relizar la peticion al servidor para registar un usuario
    fetch(apiRegister, {
      //metodo
      method: "POST",
      //cabecera
      headers: {
        "Content-Type": "application/json",
      },
      //envio el objeto - como es js lo paso a json con stringify
      body: JSON.stringify(objUser),
      //como es una peticion asyncona utiliso async
    })
      .then(async (resp) => {
        console.log(resp);
        //si la respuesta del servidor e 201 obtenga el token
        if (resp.status === 201) {
          let json = await resp.json();
          console.log(json);
          //Capturo el token
          let token = json.token;
          //token almacenado  persistente para cuando recargue lapagina no se borre
          //almaceno ele el local storage el token
          localStorage.setItem("token", token);
          // si el siairio se autentico cambi el estado
          setAuth();
          //cambi la ustenticacion y redirijo a la raiz
          navigate("/");

          setAuth(true);
        } else {
          alert("Credenciales Invalidad");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth(false);
    navigate("/");
  };

  //-------CREO EL CONTEXTO DE LOGIN----
  const handleLogin = async (objUser) => {
    //para saber si las credenciales son validas la respuesta de la promesa
    //se la retoenamos al hijo
    let resp = await fetch(apiLogin, {
      // metodo de la peticion
      method: "POST",
      //cabecera peticion y su contenido
      headers: {
        "Content-Type": "application/json",
      },
      //objeto body lo vaceo

      body: JSON.stringify(objUser),
    });
    //proceso la aitenticacion del usuario
    if (resp.status === 200) {
      setAuth(true);
    }

    return resp;
  };

  //del contexto envi a los hijos los metodos- tambien exporto el estado auth
  const data = { handleRegister, handleLogin, auth, handleLogout };
  //retornamos el provider
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
