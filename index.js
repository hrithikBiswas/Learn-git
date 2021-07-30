const myFucntion = (msg, presentYear, birthYear) => {
    let name = "sonchita";
    let age = presentYear - birthYear;
    let obj = {
        name: "Hrithik",
        title: "Biswas",
        nationality: "Bangladeshi",
        age: 21,
    };
    let print = `${obj.name} ${obj.title} is a ${obj.nationality} person. He is ${obj.age} years old.`;
    return `${msg} ${name}, You are ${age} years old. \n${print}`;
};

const output = myFucntion("Welcome", 2021, 2003); // Welcome Sonchita, You are 21 years old.

console.log(output);
