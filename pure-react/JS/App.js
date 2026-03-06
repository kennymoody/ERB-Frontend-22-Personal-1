const App = () => {
  return React.createElement(
    "div",
    { style: { color: "red", background: "yellow" } },
    [
      HX("h1", "F HW1"),
      HX("h2", "F HW2"),
      HX("h3", "F HW3"),
      H1(1),
      H1(100),
      H1(20),
    ],
  );
};

const HX = (size, para) => {
  return React.createElement(size, null, para);
};

const H1 = (para) => {
  para = para + 1; // functional part
  return React.createElement("h1", null, para); // jsx part ==> html
};

const Student = ({ name, age, gender }) => {
  age = age + 1;
  return [
    React.createElement("p", null, name),
    React.createElement("p", null, age),
    React.createElement("p", null, gender),
  ];
};

const StuApp = () => {
  return React.createElement(
    "div",
    { style: { color: "red", background: "yellow" } },
    [
      Student({ name: "A", age: 20, gender: "M" }),
      Student({ name: "B", age: 21, gender: "F" }),
      Student({ name: "C", age: 22, gender: "M" }),
    ],
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));

const content = ReactDOM.createRoot(document.getElementById("content"));
content.render(React.createElement(StuApp));
