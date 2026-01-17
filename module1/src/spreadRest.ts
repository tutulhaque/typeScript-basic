{
    // spread operator
    // rest operator
    // Destructuring
    
   const bros1:string[] = ["Mir","Firoz","Mizan"];
   const bros2:string[] = ["Amir","Viroz","Lizan"];

   bros1.push(...bros2);

//    object
const mentors1:{
    typeScript:string,
    redux:string
    React:string
} = {
    typeScript: "Mezba",
    redux:"Aman",
    React: "Noman",
}
const mentors2:{
    typeScript:string,
    redux:string
    React:string
} = {
    typeScript: "Jezba",
    redux:"Sman",
    React: "Zoman",
}

const mentorList = {
    ...mentors1, mentors2
}
console.log(mentorList)


// learn rest operator
const friends = (...friend:string[]) => {
    friend.forEach((item:string)=>{
        console.log(item)
    })
}
friends("saif","dawla", "tutul");

}