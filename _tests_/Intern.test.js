const Intern = require("../lib/Intern");

describe("Intern", () => {

    describe("Validation", () => {

        // Set up
        const intern = new Intern();
        intern.name = "Arda Guler";
        intern.id = "2005";
        intern.email = "ardaguler@fenerbahce.com";
        intern.school = "FB College";
        intern.role = "Intern";

        // Verify
        expect(intern.name).toEqual("Arda Guler");
        expect(intern.id).toEqual("2005");
        expect(intern.email).toEqual("ardaguler@fenerbahce.com");
        expect(intern.school).toEqual("FB College");
        expect(intern.role).toEqual("Intern");
    });

    describe("getName function", () => {
        it("Should return assigned name.", () => {

            // Set up
            const name = "Arda Guler";

            // Execute
            const intern = new Intern(name);

            // Verify
            expect(intern.name).toEqual(name);

        });
    });

    describe("getId function", () => {
        it("Should return assigned ID number.", () => {

            // Set up
            const id = "2005";

            // Execute
            const intern = new Intern("Arda Guler", id);

            // Verify
            expect(intern.id).toEqual(id);

        });
    });

    describe("getEmail function", () => {
        it("Should return assigned email address.", () => {

            // Set up
            const email = "ardaguler@fenerbahce.com";

            // Execute
            const intern = new Intern("Arda Guler", "2005", email);

            // Verify
            expect(intern.email).toEqual(email);

        });
    });

    describe("getSchool function", () => {
        it("Should return assigned school name.", () => {

            // Set up
            const school = "FB College";

            // Execute
            const intern = new Intern("Arda Guler", "2005", "ardaguler@fenerbahce.com", school);

            // Verify
            expect(intern.school).toEqual(school);

        });
    });

    describe("getRole function", () => {
        it("Should return assigned role.", () => {

            // Set up
            const role = "Intern";
            
            // Execute
            const intern = new Intern("Arda Guler", "2005", "ardaguler@fenerbahce.com", "FB College", role);

            // Verify
            expect(intern.role).toEqual(role);

        });
    });

});