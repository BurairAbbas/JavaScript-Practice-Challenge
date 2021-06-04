// Challenge 1

// we wrap prompt in function so its not show prompt box when we refresh page but instead show prompt when we click on button.
function ageInDays() {
   var birthYear = prompt("What is your Birth Year? My Friend");
   var today = new Date();
   var ageInDayss = (today.getFullYear() - birthYear) * 365;

   var h1 = document.createElement('h1');       // create element 
   var textAnswer = document.createTextNode("You are " +ageInDayss+ " Year old.")   // create Text node easy to append in any html tag 
    h1.setAttribute("id", "ageInDays");     // first parameter takes: attribute key, second parameter takes attribute value
    h1.appendChild(textAnswer);             // here its easy to use textNode
    document.getElementById("flex-box-result").appendChild(h1);     // added h1 tag as a child of flex-box div
}

function reset(){
    // I used this it also remove the msg but here is the big mistake.
    // it just remove text from id but not the text. So, when we click on ClickMe again it create two h1 tags with ids ageInDays
    // so when we click on reset due to two ids it will not remove the text next time.
    // document.getElementById("ageInDays").innerHTML = "";

    // it remove th h1 tag too. So in ispect it look like same as our default layout.
    document.getElementById("ageInDays").remove();
}

