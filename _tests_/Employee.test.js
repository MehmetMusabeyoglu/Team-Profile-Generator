const Employee = require("../lib/Employee");

describe("Employee", () =>{
    describe("Validation", () =>{
        it("Should return a valid employee who is in the team.", () => {

            //Set up 
            const employee = new Employee();

            // Execute
            employee.name = "Alex De Souza";
            employee.id = "2010";
            employee.email = "alexdesouza@goal.com"

            // Verify
            expect(employee.name).toEqual("Alex De Souza");
            expect(employee.id).toEqual("2010");
            expect(employee.email).toEqual("alexdesouza@goal.com");

        });
    });

});