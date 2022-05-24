// const { dropdown, moonOption, btnSubmit } = require('../pageobjects/awc.page');
const AWCPage = require('../pageobjects/awc.page');


describe('My Astro Weight Calculator', () => {
    it('should have the proper header and a planet dropdown', async () => {
        await AWCPage.open();

        
        await expect(AWCPage.title).toBeExisting();
        await expect(AWCPage.title).toHaveTextContaining(
            'an Astro Weight Calculator!');
    
        await browser.pause(1000);
        await AWCPage.dropdown.click();
    });
    it('should calculate the weight of the input translated to non-earth gravities', async () => {
        

        await AWCPage.dropdown.click();
        await browser.pause(500);

        await AWCPage.moonOption.click();
        await browser.pause(1000);

        await AWCPage.btnSubmit.click();
        await browser.pause(500);

        await AWCPage.weightCalc(150);
        await expect(AWCPage.output).toHaveTextContaining(
            '24.83 lbs');
        await browser.pause(2000);
    });
    it('should be able to add a new planet with its own weght multiplier', async () => {
        
        await AWCPage.planetAdder('Reach', 1.08)
        await browser.pause(2000);
        await AWCPage.dropdown.click();
        await browser.pause(500);

        await AWCPage.reachOption.click();
        await browser.pause(1000);

        // await AWCPage.btnSubmit.click();
        // await browser.pause(500);

        await AWCPage.weightCalc(150);
        await expect(AWCPage.output).toHaveTextContaining(
            '162.00 lbs');
        await browser.pause(2000);
    });
});
