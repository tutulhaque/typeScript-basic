{
    // 
    // union Types
    type FrontEndDeveloper = "FakibarDeveloper"|"JuniorDeveloper";
    type FullStackDeveloper = "FrontEndDeveloper"|"ExpertDeveloper";
    type Developer = FrontEndDeveloper | FullStackDeveloper;

    const newDeveloper: FrontEndDeveloper = "FakibarDeveloper";
    type User = {
        name:string,
        email:string,
        gender:"male"|"female"
        bloodGroup: "O+"|"O-"|"A+"|"A-"
    }
    const user1:User = {
        name: "saif",
        email:"saif@gmail.com",
        gender:"male",
        bloodGroup:"A+",

    }

    // Intersection type
    
}