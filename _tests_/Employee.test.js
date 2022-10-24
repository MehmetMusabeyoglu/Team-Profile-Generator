const Employee = require("../lib/Employee");

describe("Employee", () =>{

    describe("Validation", () =>{
        it("Should return a valid employee who is in the team.", () => {

            //Set up 
            const employee = new Employee();
            employee.name = "Alex De Souza";
            employee.id = "2010";
            employee.email = "alexdesouza@goal.com";
            employee.role = "Employee";

            // Verify
            expect(employee.name).toEqual("Alex De Souza");
            expect(employee.id).toEqual("2010");
            expect(employee.email).toEqual("alexdesouza@goal.com");
            expect(employee.role).toEqual("Employee");

        });
    });

    describe("getName function", () => {
        it("Should return assigned name.", () => {

            // Set up
            const name = "Alex De Souza";
            
            // Execute
            const employee = new Employee(name);

            // Verify
            expect(employee.name).toEqual(name);

        });
    });

    describe("getId function", () => {
        it("Should return assigned ID number.", () => {

            // Set up
            const id = "2010";
            
            // Execute
            const employee = new Employee("Alex De Souza", id);

            // Verify
            expect(employee.id).toEqual(id);

        });
    });

    describe("getEmail function", () => {
        it("Should return assigned email address.", () => {

            // Set up
            const email = "alexdesouza@goal.com";
            
            // Execute
            const employee = new Employee("Alex De Souza", "2010", email);

            // Verify
            expect(employee.email).toEqual(email);

        });
    });

    describe("getRole function", () => {
        it("Should return assigned role.", () => {

            // Set up
            const role = "Employee";
            
            // Execute
            const employee = new Employee("Alex De Souza", "2010", "alexdesouza@goal.com", role);

            // Verify
            expect(employee.role).toEqual(role);

        });
    });

});