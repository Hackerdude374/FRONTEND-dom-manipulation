// Retrieve DOM elements
// TODO: Get references to the required DOM elements using document.getElementById()


let posterQuote =document.getElementById("poster-quote");s
let posterImage = document.getElementById("poster-image");
let posterTitle = document.getElementById("poster-title");
let randomize = document.getElementById("randomize");
let submit = document.getElementById("submit");
// Array of predefined poster objects
const posters = [
  {
    image: 'image-url-1.jpg',
    title: 'Poster 1',
    quote: 'Quote 1',
  },
  {
    image: 'image-url-2.jpg',
    title: 'Poster 2',
    quote: 'Quote 2',
  },
  {
    image: 'image-url-3.jpg',
    title: 'Poster 3',
    quote: 'Quote 3',
  },
  // Add more poster objects as needed
];

// Event listener for randomize button
// TODO: Add an event listener to the randomizeButton that calls a function when clicked
randomize.addEventListener('click',generateRandomPoster);
// Event listener for submit button
// TODO: Add an event listener to the submitButton that calls a function when clicked
submit.addEventListener('click', generateCustomPoster);

// Function to generate a random poster
function generateRandomPoster() {
  // TODO: Generate a random index within the range of the posters array length
let randomIndex = Math.floor(Math.random()*posters.length);  //math.floor(math random times array length)
  // TODO: Retrieve the random poster object from the posters array
let randomPoster = posters[randomIndex];
  // TODO: Call the function to update the DOM with the values from the random poster object
  updatePoster(randomPoster.image, randomPoster.title, randomPoster.quote); //from the posters array
}

// Function to generate a custom poster
function generateCustomPoster(event) {
  event.preventDefault();

  // TODO: Retrieve the entered quote and author from the input fields
let enteredQuote = document.getElementById("poster-form-quote");
  let enteredAuthor = document.getElementById("poster-form-author");
  // TODO: Create a custom poster object with the entered values
let customPoster = {
  image: "https://media.defense.gov/2019/Oct/16/2002195533/-1/-1/0/430309-O-ZZ999-004.JPG",
  title: 'Your motivational poster',
  quote: enteredQuote + ', written by ' + enteredAuthor;
}
  // TODO: Call the function to update the DOM with the values from the custom poster object
updatePoster(customPoster.image, customPoster.title, customPoster.quote);
}

// Function to update the poster content in the DOM
function updatePoster(img, titl, quot) {
  // TODO: Update the DOM with the values provided for the poster image, title, and quote
posterImage.src = img;
posterTitle.textContent = titl;
posterQuote.textContent = quot;
}
