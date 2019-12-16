document.getElementsByTagName("h1")[0].textContent = "Fruits & Vegetables Corp";

document.getElementsByTagName("title")[0].textContent = "Fruits & Vegetables Corp";


const headerColor = document.getElementsByTagName("h1")[0];

headerColor.setAttribute("style", "color: red");


document.getElementsByTagName("a")[2].textContent = "Vegetables";

var testt = document.getElementById("contact");


var contact = document.createElement("h2");
contact.textContent = "Contact";
var list = document.getElementById("contact");  
list.insertBefore(contact, list.childNodes[1]); 


var about = document.createElement("h2");
about.textContent = "About";
var list = document.getElementById("about");  
list.insertBefore(about, list.childNodes[0]); 


document.getElementsByTagName("section")[0].style.position = "fixed";

document.getElementsByTagName("section")[0].style.bottom = "365px";


document.getElementsByTagName("td")[0].style.position = "fixed";

document.getElementsByTagName("td")[0].style.marginLeft = "20px"

document.getElementsByTagName("td")[0].style.fontWeight = "bold";




document.getElementsByTagName("td")[1].style.fontWeight = "bold";

document.getElementsByTagName("td")[1].style.paddingLeft = "40px"











































