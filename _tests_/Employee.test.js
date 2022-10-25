const Employee = require("../lib/Employee");

describe("Employee", () => {

    describe("Validation", () => {
        it("Should return a valid employee who is in the team.", () => {

            //Set up 
            const employee = new Employee("Ali Koc", "1967", "alikoc@fenerbahce.com", "Employee");
            // employee.name = "Ali Koc";
            // employee.id = "1967";
            // employee.email = "alikoc@fenerbahce.com";
            // employee.role = "Employee";

            // Verify
            expect(employee.name).toEqual("Ali Koc");
            expect(employee.id).toEqual("1967");
            expect(employee.email).toEqual("alikoc@fenerbahce.com");
            expect(employee.role).toEqual("Employee");

        });
    });

    describe("getName function", () => {
        it("Should return assigned name.", () => {

            // Set up
            const name = "Ali Koc";
            
            // Execute
            const employee = new Employee(name);

            // Verify
            expect(employee.name).toEqual(name);

        });
    });

    describe("getId function", () => {
        it("Should return assigned ID number.", () => {

            // Set up
            const id = "1967";
            
            // Execute
            const employee = new Employee("Ali Koc", id);

            // Verify
            expect(employee.id).toEqual(id);

        });
    });

    describe("getEmail function", () => {
        it("Should return assigned email address.", () => {

            // Set up
            const email = "alikoc@fenerbahce.com";
            
            // Execute
            const employee = new Employee("Ali Koc", "1967", email);

            // Verify
            expect(employee.email).toEqual(email);

        });
    });

    describe("getRole function", () => {
        it("Should return assigned role.", () => {

            // Set up
            const role = "Employee";
            
            // Execute
            const employee = new Employee("Ali Koc", "1967", "alikoc@fenerbahce.com", role);

            // Verify
            expect(employee.role).toEqual(role);

        });
    });

});