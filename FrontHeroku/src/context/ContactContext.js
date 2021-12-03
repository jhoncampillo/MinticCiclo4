//creo el contexto de productos
import { createContext } from "react";
import { apiContacto } from "./Api";

const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  console.log("Hola Hola");
  //cero el metodo para crar prodcutos
  const handleCreateCt = async (objContact) => {
    //capturo el token del user autenticado
    // let token = localStorage.getItem("token");
    let resp = await fetch(apiContacto, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(objContact),
    });
    resp.json().then((resp) => {
      console.log(resp);
    });
    return resp;
  };
  const data = { handleCreateCt };
  console.log(children);
  return (
    <ContactContext.Provider value={data}>{children}</ContactContext.Provider>
  );
};

export { ContactProvider };
export default ContactContext;
