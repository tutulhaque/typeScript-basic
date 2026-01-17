{
    // learning functions
// normal function

function add (a:number,b:number):number {
    return  a +b;
    
}
add(1,3)
// arrow function

const addArrow = (num1:number,num2:number=10):number => {
    return num1+num2;

}
addArrow(2);

// object --> function --> method
const user = {
    name:"saif",
    balance:0,
    addBalance(balance:number):string{
        return `My total balance is: ${this.balance+balance} + balance`;
    }
}

const arr:number[] = [1,4,10];
const newArray: number[] = arr.map((element:number):number=> element*element);
}