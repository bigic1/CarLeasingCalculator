import { Calculator } from "./calculator.js";
import { CarType } from "./cartype.js";

const newcar = new CarType("Brand New", 2.99);
const usedcar = new CarType("Used", 3.7);
const calc = new Calculator(document.body);
calc.add(newcar);
calc.add(usedcar);
calc.draw();