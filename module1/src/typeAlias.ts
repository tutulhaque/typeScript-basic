{
    // Type Alias
    type Student = {
        name:string,
        age:number,
        gender:string,
        phone?:string,
        address:string
    }
    const student1: Student = {
        name:"saif",
        age:24,
        gender:"male",
        phone:"+358418",
        address: "Helsinki"
    }
    const student2: Student = {
        name:"jabu",
        age:27,
        gender:"male",
        address: "Doha"
    }

    // How to use type alias in function

    type Add = (num1:number,num2:number)=>number;
    const add:Add = (num1,num2) => num1 + num2;
}