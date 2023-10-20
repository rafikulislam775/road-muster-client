import { NavLink, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="flex flex-row-reverse  items-center h-screen bg-no-repeat bg-center bg-cover "
      style={{
        backgroundImage: "url(https://i.ibb.co/1r1pmgm/error2.jpg)",
      }}
    >
      <div id="error-page" className="mr-36 bg-opacity-60 ">
        <h1 className="text-8xl text-red-900">{error.status}!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <NavLink to="/">
          <button className=" btn btn-sm">Back to Home</button>
        </NavLink>
      </div>
    </div>
  );
}
