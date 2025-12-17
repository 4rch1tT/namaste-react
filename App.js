import React from "react";
import ReactDOM from "react-dom/client";

// Jsx syntax -> not html but React.createElement which is converted by the transpiler(babel) in the bundler to React element(object) which is then converted to html by .render method

/* React Element
 * const heading = <h1 id="heading">Namste React 🦥</h1>;
 */

const Title = () => <h1>Namaste React 🍺</h1>;

// React Functional Component -> a function that return React elements(JSX)
// Component Composition -> composing 2 components together
const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h2>Namaste From Functional Component</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
