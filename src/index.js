import { pageLoad } from './page-load.js'
import { menu } from './menu.js'
import { contact } from './contact.js'
//import (call) inital page load that will come from another file

console.log("no way this works first try right")
pageLoad();
document.getElementById("home").addEventListener("click", pageLoad);
document.getElementById("menu").addEventListener("click", menu);
document.getElementById("contact").addEventListener("click", contact);

//eventually add logic so that when a button is pressed, 
//one of these 3 functions are called.
//pageLoad();
//menu();