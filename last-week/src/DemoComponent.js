import react from "react";
import React from "react";

export default () => {
  // return <h1>In DemoComponent</h1>;
  // return React.createElement("h1", null, "In DemoComponent");

  // return (
  //   <div>
  //     <h1 style={{ backgroundColor: "red" }}>In DemoComponent</h1>
  //     <h2 style={{ backgroundColor: "green" }}>In DemoComponent</h2>
  //   </div>
  // );

  // return (
  //   <div>
  //     <h1 style={{ backgroundColor: "red" }}>My Heading</h1>
  //     <h2 style={{ backgroundColor: "green" }}>Sub-Heading</h2>
  //     <div style={{ backgroundColor: "yellow" }}>
  //       <p style={{ backgroundColor: "orange" }}>This Is My First Paragraph</p>
  //       <p style={{ backgroundColor: "blue" }}>This Is My Secong Paragraph</p>
  //     </div>
  //   </div>
  // );

  // return react.createElement(
  //   "div",
  //   null,
  //   React.createElement(
  //     "h1",
  //     { style: { backgroundColor: "red" } },
  //     "In DemoComponent"
  //   ),
  //   React.createElement(
  //     "h2",
  //     { style: { backgroundColor: "green" } },
  //     "In DemoComponent"
  //   )
  // );

  return react.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { style: { backgroundColor: "red" } },
      "In DemoComponent"
    ),
    React.createElement(
      "h2",
      { style: { backgroundColor: "green" } },
      "In DemoComponent"
    ),
    React.createElement(
      "div",
      { style: { backgroundColor: "yellow" } },
      React.createElement(
        "p",
        { style: { backgroundColor: "orange" } },
        "This Is My First Paragraph"
      ),
      React.createElement(
        "p",
        { style: { backgroundColor: "blue" } },
        "This Is My Second Paragraph"
      )
    )
  );
};
