// Retrieve DOM elements
// TODO: Get references to the required DOM elements using document.getElementById()


let posterQuote =document.getElementById("poster-quote");
let posterImage = document.getElementById("poster-image");
let posterTitle = document.getElementById("poster-title");
let randomize = document.getElementById("randomize");
let submit = document.getElementById("submit");
// Array of predefined poster objects
const randomposters = [
  {
    image: 'https://i.etsystatic.com/27918564/r/il/23c05a/3057017349/il_fullxfull.3057017349_ir2d.jpg',
    title: 'perserverance',
    quote: 'stick to the coding.',
  },
  {
    image: 'https://i.ebayimg.com/images/g/lIgAAOxye3BRwNTV/s-l1600.jpg',
    title: 'Biking',
    quote: 'Tire your legs',
  },
  {
    image: 'https://i5.walmartimages.com/asr/b7ef2cef-2084-4a1c-87a6-4a540fd57522.0b3d8ee4f88465d291210574a7723aec.jpeg',
    title: 'Fish',
    quote: 'be bigger',
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
const randomIndex = Math.floor(Math.random()*randomposters.length);  //math.floor(math random times array length)
  // TODO: Retrieve the random poster object from the posters array
const randomPoster = randomposters[randomIndex];
  // TODO: Call the function to update the DOM with the values from the random poster object
  updatePoster(randomPoster.image, randomPoster.title, randomPoster.quote); //from the posters array
}

// Function to generate a custom poster
function generateCustomPoster(event) {
  event.preventDefault();

  // TODO: Retrieve the entered quote and author from the input fields
let enteredQuote = document.getElementById("poster-form-quote").value; //make sure u put a .value
let enteredAuthor = document.getElementById("poster-form-author").value;
let enteredURL = document.getElementById("poster-form-image").value;
  // TODO: Create a custom poster object with the entered values
const customPoster = {
  image: enteredURL,
  title: 'Your motivational poster',
  quote: enteredQuote + ', written by ' + enteredAuthor
}
  // TODO: Call the function to update the DOM with the values from the custom poster object
updatePoster(customPoster.image, customPoster.title, customPoster.quote);
  
}

// Function to update the poster content in the DOM

function updatePoster(img, title, quote) {
  // TODO: Update the DOM with the values provided for the poster image, title, and quote
posterImage.src = img;
posterTitle.textContent= title;
posterQuote.textContent= quote;
}
