const myFucntion = (msg, age) => {
    let name = "sonchita Biswas";
    let date = new Date();
    let year = date.getFullYear() - age;
    return `${msg} ${name}, You are born in ${year}.`;
};

const output = myFucntion("Hi", 18); // Hi Sonchita Biswas, You are born in 18.

console.log(output);

const multiply = (a, b) => {
    let x = b - 10;
    let power = a * x;
    console.log(power);
};
multiply(40, 20);
