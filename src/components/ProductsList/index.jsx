import { Fragment, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./productsList.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
const ProductList = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  };
  const dispatch = useDispatch();
  const addProductTocart = (item) => {
    dispatch(addToCart(item));
  };
  const isProductAdded = useSelector((state) => state.cartStore.isItemAdded);
  const itemsAdded = useSelector((state) => state.cartStore.cartList);
  const pdoductIds = itemsAdded.map((item) => item.id);

  return (
    <div className="container">
      <div className="Products-list mt-3 row">
        <Fragment>
          {Products.map((product) => {
            return (
              <div className="product col-md-4 mb-5" key={product.id}>
                <Card className="card rounded-4  text-center py-3 h-100 ">
                  <Card.Img className=" m-auto w-25 h-75" src={product.image} />
                  <Card.Body>
                    <Card.Title className="text-primary fs-4 mb-3">
                      {product.title}
                    </Card.Title>
                    <span className="d-block text-success fw-bold fs-5 mb-3">
                      {product.price} EGP
                    </span>
                    <Link
                      className="btn btn-primary ms-4 text-white"
                      to={`/productDetails/${product.id}`}
                    >
                      View Details
                    </Link>
                    <button
                      disabled={
                        isProductAdded && pdoductIds.includes(product.id)
                      }
                      onClick={() => {
                        addProductTocart(product);
                      }}
                      className="btn btn-success ms-5"
                    >
                      Add to cart
                    </button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </Fragment>
      </div>
    </div>
  );
};

export default ProductList;
