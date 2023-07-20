import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "microcomponents/Navbar";
import { Footer } from "microcomponents/Footer";
import { Table } from "microcomponents/Table";
import "./index.scss";

const data = [
  { name: "This is name", title: "Demo", director: "Dabid", year: 2024 },
  { name: "This is name", title: "Demo", director: "Dabid", year: 2024 },
  { name: "This is name", title: "Demo", director: "Dabid", year: 2024 },
  { name: "This is name", title: "Demo", director: "Dabid", year: 2024 },
  { name: "This is name", title: "Demo", director: "Dabid", year: 2024 },
  { name: "This is name", title: "Demo", director: "Dabid", year: 2024 },
];

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Navbar title="Title from props ff" />
    <div>Name: micro-frontend-app</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>

    <p className="text-lg text-gray-500 mt-5 font-bold">Data table</p>
    <Table data={data} />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
