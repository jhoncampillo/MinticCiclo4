import React, { useContext, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import ProductContext from "../context/ProductContex";
//Creo el objeto etructural
const objForm = {
  name: "",
  price: "",
  url_img: "",
};

const ProductForm = () => {
  //uso el contexto  productContext
  const { handleCreate } = useContext(ProductContext);
  //creo el estados
  const [form, setForm] = useState(objForm);

  //metodo 1
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  //metodo 2
  const handleSubmit = (e) => {
    e.preventDefault();
    // le paso el formulario 
     handleCreate(form)
    .then((resp) => {
        console.log(resp);
      })
     .catch((error) => {
        console.error(error);
       });
    setForm(objForm);
  };

  return (
    <div className="productForm">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="productName">
              <Form.Label> Product name </Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter product name"
                value={form.name}
                onChange={handleForm}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="productPrice">
              <Form.Label> Product price </Form.Label>
              <Form.Control
                name="price"
                type="number"
                placeholder="Enter product price"
                value={form.price}
                onChange={handleForm}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="productImg">
            <Form.Label> Url Image </Form.Label>
            <Form.Control
              value={form.url_img}
              onChange={handleForm}
              name="url_img"
              type="text"
              placeholder="Enter url image"
              required
            />
          </Form.Group>
        </Row>
        <Button variant="success" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default ProductForm;
