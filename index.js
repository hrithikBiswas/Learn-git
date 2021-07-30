const myFucntion = (msg, age) => {
    let name = "sonchita";
    let date = new Date();
    let year = date.getFullYear() - age;
    return `${msg} ${name}, You are born in ${year}.`;
};

const output = myFucntion("Welcome", 18); // Welcome Sonchita, You are born in 18.

console.log(output);
