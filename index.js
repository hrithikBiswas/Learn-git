const myFucntion = (msg, presentYear, birthYear) => {
    let name = "Hrithik";
    let age = presentYear - birthYear;
    return `${msg} ${name}, You are ${age} years old.`;
};

const output = myFucntion("Hello", 2021, 2000); // Hello Hrithik, You are 21 years old.

console.log(output);
