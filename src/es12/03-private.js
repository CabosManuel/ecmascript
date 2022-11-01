class Calculator {
  constructor () {
    this.valueA = 0;
    this.valueB = 0;
  }

  // # antes de la función, para volverla privada
  #sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;

    return this.valueA + this.valueB;
  }

  // usando una clase privada en una publica
  scapePrivate(n1,n2) {
    return this.#sum(n1,n2);
  }
}

const calc = new Calculator();
console.log(calc.scapePrivate(2, 2));