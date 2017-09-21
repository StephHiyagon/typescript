var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
var x;
x = ["hello", 10]; // OK
var y;
y = [200, 'bye'];
console.log(x[0].substr(0, 5));
console.log(x[1].toString());
console.log(y[1].substr(0, 3));
