// ### Exercise 1
// Create a Movie class with the following attributes: movieName, rating, and yearReleased. Create a method printAllAttributes that will alert the user of the value of each attribute.

// In your main function create two Movie objects, assign a value to each attribute, and print them to the console.

// Remember, this is the basic model of a javascript file with a class
// ```javascript
// class Movie{
//   CLASS HERE
// }

// function main(){

// }

class Movie {
  constructor(movieName, rating, yearReleased) {
    this.movieName = movieName;
    this.rating = rating;
    this.yearReleased = yearReleased;
  }
  printAllAttributes() {
    alert(
      `Movie Name: ${this.movieName}, Rating: ${this.rating}, Year Released: ${this.yearReleased}`
    );
  }
}

function main() {
  let movie1 = new Movie("A Gray State", "4.2", "2017");
  let movie2 = new Movie("1984", "4.5", "1984");

  movie1.printAllAttributes();
  movie2.printAllAttributes();
}

main();
