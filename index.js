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


document.getElementsByTagName("a")[2].href="#vegetables"; 


document.getElementById("about").parentNode.insertBefore(document.getElementById("about"), document.getElementById("contact"));


var child = document.getElementsByTagName("td")[0];

var parent = document.createElement("th");

parent.textContent = "Name";

child.replaceWith(parent);



var child2 = document.getElementsByTagName("td")[0];

var parent2 = document.createElement("th");

parent2.textContent = "Email";

child2.replaceWith(parent2);


var about = document.createElement("h2");
about.textContent = "About";
var list = document.getElementById("about");  
list.insertBefore(about, list.childNodes[0]); 


var about2 = document.createElement("p");
about2.textContent = "We're the best in fruits & vegetables";
var list2 = document.getElementById("about");  
list.insertBefore(about2, list2.childNodes[1]); 

document.querySelector("#about").childNodes[2].remove();


var callbackFunc = function(){
    
};
var head = document.getElementsByTagName( "head" )[0];
var fileref=document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", "main.css");

    fileref.onload  = callbackFunc;
    head.insertBefore( fileref, head.firstChild );



















































