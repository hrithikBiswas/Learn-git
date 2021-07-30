const myFucntion = (msg, presentYear, birthYear) => {
    let name = "Sonchita";
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

const output = myFucntion("Hello", 2021, 2018); // Hello Hrithik, You are 21 years old.

console.log(output);
