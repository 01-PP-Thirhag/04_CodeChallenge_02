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
// let Name, Age;

// Name = prompt("Bitte einen Namen eingeben");
// Age = prompt("Bitte ein Alter eingeben"); 


// if (Age > 0 && Age < 6)
// {
// console.log(Name + " " + "trinkt Milch");
// }
// else if (Age >= 6 && Age <= 12) 
// {
// console.log(Name + " " + "trinkt Saft");
// } 
// else if (Age >= 13 && Age <=17 ) 
// {
// console.log(Name + " " + "trinkt Cola");
// } 
// else
// {
// console.log(Name + " " + "trinkt Wein");
// } 

/*******Variante Case ************/
let alter, nutzer;



alter = prompt("Bitte Alter angeben:");

nutzer = prompt("Bitte Namen angeben:");



switch (true)

{

        case (alter <=5):

            console.log(nutzer +" trinkt Milch");

            break;

        case (alter >= 6 && alter <=12):

            console.log(nutzer +" trinkt Saft");

            break;

        case (alter >=13 && alter <18):

            console.log(nutzer +" trinkt Cola");

            break;

        case (alter >=18):

            console.log(nutzer +" trinkt Wein");

            break;

        default:

        console.log("Die Eingabe ist nicht korrekt!")

            break;

}