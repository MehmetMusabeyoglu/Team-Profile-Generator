const Employee = require("../lib/Employee");

class Intern extends Employee{

    constructor(name,id,email,school,role){
        super(name,id,email,role),
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

}

module.exports = Intern;