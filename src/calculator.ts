//valid class name - Calculator
class CalculatorClass {
    constructor(private str: string) {

    }
    public addition(a: number, b: number) {
        const correctFormate = "correctVariable"; //valid
        const WrongFormate = "WrongFormate"; //invalid- should start with small case
        console.log(this.str)
        return a + b;
    }
    //invalid function name, should start with small case
    public Subtraction(a: number, b: number) {
        return a - b;
    }
    //no modifier mentioned
    Multiplication(a: number, b: number) {
        return a * b;
    }
}