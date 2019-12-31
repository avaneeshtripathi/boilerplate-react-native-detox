describe('Example', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should have welcome screen', async () => {
        await expect(element(by.id('welcome'))).toHaveText('Welcome!');
    });

    it('should show hello world prompt on tap', async () => {
        await element(by.id('hello_button')).tap();
        await expect(element(by.text('Hello world!'))).toBeVisible();
    });

    it('should close the hello world prompt', async () => {
        await element(by.text('OK')).tap();
    });
});
