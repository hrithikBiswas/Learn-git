const myFucntion = (msg, age) => {
    let name = "sonchita Biswas";
    let date = new Date();
    let year = date.getFullYear() - age;
    return `${msg} ${name}, You are born in ${year}.`;
};

const output = myFucntion("Hi", 18); // Hi Sonchita Biswas, You are born in 18.

console.log(output);

const add = (a, b) => {
    let sum = a + b;
    console.log(sum);
};
add(10, 20);
