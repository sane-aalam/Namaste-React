import "./ErrorPage.css";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  // Add appropriate type here
  const errorMassgae = useRouteError();
  // console.log(errorMassgae) - complete infromation about error 404, which route all things
  return (
    <div className="body404">
      <div className="text">
        <p>{errorMassgae.data}</p>
        <p>{errorMassgae.status}</p>
        <p>{errorMassgae.statusText}</p>
        <h2>Couldn't launch :(</h2>
        <h3>
          Page Not Found - lets take you{" "}
          <a href="http://localhost:1234/">BACK</a>
        </h3>
      </div>
    </div>
  );
};

export default ErrorPage;
