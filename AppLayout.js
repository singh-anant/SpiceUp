import React from "react";
import ReactDOM from "react-dom/client";

const AppLayout = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

// Tell React that div is my root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
