// Import the Review interface from the interfaces module
import { Review } from "./interfaces";
import { Permissions, LoyaltyUser } from "./enums";

// Select DOM elements
const reviewTotalDisplay = document.querySelector("#reviews");
const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");

// Function to display the total number of reviews along with the last reviewer's name and an icon
export function showReviewTotal(
  value: number,
  reviewer: string,
  isLoyalty: LoyaltyUser
) {
  const iconDisplay = LoyaltyUser.GOLD_USER ? "⭐" : "";
  reviewTotalDisplay.innerHTML =
    value.toString() +
    " review" +
    makeMultiple(value) +
    " | last reviewed by " +
    reviewer +
    " " +
    iconDisplay;
}

// Function to display a message for returning users and to show the user's name
export function populateUser(isReturning: boolean, userName: string) {
  if (isReturning == true) {
    returningUserDisplay.innerHTML = "back";
  }
  userNameDisplay.innerHTML = userName;
}

// Function to show the price per night if the value is true or if the user has appropriate permissions
export function showDetails(
  value: boolean | Permissions,
  element: HTMLDivElement,
  price: number
) {
  if (value) {
    const priceDisplay = document.createElement("div");
    priceDisplay.innerHTML = price.toString() + "/night";
    element.appendChild(priceDisplay);
  }
}

// Function to return 's' if the value is greater than 1 or equal to 0 (for pluralizing 'review')
export function makeMultiple(value: number): string {
  if (value > 1 || value == 0) {
    return "s";
  } else return "";
}

// Function to get the top two reviews based on the number of stars
export function getTopTwoReviews(reviews: Review[]): Review[] {
  const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
  return sortedReviews.slice(0, 2);
}
