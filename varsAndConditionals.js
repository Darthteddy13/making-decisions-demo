/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let kenobiAtk = 20;
let anakinAtk = 30;
let kenobiHP = 100;
let kenobiDef = 0;
let anakinHP =100
let anakinDef = 5;


if (anakinAtk > kenobiAtk)
    {
        console.log('Anakin has a greater attack than Kenobi');
    }
else if (anakinAtk < kenobiAtk)
    {
        console.log('Kenobi has a greater attack than Anakin');
    }
else
    {
        console.log('They have the same attack');
    }

    for (let i = 0; kenobiHP > 0 && anakinHP > 0; i++ ){
        if (i === 1)
        {
            kenobiDef = 25;
        }
        kenobiHP -= anakinAtk - kenobiDef;
        console.log(`Kenobi's health is ${kenobiHP}`)

        if(i >= 1)
        {
            anakinHP -= kenobiAtk - anakinDef;
            console.log(`Anakin's health is ${anakinHP}`)
        }

    
    }

    if (kenobiHP <= 0 )
    {
        console.log("Kenobi has been slain")
    }
    else
    {
        console.log("Anakin has been slain")
    }