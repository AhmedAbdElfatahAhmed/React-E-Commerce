/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import axios from "axios";

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
  // console.log(item.rating !== undefined && item.rating.rate);
  return (
    <div className="container">
      <div className="card text-center w-75 m-auto pt-2 mb-3 rounded-5">
        <figure className="m-0">
          <img
            src={item.image}
            className="card-img-top w-25 m-auto mb-1"
            alt={item.title}
          />
        </figure>
        <div className="card-body">
          <h5 className="card-title mb-2 text-secondary fs-3">{item.title}</h5>
          <p className="category text-success fw-bold fs-4">{item.category}</p>
          <p className="card-text fw-bolder text-secondary">
            {item.description}
          </p>
          <div className="info d-flex fw-bold text-white fs-4 justify-content-around">
            <span className="bg-primary py-2 px-3 rounded-4">
              Price : {item.price} EGP
            </span>
            <span className="bg-success py-2 px-3 rounded-4">
              Quantity : {item.rating !== undefined && item.rating.count}
            </span>
            <span className="bg-info py-2 px-3 rounded-4">
              Rate : {item?.rating?.rate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
