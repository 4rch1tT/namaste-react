import React from "react";
import ReactDOM from "react-dom/client";

// Jsx syntax -> not html but React.createElement which is converted by the transpiler(babel) in the bundler to React element(object) which is then converted to html by .render method

// React Element
const heading = <h1 id="heading">Namste React 🦥</h1>;

// React Functional Component -> a function that return React elements(JSX)
const HeadingComponent = () => {
  return <h1>Namaste From Functional Component</h1>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
