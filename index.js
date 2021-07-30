const myFucntion = (msg, age) => {
    let name = "sonchita";
    let date = new Date();
    let birthYear = date.getFullYear() - age;
    return `${msg} ${name}, You are born in ${birthYear}.`;
};

const output = myFucntion("Welcome", 18); // Welcome Hrithik, You are 18 years old.

console.log(output);
