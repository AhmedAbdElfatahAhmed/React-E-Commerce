import notFound from "../../assets/images/notFound.svg";
const NotFound = () => {
  return (
    <div className="d-flex justify-content-center py-5">
      <img src={notFound} alt="NotFound-Page" />
    </div>
  );
};

export default NotFound;
