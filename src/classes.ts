// Import the Review interface from the interfaces module
import { Review } from "./interfaces";

// Export the MainProperty class as the default export of this module
export default class MainProperty {
  src: string;
  title: string;
  reviews: Review[];

  // Constructor to initialize the properties of the MainProperty class
  constructor(src: string, title: string, reviews: Review[]) {
    this.src = src;
    this.title = title;
    this.reviews = reviews;
  }
}
