// 1. Declare an empty array using JS literal notation
let studentNames = [];

// 2. Declare an empty array using JS object notation
let studentNamesObject = new Array();

// 3. Declare and initialize a strings array
let fruits = ["Apple", "Banana", "Cherry"];

// 4. Declare and initialize a numbers array
let numbers = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array
let booleanArray = [true, false, true];

// 6. Declare and initialize a mixed array
let mixedArray = ["Hello", 42, true, null];

// 7. Education qualifications in Pakistan
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("Qualifications: " + qualifications.join(", ") + "<br><br>");

// 8. Student scores
let students = ["Kifal", "Bilal", "Aaliyan"];
let scores = [450, 380, 470];
let totalMarks = 500;

for (let i = 0; i < students.length; i++) {
    let percentage = (scores[i] / totalMarks) * 100;
    document.write(`${students[i]}: Score = ${scores[i]}, Percentage = ${percentage.toFixed(2)}%<br>`);
}
document.write("<br>");

// 9. Color manipulation program
let colors = ["Red", "Green", "Blue"];

// a. Add color at the beginning
let newColor = prompt("What color do you want to add to the beginning?");
colors.unshift(newColor);
document.write("After adding to the beginning: " + colors.join(", ") + "<br>");

// b. Add color at the end
newColor = prompt("What color do you want to add to the end?");
colors.push(newColor);
document.write("After adding to the end: " + colors.join(", ") + "<br>");

// c. Add two colors at the beginning
colors.unshift("Yellow", "Purple");
document.write("After adding two colors at the beginning: " + colors.join(", ") + "<br>");

// d. Delete the first color
colors.shift();
document.write("After deleting the first color: " + colors.join(", ") + "<br>");

// e. Delete the last color
colors.pop();
document.write("After deleting the last color: " + colors.join(", ") + "<br>");

// f. Add color at a specific index
let index = prompt("At which index do you want to add a color?");
let colorName = prompt("What color do you want to add?");
colors.splice(index, 0, colorName);
document.write("After adding at index " + index + ": " + colors.join(", ") + "<br>");

// g. Delete color(s) from a specific index
let delIndex = prompt("At which index do you want to delete color(s)?");
let numToDelete = prompt("How many colors do you want to delete?");
colors.splice(delIndex, numToDelete);
document.write("After deleting " + numToDelete + " color(s) from index " + delIndex + ": " + colors.join(", ") + "<br><br>");

// 10. Store student scores and sort them
let scoreArray = [450, 380, 470, 510, 390];
scoreArray.sort((a, b) => a - b);
document.write("Sorted scores: " + scoreArray.join(", ") + "<br><br>");

// 11. Copy city names
let cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];
let selectedCities = cities.slice(0, 3);
document.write("Selected cities: " + selectedCities.join(", ") + "<br><br>");

// 12. Create a single string from an array
let arr = ["This ", "is ", "my ", "cat"];
let resultString = arr.join("");
document.write("Joined string: " + resultString + "<br><br>");

// 13. FIFO Array
let fifoArray = [];
fifoArray.push("First");
fifoArray.push("Second");
fifoArray.push("Third");
document.write("FIFO Array: " + fifoArray.join(", ") + "<br><br>");

// 14. LIFO Array
let lifoArray = [];
lifoArray.push("First");
lifoArray.push("Second");
lifoArray.push("Third");
document.write("LIFO Array (in reverse): " + lifoArray.reverse().join(", ") + "<br><br>");

// 15. Dropdown menu for phone manufacturers
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
document.write('<select>');
for (let i = 0; i < manufacturers.length; i++) {
    document.write(manufacturers[i]);
}