import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

it("Should load Navbar component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Navbar />
      </Provider>
    </BrowserRouter>,
  );

  // if there is more than one button in that document and we have to find the specific login button we can add another parameter which is name ⇩⇩⇩
  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});
