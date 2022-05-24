

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AWCPage extends Page {
    /**
     * define selectors using getter methods
     */
    get title () {
        return $('h1*=Calculator!');
    }

    get inputEarthWeight () {
        return $('#user-weight');
    }


    get dropdown () {
        return $('#planets');
    }

    get moonOption () {
        return $('//body/form[1]/div[1]/div[2]/select[1]/option[7]');
    }

    get btnSubmit () {
        return $('#calculate-button');
    }

    get output () {
        return $('#output');
    }

    get planetName () {
        return $('#planetName');
    }

    get weightMulter () {
        return $('#weightMultiplier');
    }

    get btnAdd () {
        return $('#add-button');
    }

    get reachOption () {
        return $('//body/form[1]/div[1]/div[2]/select[1]/option[12]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to change earth weight to moon weight
     */
    async weightCalc (earthweight) {
        await this.inputEarthWeight.setValue(earthweight);
        // await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    //add planet method
    async planetAdder (nameOfPlanet, grav) {
        await this.planetName.setValue(nameOfPlanet);
        await this.weightMulter.setValue(grav);
        await this.btnAdd.click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new AWCPage();
