const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    // override employee role to manager 
    getRole () {
        return 'Manager';
    }
}

module.exports = Manager; 