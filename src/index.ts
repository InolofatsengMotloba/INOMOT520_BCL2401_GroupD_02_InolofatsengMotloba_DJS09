import "../index.css";

// Imports from modules
import {
  showReviewTotal,
  populateUser,
  showDetails,
  getTopTwoReviews,
} from "./utils";
import { Permissions, LoyaltyUser } from "./enums";
import { Review, Property } from "./interfaces";
import MainProperty from "./classes";

// Declare a variable to track if the user is logged in
let isLoggedIn: boolean;

// Select DOM elements for various parts of the page
const propertyContainer = document.querySelector(".properties");
const reviewContainer = document.querySelector(".reviews");
const container = document.querySelector(".container");
const button = document.querySelector("button");
const footer = document.querySelector(".footer");

// Reviews
const reviews: Review[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: "27-03-2021",
  },
];

// An object representing a user with various properties
const you = {
  firstName: "Connor",
  lastName: "Wehmeyer",
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 35,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};

// Array of Properties
const properties: Property[] = [
  {
    image: "./images/colombia-property.jpg",
    title: "Colombian Shack",
    price: 45,
    location: {
      firstLine: "shack 37",
      city: "Bogota",
      code: 45632,
      country: "Colombia",
    },
    contact: [+1123495082908, "marywinkle@gmail.com"],
    isAvailable: true,
  },
  {
    image: "./images/poland-property.jpg",
    title: "Polish Cottage",
    price: 30,
    location: {
      firstLine: "no 23",
      city: "Gdansk",
      code: 343903,
      country: "Poland",
    },
    contact: [+1298239028490830, "garydavis@hotmail.com"],
    isAvailable: false,
  },
  {
    image: "./images/london-property.jpg",
    title: "London Flat",
    price: 25,
    location: {
      firstLine: "flat 15",
      city: "London",
      code: "SW4 5XW",
      country: "United Kingdom",
    },
    contact: [+34829374892553, "andyluger@aol.com"],
    isAvailable: true,
  },
  {
    image: "./images/malaysian-hotel.jpeg",
    title: "Malia Hotel",
    price: 35,
    location: {
      firstLine: "Room 4",
      city: "Malia",
      code: 45334,
      country: "Malaysia",
    },
    contact: [+60349822083, "lee34@gmail.com"],
    isAvailable: false,
  },
];

// Call the showReviewTotal function to display the total number of reviews, last reviewer's name, and loyalty status
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

// Call the populateUser function to display a message for returning users and show the user's first name
populateUser(you.isReturning, you.firstName);

// Add the properties
for (let i = 0; i < properties.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = properties[i].title;
  const image = document.createElement("img");
  image.setAttribute("src", properties[i].image);
  card.appendChild(image);
  showDetails(you.permissions, card, properties[i].price);
  propertyContainer.appendChild(card);
}

// Initialize a count variable to keep track of the number of times the addReviews function is called
let count = 0;

// Function to add reviews to the review container
function addReviews(array: Review[]): void {
  if (!count) {
    count++;
    const topTwo = getTopTwoReviews(array);
    for (let i = 0; i < topTwo.length; i++) {
      const card = document.createElement("div");
      card.classList.add("review-card");
      card.innerHTML = topTwo[i].stars + " stars from " + topTwo[i].name;
      reviewContainer.appendChild(card);
    }
    container.removeChild(button);
  }
}

// Event listener for the Review element
button.addEventListener("click", () => addReviews(reviews));

// Footer
let currentLocation: [string, string, number] = ["Rustenburg", "14:56", 16];
footer.innerHTML =
  currentLocation[0] +
  " " +
  currentLocation[1] +
  " " +
  currentLocation[2] +
  "°";

// Create a new instance of the MainProperty class representing the user's main property
let yourMainProperty = new MainProperty(
  "./images/italian-property.jpg",
  "Italian House",
  [
    {
      name: "Olive",
      stars: 5,
      loyaltyUser: LoyaltyUser.GOLD_USER,
      date: "12-04-2021",
    },
  ]
);

// Main Image (Italian Property)
const mainImageContainer = document.querySelector(".main-image"); // Select the main image container element from the DOM
const image = document.createElement("img"); // Create a new image element
image.setAttribute("src", yourMainProperty.src); // Set the 'src' attribute of the image element to the source URL of the user's main property
mainImageContainer.appendChild(image); // Append the image element to the main image container in the DOM
