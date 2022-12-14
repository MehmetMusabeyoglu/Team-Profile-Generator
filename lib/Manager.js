const Employee = require("../lib/Employee");

class Manager extends Employee{

    constructor(name,id,email,officeNumber,role){
        super(name,id,email,role),
        this.officeNumber = officeNumber;
    }

    getOffice() {
        return this.officeNumber;
    }

}

module.exports = Manager;