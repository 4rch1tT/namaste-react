import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext.jsx";
// import Grocery from "./components/Grocery";

// Jsx syntax -> not html but React.createElement which is converted by the transpiler(babel) in the bundler to React element(object) which is then converted to html by .render method

/* React Element
 * const heading = <h1 id="heading">Namste React 🦥</h1>;
 */

// This is known as lazy loading/chunking/code-splitting/dynamic-bundling/on-demand-loading used for optimizing the app. This basically bundles the code into smaller chunks and browser only display the code when needed
const Grocery = lazy(() => import("./components/Grocery"));

// React Functional Component -> a function that return React elements(JSX)
// Component Composition -> composing 2 components together
const AppLayout = () => {
  const [userName, setUserName] = useState("default");

  // fetch api logic
  useEffect(() => {
    // data after authentication

    const data = {
      name: "Archit Anirudhan",
    };

    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Navbar />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
