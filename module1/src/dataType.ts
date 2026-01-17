// Learn what is primitive and non-primitive
// basic data type
let name: string = "Saif";
let roll: number = 123;
let isAdmin: boolean = true;
let x:undefined = undefined;
let y: null = null; 


// non primitive
let firneds:string[] = ["rachel", "monica"];
let eligibaleBachelor:number[] = [1,2,3,4,5,6];
eligibaleBachelor.push(7);
console.log(eligibaleBachelor);

// tuple -- touple is a special type of array
const tp:[number,string] = [1, "saif"];

// Object
const user:{
    firstName:string;
    middleName?:string; // optional type
   readonly lastName:string; // it will be only read only
    company: "Programming Hero"; // literal type
} = {
    firstName: "Md",
    middleName: "Saifuddullah",
    lastName: "Tutul",
    company: "Programming Hero",

}
