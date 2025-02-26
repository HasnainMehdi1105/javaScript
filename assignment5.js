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

// var str = "hasnain";  
// var vowels = 0;  
// var consonants = 0;  

// for (var i = 0; i < str.length; i++) {  
//     var ch = str[i];  

//     if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U' ||  
//         ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {  
//         vowels++;  
//     } else {  
//         consonants++;  
//     }  
// }  

// document.write("Vowels: " + vowels + "<br>");  
// document.write("Consonants: " + consonants);



// var Mobile = 'phone mera hay'
// document.write(Mobile.indexOf("a"))
 

//assignment 5


// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// document.write("Hello, " + fullName + "<br>");

// var mobileModel = prompt("Enter your favorite mobile phone model:");
// document.write(mobileModel.length + "<br>");

// var country = "Pakistani";
// document.write(country.indexOf("n") + "<br>");

// var text = "Hello World";
// document.write(text.lastIndexOf("l") + "<br>");

// document.write(country.charAt(3) + "<br>");

// var fullNameConcat = firstName.concat(" ", lastName);
// document.write("Hello, " + fullNameConcat + "<br>");

// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");
// document.write(newCity + "<br>");

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message.replace(/and/g, "&") + "<br>");

// var numString = "472";
// var num = Number(numString);
// document.write(num + ", " + typeof num + "<br>");

// var url = prompt("Enter a URL (e.g., www.facebook.com):");
// document.write(url.split(".")[1] + "<br>");

// var input = prompt("Enter text:");
// document.write(input.toUpperCase() + "<br>");

// document.write(input.toLowerCase() + "<br>");

// var words = input.split(" ");
// for (var i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
// }
// document.write(words.join(" ") + "<br>");

// var numVal = 35.36;
// document.write(numVal.toString().replace(".", "") + "<br>");

// var a = "3", b = "3";
// var x = a + b;
// document.write(x + "<br>");

// var y = a - b;
// document.write(y + "<br>");

// var username = prompt("Enter username:");
// if (/[@.,!]/.test(username)) {
//     document.write("Invalid username!<br>");
// } else {
//     document.write("Valid username.<br>");
// }

// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Enter an item to search:").toLowerCase();
// if (items.includes(search)) {
//     document.write(search + " is available.<br>");
// } else {
//     document.write(search + " is not available.<br>");
// }

// var str1 = prompt("Enter first string:");
// var str2 = prompt("Enter second string:");
// if (str1 > str2) {
//     document.write(str1 + " is greater.<br>");
// } else if (str1 < str2) {
//     document.write(str2 + " is greater.<br>");
// } else {
//     document.write("Both are equal.<br>");
// }

// var password = prompt("Enter password:");
// if (!/^[a-zA-Z]/.test(password) || password.length < 6 || !/\d/.test(password)) {
//     document.write("Invalid password!<br>");
// } else {
//     document.write("Valid password.<br>");
// }

// var university = "University of Karachi";
// document.write(university.split(" ").join("<br>") + "<br>");

// var userInput = prompt("Enter a string:");
// document.write(userInput.charAt(userInput.length - 1) + "<br>");

// var sentence = "The quick brown fox jumps over the lazy dog";
// var count = sentence.toLowerCase().split("the").length - 1;
// document.write(count + "<br>");

// var str = "Pakistan";
// var vowels = str.match(/[aeiou]/gi)?.length || 0;
// var consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
// document.write(vowels + ", " + consonants + "<br>");
