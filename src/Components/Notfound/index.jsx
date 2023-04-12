import NotFoundImage from "../../assets/Icons/not-found.png";

export default function () {
  return (
    <div className="not-found-container">
      <img
        className="not-found-image"
        src={NotFoundImage}
        alt="Page not found"
      />
      <h1 className="not-found-title">404 Not Found</h1>
      <p className="not-found-message">
        Sorry, the page you are looking for cannot be found.
      </p>
    </div>
  );
}
