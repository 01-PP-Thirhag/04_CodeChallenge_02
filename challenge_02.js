/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */


Name = prompt("Bitte Namen eingeben");
Age = prompt("Bitte Alter eingeben");

let isKleinK, isKind, isJugend, isAdult;

isKleinK = (Age > 0 + Age < 6);
isKind = (Age == 6 + Age > 13);
isJugend = (Age == 13 + Age < 18);
isAdult = (Age == 18 + Age > 18);

if (true);
if (isKleinK)
{
    console.log(Name +":"+" "+ "trinkt Milch")
}
if (isKind) 
{
console.log(Name +":"+" "+ "trinkt Saft")    
}
if (isJugend) 
{
console.log(Name +":"+" "+ "trinkt Cola")    
}
if (isAdult)
{
console.log(Name +":"+" "+ "trinkt Wein")    
}
