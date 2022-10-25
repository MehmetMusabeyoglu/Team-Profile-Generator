const Engineer = require("../lib/Engineer");

describe("Engineer", () => {

    describe("Validation", () => {

        // Set up
        const engineer = new Engineer();
        engineer.name = "Alex De Souza";
        engineer.id = "1977";
        engineer.email = "alexdesouza@fenerbahce.com";
        engineer.github = "alex10";
        engineer.role = "Engineer";

        // Verify
        expect(engineer.name).toEqual("Alex De Souza");
        expect(engineer.id).toEqual("1977");
        expect(engineer.email).toEqual("alexdesouza@fenerbahce.com");
        expect(engineer.github).toEqual("alex10");
        expect(engineer.role).toEqual("Engineer");
    });

    describe("getName function", () => {
        it("Should return assigned name.", () => {

            // Set up
            const name = "Alex De Souza";

            // Execute
            const engineer = new Engineer(name);

            // Verify
            expect(engineer.name).toEqual(name);

        });
    });

    describe("getId function", () => {
        it("Should return assigned ID number.", () => {

            // Set up
            const id = "1977";

            // Execute
            const engineer = new Engineer("Alex De Souza", id);

            // Verify
            expect(engineer.id).toEqual(id);

        });
    });

    describe("getEmail function", () => {
        it("Should return assigned email address.", () => {

            // Set up
            const email = "alexdesouza@fenerbahce.com";

            // Execute
            const engineer = new Engineer("Alex De Souza", "1977", email);

            // Verify
            expect(engineer.email).toEqual(email);

        });
    });

    describe("getGithub function", () => {
        it("Should return assigned GitHub user name.", () => {

            // Set up
            const github = "alex10";

            // Execute
            const engineer = new Engineer("Alex De Souza", "1977", "alexdesouza@fenerbahce.com", github);

            // Verify
            expect(engineer.github).toEqual(github);

        });
    });

    describe("getRole function", () => {
        it("Should return assigned role.", () => {

            // Set up
            const role = "Employee";
            
            // Execute
            const engineer = new Engineer("Alex De Souza", "1977", "alexdesouza@fenerbahce.com", "alex10", role);

            // Verify
            expect(engineer.role).toEqual(role);

        });
    });

});