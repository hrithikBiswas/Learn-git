const myFucntion = (msg, age) => {
    let name = "sonchita Biswas";
    let date = new Date();
    let year = date.getFullYear() - age;
    return `${msg} ${name}, You are born in ${year}.`;
};

const output = myFucntion("Hi", 18); // Hi Sonchita Biswas, You are born in 18.

console.log(output);

const subtract = (a, b, c, d) => {
    let minus = a - b - c - d;
    console.log(minus);
};
subtract(40, 20, 10, 5);
