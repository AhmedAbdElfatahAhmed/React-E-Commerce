import { useSelector } from "react-redux";
import "./ShoppingCart.css";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
const ShoppingCart = () => {
  const cartList = useSelector((state) => state.cartStore.cartList);
  const cartCounter = useSelector((state) => state.cartStore.cartCounter);
  const totalPrice = useSelector((state) => state.cartStore.totalPrice);
  // console.log("cartList", cartList);

  const dispatch = useDispatch();
  const removeProductFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className="text-center">
      <div className="container">
        {cartList.length ? (
          <h6 className="fw-bold d-inline-block mt-3 p-3 border border-3 text-secondary fs-3 mb-3">
            Total ({cartCounter} items): {totalPrice.toFixed(2)} EGP
          </h6>
        ) : (
          <h1 className="mt-5 bg-warning text-danger w-50 m-auto rounded-5 py-5">
            Your Cart is Empty
          </h1>
        )}

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
                    <div
                      className="trash text-end"
                      onClick={() => removeProductFromCart(item.id)}
                    >
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
