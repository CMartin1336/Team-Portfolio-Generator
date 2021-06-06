const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should return an object containing a 'name' property, an 'id' property, and an 'email' property", () => {
        const obj = new Employee("Jim", 1, "test@test.com");

        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
    });
});