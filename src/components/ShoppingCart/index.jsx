import { useSelector } from "react-redux";
import "./ShoppingCart.css";
import { FaTrashAlt } from "react-icons/fa";
const ShoppingCart = () => {
  const cartList = useSelector((state) => state.cartStore.cartList);
  console.log("cartList", cartList);
  return (
    <div className="text-center">
      <div className="container">
        <h1 className="fs-1 mb-5">ShoppingCart</h1>
        <div className="row">
          <div className="offset-md-2 col-md-8 ">
            {cartList.map((item) => {
              return (
                <div
                  key={item.id}
                  className="item-wrapper d-flex p-4 rounded-5 align-items-start justify-content-between mb-4"
                >
                  <figure className="">
                    <img className="" src={item.image} alt={item.title} />
                  </figure>
                  <div className="item-info">
                    <h5 className="mb-5">{item.title}</h5>
                    <h5 className="text-secondary fw-bolder mb-5 text-end">
                      Price: {item.price} EGP
                    </h5>
                    <div className="trash text-end">
                      <FaTrashAlt className="text-danger fs-3" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
