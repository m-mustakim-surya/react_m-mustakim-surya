import { Link } from "react-router-dom";
import "./NotFound.css"

const NotFound = () => {
  return (
    <div className="notFound">
      <h2>404</h2>
      <h3>Page Not Found</h3>
      <div className="notFoundDesc">
        <p>The page you are looking for does not exist or an other error occured.</p>
        <button className="goBack"><Link to="/" className="textGoBack">Return to Home</Link></button> 
      </div>
    </div>
  );
};
export default NotFound;