//ARIAS, JACOB GABRIEL L.
//2023-13954
//Section: V-6L


//created variables that stores all numbers, lowercase letters, and uppercase letters
var numbers = "0123456789";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


//function for validating if 2 passwords match

function validatePassword(pass1, pass2){

    // created boolean variables for flags
    let hasNum = false;
    let hasLower = false;
    let hasUpper = false;
    if(pass1 === pass2 && pass1.length >= 8 && pass2.length >= 8){ // checks if the two passwords are equal and if their characters are at least 8, otherwise return false
        for(let i=0; i<pass1.length; i++){ //created a for loop that checks if they all have at least 1 number, 1 lowercase character, 1 uppercase character
            if(numbers.includes(pass1[i])){ //use includes function to check if the character is a number
                hasNum = true;
            }
            else if(lowerChar.includes(pass1[i])){ //same goes for lower and upper
                hasLower = true;
            }
            else if(upperChar.includes(pass1[i])){
                hasUpper= true;
            }
        }
        if(hasNum == true && hasLower == true && hasUpper == true){ // checks if all flags are true
            return true;
        }
        else{ //return false if not
            return false
        }
    }
    else{
        return false;
    }

}
//sample cases
console.log(validatePassword("helloworld", "hello"));
console.log(validatePassword("hello", "hello"));// returns false
console.log(validatePassword("hello1234", "hello1234")); // returns false
console.log(validatePassword("Hello1234", "Hello1234")); // returns true
console.log(validatePassword("HELLO1234", "HELLO1234"));

//function for reversing the password
function reversePassword(pass1){
    var reversed =""; //empty string to store the reversed password

    for(var i=pass1.length-1; i>=0; i--){//use for loop and use the last index as initial value to store the characters in a reverse manner
        reversed = reversed + pass1[i];
    }

    return reversed;
}
//function for storing password
function storePassword(name, pass1, pass2){
    let person = { // made an object that have properties name and newpassword then initalize it using the parameters given
        name: name, 
        newpassword: pass1
    }

    if(validatePassword(pass1, pass2)){ // if 2 passwords match, reverse the password and change the newpassword of the object, then return the object
        person.newpassword = reversePassword(pass1);
        return person;
    }
    else{
        return person; //else, retain (as the initialize value of the newpassword property is already the first given password
    }
}

console.log(storePassword("Jacob", "Pass1234", "Pass1234"));
console.log(storePassword("Jacob", "Pass123", "Pass12345"));


