 {
    // Nullable types / inknown types
    const searchName = (value:string |null) => {
        if(value){
            console.log("searching");
        }else{
            console.log("There is nothing to search");
        }
    }
    searchName("bd")
    
    // unknown types
    const getSpeedMeterPerSecond = (value:unknown) => {
        if(typeof value === "number"){
            const convertedSpeed = (value *100) / 3600
            console.log(`The speed is ${convertedSpeed} ms`)
        }
        else if(typeof value === "string"){
            const [result, unit] = value.split(" ");
             const convertedSpeed = (parseFloat(result) * 100) / 3600
            console.log(`The speed is ${convertedSpeed} ms - string`)
        }else {
            console.log("Wrong Input");
        }

    }
    getSpeedMeterPerSecond("1000 kmh")


    // Never Type
     const throwError = (message:string):never =>{
        throw new Error(message)

     }
     throwError("something something")









 }