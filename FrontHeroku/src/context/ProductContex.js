//creo el contexto de productos
import { createContext } from "react";
import { apiProduct } from "./Api";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //cero el metodo para crar prodcutos
  const handleCreate = async (objProduct) => {
    //capturo el token del user autenticado
    let token = localStorage.getItem("token");
    let resp = await fetch(apiProduct, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(objProduct),
    });
    return resp;
  };
  const data = { handleCreate };

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

export { ProductProvider };
export default ProductContext;
