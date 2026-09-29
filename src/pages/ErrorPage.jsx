import { NavLink, useRouteError } from "react-router";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <title>Error!</title>

      <h1>
        Oops! An error occured.
      </h1>
      {error && <p>{error.data}</p>}
      <NavLink to="/"> 
        <button>
          Go To Homepage 
        </button>
      </NavLink>
    </>
  );
};