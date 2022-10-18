/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const axios = require("axios").default;
const ProductDetails = () => {
  const params = useParams();
  // console.log(params)
  const [item, setItem] = useState({});
  useEffect(() => {
    getItem();
  }, []);

  const getItem = () => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => {
        setItem(response.data);
      });
  };

  return (
    <div className="container">
      <div className="card text-center w-75 m-auto pt-2 mb-4 rounded-5">
        <figure className="m-0">
          <img
            src={item.image}
            className="card-img-top w-25 m-auto mb-3"
            alt={item.title}
          />
        </figure>
        <div className="card-body">
          <h5 className="card-title mb-2 text-secondary fs-3">{item.title}</h5>
          <p className="category text-success fw-bold fs-4">{item.category}</p>
          <p className="card-text fw-bolder text-secondary">
            {item.description}
          </p>
          <span className="category text-primary fw-bold fs-5">
            {item.price} EGP
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
