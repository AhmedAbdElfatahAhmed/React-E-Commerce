import "./Home.css";
import myCV from "./../../assets/myCV.pdf";
const Home = () => {
  return (
    <div className="portfolio position-relative">
      <div className="overlay position-absolute">
        <div className="container">
       <div className="row">
       <div className="offset-md-1 col-md-10">
       <div className="about-me">
            <h1 className="mb-3">Ahmed Abd Elfatah Ahmed</h1>
            <span className="fs-4 mb-3 d-block">Junior Front-end developer</span>
            <p className="fw-bold mb-4">
              I'm front end web developer graduated from ITI, I'm seeking a good
              opportunity that will allow me to work alongside an expert team of
              developers. Thereby helping to drive my career progression to more
              senior roles in the future,I consider myself a person who follows
              modern web development practices and new technologies; a person
              who never stops learning; a person who is trustworthy,
              responsible, respects deadlines and knows that customer’s
              satisfaction is the key to success. Skills: HTML 5 , CSS 3 ,
              JavaScript , Bootstrap , basic of SEO Techniques , Ajax , Git &
              GitHub and React Framework .
            </p>
            <a href={myCV} className="btn btn-primary text-uppercase fs-5"  download="Ahmed Abd Elfatah Ahmed CV">download my cv</a>
          </div>
       
       </div>
       
       </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
