

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AWCPage extends Page {
    /**
     * define selectors using getter methods
     */
    get title () {
        return $('h1*=Astro Weight Calculator');
    }

    get inputEarthWeight () {
        return $('#user-weight');
    }


    get dropdown () {
        return $('[name="planets"]');
    }

    get moonOption () {
        return $('option=Moon');
    }

    get btnSubmit () {
        return $('#calculate-button');
    }

    get output () {
        return $('#output');
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

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new AWCPage();
