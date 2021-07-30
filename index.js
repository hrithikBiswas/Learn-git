const myFucntion = (msg, presentYear, birthYear) => {
    let name = "sonchita";
    let age = presentYear - birthYear;
    return `${msg} ${name}, You are ${age} years old.`;
};

const output = myFucntion("Welcome", 2021, 2003); // Hello Hrithik, You are 21 years old.

console.log(output);
