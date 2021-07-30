const myFucntion = (msg, age) => {
    let name = "sonchita";
    let date = new Date();
    let birthYear = date.getFullYear() - age;
    return `${msg} ${name}, You are born in ${birthYear}.`;
};

const output = myFucntion("Welcome", 18); // Welcome Sonchita, You are born in 18.

console.log(output);
