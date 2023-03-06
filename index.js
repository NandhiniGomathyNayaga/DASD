
// let age=16; //Ternary operator

// let type=age>18? "Adult ticket" :"Child ticket"

// console.log(type);

//logical operator
//logical AND(&&)
//return true if both operands are true
// console.log(false && true);
//logical OR(||)
//return true if both operands are true
// console.log(true ||false);
//NOT(!)
// console.log(true);

// let highIncome = true;
// let CibilScore = false;

// let eligibleperson=highIncome||CibilScore
// let applicationstatus=!eligibleperson

// console.log("Loan status:" +eligibleperson);
// console.log("Application status:" +applicationstatus);



//let name="Nandy";
//let msg="Hi my name is :"+ name+" I'm learning javascript";

//alert(msg);

//console.log(msg);


//let numb1=200;
//let numb2=45;

//result=numb1+numb2;

 let person = {
    name:"xxx",
    age:26,
    isAlive:true,
    gender:"female",
    address:"chennai,tamil nadu",
sibling:{
    brother:"abishek",
    sister:"trisha"
}
}


person.age=27

console.log(person.sibling.sister)

console.log(person['gender'])
// //let x=4;

// // console.log(x<5);
// // console.log(x<=5)

// // console.log(x>5);
// // console.log(x>=5)

// //console.log('Alen' . 'Anbu'); //String Comparison

// //console.log('1'<5); //comparison of different type

// //Strict equality operator
// //console.log(1 === 1);
// //console.log('1' === 1);
// //Lose equality operator
// //console.log(1 == 1);

// // function user(add1, add2){

//     // let name='Hi, Welcome to javascript';
   
// //     let number1=45;
// //     let number2=88;
// //    let number=number1+number2;

   
// //     console.log(add1 + add2);

// // }
// // user(23,89);


// let weather= "hot";

// if(weather === "hot") {
//     console.log("weather is hot!");
// }else{
//     console.log("weather is cold");
// }

// if hour is between 12am to 1pm ->good morning
//ele if hour is between 1pm to 5pm ->aftern
//else hour is between 5apm to 12am ->evening

// let milk=200;

// if(milk >= 0 && milk <= 200)
//    console.log("ordered Milk Chocolate");
// else if(milk >= 200 && milk <= 350)
//    console.log("ordered Choco Frill");
// else 
//    console.log("ordered Brownie");

//Switch case
// let grade ="A";

// switch(grade) {
//     case "S":
//         console.log("Super Grade");
//         break;
//     case "A":
//         console.log(" Excellent Grade");
//         break;
//         case "E":
//             console.log("Just Pass");
//             break;
//             case "U":
//         console.log("Failed");
//         break;
//         default:
//             console.log("Unknown grade");

// }

//for loop
// for(initialExpression; CSSCondition; step){
//     console.loh("Number #1");
// }

// for(let i=0; i<40 ; i++){

//     if(i%2 !==0){
//     console.log("Odd Number #" +i);
//     }
// }

//for -in loop//for -of loop

// for(;;){
//     console.log("this is infinite loop!");
// }

let name = "sri";
let age = 21;
let address = {
    city :"chennai",
    state:"tamilnadu",
}
function greeting(){
    let msg = "this is my name:" +name +"my age is :" +age; 
    console.log(msg);
}
greeting();