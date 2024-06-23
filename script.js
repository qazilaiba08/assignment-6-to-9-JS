
//chap 6 to 9

//Q#1

// let a = 10;
// document.write("<h3>");

// document.write("Result:"+"</h3>"+"<br>");

// document.write("The value of a is : "+a+"<br>");

// document.write("........................"+"<br>");

// let b = ++a;

// document.write("The value of ++a is : "+b+"<br>");
// document.write("Now the value of a is : "+a+"<br>");

// let c = a++;

// document.write("The value of a++ is : "+c+"<br>");
// document.write("Now the value of a is : "+a+"<br>");

// let d = --a;

// document.write("The value of --a is : "+d +"<br>");
// document.write("Now the value of a is : "+a+"<br>");

// let e = a--;

// document.write("The value of a-- is : "+e +"<br>");
// document.write("Now the value of a is : "+a+"<br>");

//Q#2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// document.write("a is : " + a+"<BR>");
// document.write("b is : "+b +"<BR>");
// document.write("result is : "+result);

//Q#3

// let user = prompt("Enter user Name");

//Q#5

var num = prompt("Enter the number you want to print the table for:");

if (num === "" || num === null) {
    num = 5; 
} 
for (var i = 1; i <= 10; i++) {
    console.log(num + " * " + i + " = " + (i * num));
}

//Q#6

 // a) Take three subjects name from user and store them in 3 different variables.
 let subject1 = prompt("Enter the name of the first subject:");
 let subject2 = prompt("Enter the name of the second subject:");
 let subject3 = prompt("Enter the name of the third subject:");

 // b) Total marks for each subject is 100, store it in another variable.
 let totalMarksPerSubject = 100;

 // c) Take obtained marks for first subject from user and store it in a different variable.
 let marks1 = parseInt(prompt(`Enter obtained marks for ${subject1}:`), 10);

 // d) Take obtained marks for remaining 2 subjects from user and store them in variables.
 let marks2 = parseInt(prompt(`Enter obtained marks for ${subject2}:`), 10);
 let marks3 = parseInt(prompt(`Enter obtained marks for ${subject3} :`), 10);

 // e) Calculate total marks and percentage
 let obtainedMarksTotal = marks1 + marks2 + marks3;
 let maximumMarksTotal = totalMarksPerSubject * 3;
 let percentage = (obtainedMarksTotal / maximumMarksTotal) * 100;

 let mark01 =(marks1 / totalMarksPerSubject) *100

 let mark02 =(marks2 / totalMarksPerSubject) *100

 let mark03 =(marks3 / totalMarksPerSubject) *100
 document.write("<h2>");
 document.write("Subject total marks obtained marks precentage");
 document.write("</h2>");
 document.write(subject1+ "    " + totalMarksPerSubject + "    "+ marks1 +"    " + mark01+"%"+"<br>");
 document.write(subject2+ "    " + totalMarksPerSubject + "    "+ marks2 +"    " + mark02+"%"+"<br>");
 document.write(subject3+ "    " + totalMarksPerSubject + "    "+ marks3 +"    " + mark03+"%"+"<br>");

 document.write( "Total"+"  "+obtainedMarksTotal + "   "+ maximumMarksTotal + "   " + percentage+"%")