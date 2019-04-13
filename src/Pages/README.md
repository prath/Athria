## Pages

Pages area the view of the app. Here will be where we create the pages for our app. Home page, Dashboard Page, Login Page, etc. 

In this folder will also have layout pages. Think layout pages as the master layout for other pages/views in this app. 

You can structure it however you like for this folder, but please consider these few things: 
* Try to add styles as minimal as possible, or without style at all if possible. Let the global style (imported in root index.js) and components styles handle the styling.
* If you need to add styles, declare it in a separate file. e.g. `home.scss` for `Home.js` page. One .scss file for one page.
