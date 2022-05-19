const { dropdown, moonOption } = require('../pageobjects/awc.page');
const AWCPage = require('../pageobjects/awc.page');


describe('My Astro Weight Calculator', () => {
    it('should have the proper header', async () => {
        await AWCPage.open();

        
        await expect(AWCPage.title).toBeExisting();
        await expect(AWCPage.title).toHaveTextContaining(
            'I\'m an Astro Weight Calculator!');
    });
    
    it('should have a dropdown menu of planets', async () => {
        
        
        await expect(AWCPage.dropdown).toBeExisting();
    });
    it('should calculate the weight of the input translated to non-earth gravities', async () => {
        

        await dropdown.click();
        await browser.pause(500);

        await moonOption.click();
        await browser.pause(1000);

        await AWCPage.weightCalc(150);
        await expect(AWCPage.output).toHaveTextContaining(
            '24.83 lbs');
        await browser.pause(2000);
    });
});
