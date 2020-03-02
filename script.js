
// Fonctionnalité N°1 --------------------------------------------------

var footerClick = document.getElementsByTagName("footer")[0];
// console.log(footerClick)

var count = 0

function clickOnFooter () {
	count ++ ;
	var clique = `Clique numéro ${count}`;
	console.log(clique);

};

footerClick.addEventListener("click", clickOnFooter);

// Fonctionnalité N°2 --------------------------------------------------

var navbarHeader = document.getElementById("navbarHeader");
var button = document.getElementsByTagName("button")[0];
var navbarStatus = false

function clickOnNav () {
	if (navbarStatus == false){
		navbarHeader.classList.add("collapse");
		navbarStatus = true;
	}
	else if (navbarStatus == true){
		navbarHeader.classList.remove("collapse");
		navbarStatus = false;
	}
}

button.addEventListener("click", clickOnNav);

// Fonctionnalité N°3 --------------------------------------------------


var text0 = document.querySelector("p.card-text");
	// console.log(text);
var edit0 = document.querySelectorAll("button.btn-outline-secondary")[0];
	// console.log(edit);

function clickOnEdit0 () {
	text0.style.color = "red";
}
edit0.addEventListener("click", clickOnEdit0);

// Fonctionnalité N°4  --------------------------------------------------

var text1 = document.getElementsByClassName("card-text")[1];
// console.log(text1);
var edit1 = document.querySelectorAll("button.btn-outline-secondary")[1];
	// console.log(edit1);

function clickOnEdit1 () {
	if (text1.style.color === "green"){
	text1.style.color = "black";
		}	
	else { 
	text1.style.color = "green";
		}
}

edit1.addEventListener("click", clickOnEdit1)

// Fonctionnalité N°5  --------------------------------------------------

var link = document.querySelector("link");
var navbar = document.getElementsByTagName("header")[0];

function clickOnNav2 (){
	if (link.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"){
		link.href = "" ;
	}
	else {
		link.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
	}
}

navbar.addEventListener("click", clickOnNav2);




