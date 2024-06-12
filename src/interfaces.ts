// Imports from modules
import { LoyaltyUser } from "./enums";
import { Price, Country } from "./types";

// Define the Review interface to represent a review of a property
export interface Review {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
}

// Define the Property interface to represent a property listing
export interface Property {
  image: string;
  title: string;
  price: Price;
  location: {
    firstLine: string;
    city: string;
    code: number | string;
    country: Country;
  };
  contact: [number, string];
  isAvailable: boolean;
}
