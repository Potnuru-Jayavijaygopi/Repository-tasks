//1. Create a student object with nested address.
const student = {
    id: 101,
    name: "Gopi",
    age: 22,
    course: "B.Tech AI",
    address: {
        city: "Guntur",
        state: "Andhra Pradesh",
        pincode: 522001
    }
};

console.log(student);
console.log(student.name);          
console.log(student.address.city);  

//2. safely access misisng property using ?.
const employee = {
    id: 101,
    name: "Ravi",
    company: {
        name: "ABC Tech"
    }
};
console.log(employee.company?.name);
console.log(employee.company?.location);
console.log(employee.salary?.amount);  

//3. Looop through object and priont all keys & values
const bike = {
    brand: "Honda",
    model: "Shine",
    cc: 125,
    color: "Red"
};
for (let key in bike) {
    console.log(key + " : " + bike[key]);
}

//4.Copy an object and change a property , also add a new property
const mobile = {
    brand: "Samsung",
    model: "A15"
};
const newMobile = {
    brand: mobile.brand,
    model: mobile.model,
    color: "Black"
};
newMobile.model = "v25";
newMobile.brand = "vivo";
console.log(newMobile);

//5. Decide whetehr to sue array or object for:
//List of Marks.
const marks = [85, 90, 78, 92];
//User profile.
const profile = {
    name: "Gopi",
    age: 22,
    city: "Guntur"
};
//Shopping Cart items.
const cartItems = ["Laptop", "Mouse", "Keyboard"];

//6.Create an object named as compnay with nested departments with name descripiton and id of each department
let company={
    name:"infosys",
    departments: {
        hr: {
            id: 101,
            name: "Human Resources",
            description: "Handles employee management"
        },
        it: {
            id: 102,
            name: "Information Technology",
            description: "Manages software and systems"
        }
    }
};
//     Loop and print the details
for (let key in company.departments){
    let dept = company.departments[key];
     console.log("ID:", dept.id);
     console.log("Name:", dept.name);
     console.log("Description:", dept.description);
}
//     use Optional Chaining in at least one place
console.log(company.departments.finance?.name);

//7. Create an object book with title, author, rating
// Update the rating of the book
//Add a function describe() that needs to log the "Book by an author named as [author name]"
const book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    rating: 4,
    describe: function () {
        console.log("Book by an author named as " + this.author);
    }
};
book.rating = 5;
console.log("Title:", book.title);
console.log("Author:", book.author);
console.log("Rating:", book.rating);
book.describe();

//8,9.Create a object fro a movie, a product, for a user profile
//movie
const movie = {
    title: "RRR",
    director: "S. S. Rajamouli",
    rating: 9,
    // try use this method
    describe: function () {
        console.log("Movie directed by " + this.director);
    }
};
console.log(movie);
movie.describe();
//product
const product = {
    name: "Laptop",
    brand: "Dell",
    price: 50000,
    //try use this method
    describe: function () {
        console.log("Product brand is " + this.brand);
    }
};
console.log(product);
product.describe();
//userprofile
const userProfile = {
    name: "Gopi",
    age: 22,
    city: "Guntur", 
    //try use this method
    describe: function () {
        console.log(this.name + " is from " + this.city);
    }
};
console.log(userProfile);
userProfile.describe();

//1.Create an object and copy it using spread.
const laptop = {
    brand: "Dell",
    ram: "16GB"
};
const newLaptop = {
    ...laptop
};
console.log(newLaptop);

//2.Modify copied object and verify original doesn't change
newLaptop.ram = "32GB";
console.log("Original:", laptop);
console.log("Copied:", newLaptop);

//3.Create an array and copy it using spread
let colors = ["Red", "Blue", "Green"];
let newColors = [...colors];
console.log(newColors);

//4.Create a nested object and observe copy behaviour
const college = {
    name: "SMCE",
    department: {
    branch: "CSE"
    }
};
const newCollege = {
    ...college
};
newCollege.department.branch = "IT";
newCollege.name="KHIT";
console.log("Original:", college);
console.log("Copied:", newCollege);