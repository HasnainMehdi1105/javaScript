// var studentname = ["hasnain","muntazir","saad","ali"]
// var institute = ["saylani","NED"]

// for(var i=0; i < studentname.length; i++){
//     for(var j=0; j < institute.length; j++  ){
//         document.write(studentname[i] + " " + institute[j] + "<hr>")
//     }

// }








// for( var i=0; i<studentName.length; i++){

//     for( var j=0; j<institute.length ; j++ )
        

//     document.write(studentName[i] + institute       [j] + "<hr>")
// }


    


// for( var i=0; i <=100; i=i+10){
//     document.write(i)
//     for(j=i; j <= 100; j++)
//     document.write( "<br>")
// }



// ASSIGNMENT


// for(i=1; i<=5; i++ ){
//     document.write("hello world" + "<br>")
// }

// for( var i=1; i<=10; i++ ){
//     document.write(i + "<br>")
// }

// var userInput = +prompt("Enter table number");
// var tableLength = +prompt("Enter table length");

// for(var i=1; i<=tableLength; i++){
//     document.write(userInput + " x " + i + " = " + userInput * i + "<br>")
// }



// var Names = ["messi", "ronaldo", "xavi", "pedri", "yamal", "neymar","suarez", "gavi", "iniesta", "feran", "fermin", "rodri"]
// var playerName = prompt("Enter player name");
// var Values = false




// for( var i=0; i<Names.length; i++){ 
//     if(Names[i] == playerName ){
//         Values = true
//         document.write(Names[i] +  " " + "player" + " " + "found")
//     }
// }
// if( Values == false){
//     document.write("player not found")
// }

// var str = ["audi","mehran","fx","yaris","civic"]
// var userInput = prompt("enter car name")
// var Fixcase = userInput.toLowerCase();
// if(userInput == str){}
// document.write(Fixcase + "  " + "car found" + "<br>")
// if(userInput !== str){
//     document.write( "car not found")
// }

var str = "hasnain";  
var vowels = 0;  
var consonants = 0;  

for (var i = 0; i < str.length; i++) {  
    var ch = str[i];  

    if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U' ||  
        ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {  
        vowels++;  
    } else {  
        consonants++;  
    }  
}  

document.write("Vowels: " + vowels + "<br>");  
document.write("Consonants: " + consonants);
