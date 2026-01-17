{
    // Ternary | optional chaining | nullish coalescing
    const age:number = 15;

    if(age>= 18){
        console.log("Adult")
    }else{
        console.log("Not adult")
    }

    // nullish coalescing operator (If I need to make an decesion for null or undefine)
    const isAuthenticated = undefined;
    const result1 = isAuthenticated ?? "Guest"
    console.log(result1)

    type User = {
        name:string,
        address:{
            city:string,
            road:string,
            presentAddress:string,
            permanentAddress?:string
        }
    }
    const user:User = {
        name:"saif",
        address:{
            city:"Helsinki",
            road:"viljentie road",
            presentAddress:"vijajentie 4-6",
        }

    }
    const permanentAddress = user.address.permanentAddress??"Nai";
    console.log(permanentAddress)

}