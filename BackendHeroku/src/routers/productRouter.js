const { Router } = require("express");
const ProductController = require("../controllers/productController");
const TokenController = require("../controllers/tokenController");

class ProductRouter {
  constructor() {
    this.router = Router();
    this.#config();
  }
  //#- crea ruta privada #config() y el this.#copnfig()

  #config() {
    let tokenC = new TokenController();
    //contruir objeto
    const productC = new ProductController();
    //configuro rutas
    //ruta getAll-Publica
    this.router.get("/product", productC.getAll);
    //ruta crear Privada
    this.router.post("/product", [tokenC.verifyAuth], productC.create);
    //ruta de update
    this.router.put("/product", [tokenC.verifyAuth], productC.update);
    //rutas del get
    this.router.get("/product/user", [tokenC.verifyAuth], productC.getByUser);
    //ruta delete
    this.router.delete("/product", [tokenC.verifyAuth], productC.delete);
  }
}
module.exports = ProductRouter;
