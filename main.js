#! /usr/bin/env node
//==============================Text Adventure Game ====================//
import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuel_decrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuel_increase() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuel_decrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuel_increase() {
        this.fuel = 100;
    }
}
console.log(chalk.bold.yellow("\t\t Welcome to Hasnain's Coding World"));
console.log("=".repeat(60));
let player;
while (!player || !player.name.trim()) {
    player = await inquirer.prompt({
        type: "input",
        name: "name",
        message: chalk.bold.green("Enter Your Name"),
        transformer: (input, answers, flags) => {
            return chalk.yellow(input); // Change the input color
        }
    });
    if (!player.name.trim()) {
        console.log('Name cannot be empty. Please enter your name.');
    }
}
console.log("=".repeat(60));
let opponent = await inquirer.prompt({
    type: "list",
    name: "Options",
    message: chalk.bold.yellow("Select Your Opponent"),
    choices: ["Skeleton", "Assasin", "Zombie", "Exit Game"]
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.Options);
do {
    //skeleton
    if (opponent.Options == "Skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "AfterOpponent",
            message: chalk.bold.yellow("Choose What You Want To Do"),
            choices: ["Attack", "Drink Portion", "Run For Life"]
        });
        if (ask.AfterOpponent == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuel_decrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuel_decrease();
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
            }
            if (o1.fuel <= 0) {
                console.log(chalk.blue.bold.italic(`${p1.name} :You Win!`));
                process.exit();
            }
        }
        if (ask.AfterOpponent == "Drink Portion") {
            p1.fuel_increase();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${o1.fuel}`));
        }
        if (ask.AfterOpponent == "Run For Life") {
            console.log(chalk.red.bold.italic("You Run For save your Life, Better Luck Next Time"));
            process.exit();
        }
    }
    // if(opponent.Options == "Skeleton"){
    //     let ask = await inquirer.prompt({
    //         type:"list",
    //         name:"AfterOpponent",
    //         message:chalk.bold.yellow("Choose What you Want to do"),
    //         choices:["Attack","Drink Portion","Run For Life"]
    //     });
    //     if(ask.AfterOpponent == "Attack")
    //         {
    //             let num = Math.floor(Math.random()*10)
    //             if (num > 0){
    //                 p1.fuel_decrease()
    //                 console.log(chalk.bold.yellow(`${p1.name} fuel is ${p1.fuel}`))
    //                 console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
    //                 if(p1.fuel <= 0){
    //                     console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"))
    //                     process.exit()
    //                 }
    //             }
    //             if (num <= 0){
    //                 o1.fuel_decrease()
    //                 console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
    //                 console.log(chalk.bold.yellow(`${p1.name} fuel is ${p1.fuel}`))
    //             }
    //             if (o1.fuel <= 0){
    //                     console.log(chalk.blue.bold.italic(`${p1.name} :You Win!`))
    //                     process.exit()
    //                 }
    //         }
    //     if(ask.AfterOpponent == "Drink Portion"){
    //         o1.fuel_increase()
    //         console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${o1.fuel}`))
    //     }
    //     if(ask.AfterOpponent == "Run For Life"){
    //         console.log(chalk.red.bold.italic("You Run For save your Life, Better Luck Next Time"))
    //         process.exit()
    //     }
    // }
    //Assasin
    if (opponent.Options == "Assasin") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "AfterOpponent",
            message: chalk.bold.yellow("Choose What you Want to do"),
            choices: ["Attack", "Drink Portion", "Run For Life",]
        });
        if (ask.AfterOpponent == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuel_decrease();
                console.log(chalk.bold.yellow(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuel_decrease();
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.yellow(`${p1.name} fuel is ${p1.fuel}`));
            }
            if (o1.fuel <= 0) {
                console.log(chalk.blue.bold.italic(`${p1.name} :You Win!`));
                process.exit();
            }
        }
        if (ask.AfterOpponent == "Drink Portion") {
            o1.fuel_increase();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${o1.fuel}`));
        }
        if (ask.AfterOpponent == "Run For Life") {
            console.log(chalk.red.bold.italic("You Run For save your Life, Better Luck Next Time"));
            process.exit();
        }
    }
    //Zombie
    if (opponent.Options == "Zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "AfterOpponent",
            message: chalk.bold.yellow("Choose What you Want to do"),
            choices: ["Attack", "Drink Portion", "Run For Life"]
        });
        if (ask.AfterOpponent == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuel_decrease();
                console.log(chalk.bold.yellow(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuel_decrease();
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.yellow(`${p1.name} fuel is ${p1.fuel}`));
            }
            if (o1.fuel <= 0) {
                console.log(chalk.blue.bold.italic(`${p1.name} :You Win!`));
                process.exit();
            }
        }
        if (ask.AfterOpponent == "Drink Portion") {
            o1.fuel_increase();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${o1.fuel}`));
        }
        if (ask.AfterOpponent == "Run For Life") {
            console.log(chalk.red.bold.italic("You Run For save your Life, Better Luck Next Time"));
            process.exit();
        }
    }
    if (opponent.Options == "Exit Game") {
        console.log(chalk.red.bold.italic("You Exit The Game, Better Luck Next Time"));
        process.exit();
    }
} while (true);
