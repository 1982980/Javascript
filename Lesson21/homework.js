function User(fullName) {
    this.fullName = fullName;
    Object.defineProperties(this, {
        "firstName": {
            get: function () {
                return this.fullName.split(" ")[0];
            },
            set: function (firstName) {
                const lastName = this.fullName.split(" ")[1];
                this.fullName = firstName + " " + lastName;
            }
        },
        "lastName": {
            get: function () {
                return this.fullName.split(" ")[1];
            },
            set: function (lastName) {
                const firstName = this.fullName.split(" ")[0];
                this.fullName = firstName + " " + lastName;
            }
        }
    })
};

let vasya = new User("Василий Теркин");