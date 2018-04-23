import React from "react";
import { render } from "react-dom";
import HelloWorld from "./HelloWorld";

render(<HelloWorld />, document.getElementById("root"));

const animal = { name: "Spot", age: 14, eyes: "blue", type: "dog" };

const { name, ...rest } = animal;
console.log(name, rest);
