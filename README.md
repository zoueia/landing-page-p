# Landing Page Project

## Table of Contents

* [Instructions](#instructions)
* [Modifications to app.js file](https://github.com/zoueia/landing-page-p/blob/main/README.md#modifications_to_appjs_file)
* [Modifications to style.css file](https://github.com/zoueia/landing-page-p/blob/main/README.md#modifications_to_stylecss_file)
* [Modifications to index.html file](#Modifications_to_index.html_file)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## Modifications_to_app.js_file

To create a dynamic navigation bar first of all I needed to find all section tags on the html page and save them to array to handle them later, also I made a variable that holds the parent element of the navigation list items.
First, I created an addToMenue() function to loop through the array and extract section Id as section name in the menu, it also creates the navigation list items to be added as a children of the parent UL element which has specific Id, and I had to use an addEventListener() function that will highlight the section currently in view while scrolling, to do that I needed to create anonymous functions that loops through the array and add the "your-active-class" class only to the section in view

## Modifications_to_style.css_file

I added "scroll-behavior: smooth;" property to the html element to allow for scrolling to specific section through the nav bar 

## Modifications_to_index.html_file

I added the 4th required section  
