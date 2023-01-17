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
"use strict"

let Name, Age; 
Name = prompt("Bitte Namen eingeben");
Age = prompt("Bitte Alter eingeben");

else if (Age = 0)
{
    console.log (Name + ":" + " " + "trinkt Milch" );
}
else if (Age < 6)
{
    console.log (Name + ":" + " " + "trinkt Milch" );
}
else if (Age = 6)
{
    console.log (Name + ":" + " " + "trinkt Saft" );
}
else if (Age < 13)
{
    console.log (Name + ":" + " " + "trinkt Saft" );
}
else if (Age = 13)
{
    console.log (Name + ":" + " " + "trinkt Cola");
}
else if (Age  < 18)
{
    console.log (Name + ":" + " " + "trinkt Cola");
}
else if (Age = 18)
{
    console.log (Name + ":" + " " + "trinkt Wein" );
}
else if (Age > 18)
{
    console.log (Name + ":" + " " + "trinkt Wein" );
}



