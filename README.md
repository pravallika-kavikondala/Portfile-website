# Portfile-website

### Motivation
Developing a full stack project is interesting and fun to do. I wanted to make something cool and the first thing that came to my mind was ‘Developing a website for my dad!’. And yes, the outcome is this full stack project. My dad, Mr. K N Gopal, is an international chess player and he was selected to represent India-such a big nation-in World Junior Chess championship in Chili, South America in the year 1990.

### Overview
Front-end for this project uses HTML, CSS, Bootstrap and jQuery. Firebase is chosen for back-end. Server-side application is written in Node and it is published with Express. Entire application is made responsive by using bootstrap libraries. The application is listening on port 8080 which is specified in server.js file. When application is run with the command node server.js in the terminal, it renders home page as the landing page. Responsive navigation bar is created, and it provides navigation across Home, Summary, Achievements, Gallery, Stats, Games and Email me pages.

## Prerequisites
```
$ npm install
```
Use the following command to start the server:
```
$ node server.js
```
Set-up a firebase database account at: https://firebase.google.com/

## Deployment
Once the server is running, goto http://localhost:8080/ in the web brower to start the application. 

## References
- Navigation bar: https://www.w3schools.com/bootstrap/bootstrap_navbar.asp
- Carousel: https://www.w3schools.com/bootstrap/bootstrap_carousel.asp
- Overlay Fade effect: https://www.w3schools.com/howto/howto_css_image_overlay.asp
- Google Chart Area: https://developers.google.com/chart/interactive/docs/gallery/areachart
- Email service to HTML form: https://formspree.io/ 
- chess-db.com to access pre-recorded chess games

## License
This project is licensed under the MIT License - see the LICENSE.md file for details
