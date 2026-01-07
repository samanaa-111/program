//if else condition
//greatest among three number
    let a=10;
    let b=20;
    let c=25;
    if(a>b && a>c){
        let msg=`${a} is greatest number`;
        console.log(msg);
    }
    else if(b>a && b>c){
        let msg=`${b} is greatest number`;
        console.log(msg);
    }
    else{
        let msg=`${c} is greatest number`;
        console.log(msg);
    }

// odd or even number
let num=9;
if (num%2==0){
    let msg=`${num} is even number`;
    console.log(msg);
}
else{
    let msg=`${num} is odd number`;
    console.log(msg);
}

//nested if else
    //Grade calculator
let score=85;
if (score>=90){
    console.log("Your grade is:A");
}
else if(score>=80){
    console.log("Your grade is:B");
}
else if (score>=70){
    console.log("Your grade is:C");
}
else{
    console.log("You are failed");
}

//Temperature advisor
let temp="25";
if (temp<10){
    console.log("wear a heavy jacket");
}
else if(temp>=10 && temp<=20){
    console.log("A light sweater will do");
}
else if(temp>=21 && temp<=30){
    console.log("Enjoy the t-shirt weather");
}
else if(temp>30){
    console.log("It's hot! stay hydrated");
}

