const person1 = {
    firstName: "John2",
    lastName: "Doe2",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};

const person2 = () => {
    var p = {
        firstName: "Hazrat",
        lastName: "Ali",
    };
    return p;
};

// Return "Hazrat Ali":
console.log(person1.fullName.apply(person2()));
