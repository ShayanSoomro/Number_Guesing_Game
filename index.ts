#! /use/bin/env node

import inquirer from "inquirer";

let score: number=0;
async function startLoop() {
    let again;
         do{
            await guessNumber();
             again = await inquirer.prompt([
                {
                    type:"list",
                    name:"restart",
                    choices:["Yes","No"],
                    message:"do you want to continue"
                }
           ])
         }while(again.restart==="Yes");
}

startLoop();

async function guessNumber() {
    let guessNum =Math.floor(Math.random()*10);
    let tip;
    if (guessNum %2 === 0){
        tip = "Tip: Number is even."
    }else{
        tip = "Tip: Number is odd."
    }
    const answer = await inquirer.prompt([
        {
            type:"number",
            name:"userguess",
            message:`Guess a Number between 1 to 10(${tip})`,
        },
    ]);
    console.log(`Your Guess ${answer.userguess} and system generates ${guessNum}`)
    if (answer.userguess===guessNum){
        score++;
        console.log(`congratulation! Your answer is correct. Your score is: ${score}  `);
    }else{
        console.log(`your answer is wrong . Your score is: ${score} . Battar Luck Next Time`);
        
    }
    
}

