const Manager = require("../lib/Manager");

describe("Manager", () => {

    describe("Validation", () => {

        // Set up
        const manager = new Manager();
        manager.name = "Jorge Jesus";
        manager.id = "1954";
        manager.email = "jorgejesus@fenerbahce.com";
        manager.officeNumber = "FB07";
        manager.role = "Manager";

        // Verify
        expect(manager.name).toEqual("Jorge Jesus");
        expect(manager.id).toEqual("1954");
        expect(manager.email).toEqual("jorgejesus@fenerbahce.com");
        expect(manager.officeNumber).toEqual("FB07");
        expect(manager.role).toEqual("Manager");
    });

    describe("getName function", () => {
        it("Should return assigned name.", () => {

            // Set up
            const name = "Jorge Jesus";

            // Execute
            const manager = new Manager(name);

            // Verify
            expect(manager.name).toEqual(name);

        });
    });

    describe("getId function", () => {
        it("Should return assigned ID number.", () => {

            // Set up
            const id = "1954";

            // Execute
            const manager = new Manager("Jorge Jesus", id);

            // Verify
            expect(manager.id).toEqual(id);

        });
    });

    describe("getEmail function", () => {
        it("Should return assigned email address.", () => {

            // Set up
            const email = "jorgejesus@fenerbahce.com";

            // Execute
            const manager = new Manager("Jorge Jesus", "1954", email);

            // Verify
            expect(manager.email).toEqual(email);

        });
    });

    describe("getOffice function", () => {
        it("Should return assigned office number.", () => {

            // Set up
            const officeNumber = "FB07";

            // Execute
            const manager = new Manager("Jorge Jesus", "1954", "jorgejesus@fenerbahce.com", officeNumber);

            // Verify
            expect(manager.officeNumber).toEqual(officeNumber);

        });
    });

    describe("getRole function", () => {
        it("Should return assigned role.", () => {

            // Set up
            const role = "Manager";
            
            // Execute
            const manager = new Manager("Jorge Jesus", "1954", "jorgejesus@fenerbahce.com", "FB07", role);

            // Verify
            expect(manager.role).toEqual(role);

        });
    });

});