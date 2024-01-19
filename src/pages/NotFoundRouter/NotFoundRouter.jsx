import { useRouteError } from "react-router-dom";
import { SectionBody } from "./NotFoundRouterStyled";
import NavBar from "../../components/NavBar/NavBar";

export default function NotFoundRouter() {
  const error = useRouteError();

  return (
    <>
    <NavBar />
    <SectionBody>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </SectionBody>
    </>
  );
}