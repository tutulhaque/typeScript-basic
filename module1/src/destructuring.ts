{
    // object deStructuring
    const userInfo:{
    name:{
        firstName:string,
        middleName:string,
        lastName:string
    },
    email:string,
    phone:number
} = {
    name:{
        firstName:"Md",
        middleName:"Saif",
        lastName:"Tutul"
    },
    email:"saif@gmail.com",
    phone:1234567
}

const {name:{middleName}} = userInfo;
console.log(middleName)

// Array Destructuring
    const myFriends = ["Chandler","Joey","Ross", "Rachel", "Monica","Phoebe"]
    const [,,ross,...rest] = myFriends;
    console.log(rest)
    
}

