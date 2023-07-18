import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "navbar/Navbar";
import { Footer } from "navbar/Footer";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Navbar title="Title from props ff" />
    <div>Name: micro-frontend-app</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
