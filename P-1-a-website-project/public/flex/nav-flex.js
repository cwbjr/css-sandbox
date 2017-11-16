function myFunction() {
    var target = document.getElementById("myTopnav");
    if (target.className === "topnav") {
        target.className += "responsive";
    } else {
        target.className = "topnav";
    }
}
// var myHeading = document.querySelector('h2');
// myHeading.textContent = 'Hello world!';
