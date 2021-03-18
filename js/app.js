/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
let allSections =document.getElementsByTagName("section")
let navElement = document.getElementById("navbar__list")
/**
 * End Global Variables
 * Start Helper Functions
 *
*/
// build the nav
function addToMenue(){
    for (i=0; i<allSections.length; i++){
    let nameInMenue = allSections[i].getAttribute('id');
    let listElem = document.createElement("li")
    let anchorElem = document.createElement('a')
    let anchorText = document.createTextNode(nameInMenue)
    anchorElem.appendChild(anchorText)
    anchorElem.classList.add("menu__link")
    anchorElem.setAttribute("href", `#${nameInMenue}`);
    listElem.appendChild(anchorElem)
    navElement.appendChild(listElem)
    }}
     
// Add class 'active' to section when near top of viewport
window.addEventListener('scroll',function(){
    for(let i=0; i<allSections.length; i++){
        if(allSections[i].getBoundingClientRect().top>=0){
          if(!allSections[i].classList.contains("your-active-class")){
             allSections[i].classList.add("your-active-class")   
      }
     }else if(allSections[i].classList.contains("your-active-class")){
         allSections[i].classList.remove("your-active-class")   
      }
    }   
 })
 
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
   addToMenue()

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active

