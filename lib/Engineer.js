const Employee = require("../lib/Employee");

class Engineer extends Employee{

    constructor(name,id,email,github,role){
        super(name,id,email,role),
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

}

module.exports = Engineer;