describe('Example', () => {
  const {log} = require('detox');

  beforeAll(async () => {
    await device.launchApp();
    await device.reloadReactNative();
  });

  beforeEach(async () => {
    // await device.reloadReactNative();
  });

  it('should expect some text to be visible', async () => {
    await expect(element(by.id('title_41002195'))).toHaveText(
      'CrowdStrike Update: Windows Bluescreen and Boot Loops',
    );
  });
  it('should expect have button seemore on render html', async () => {
    const button = await element(by.id('see_more_button_41013984'));
    await expect(button).toBeVisible();
    await button.tap();
  });
  it('should expect have list story and scroll', async () => {
    await expect(element(by.id('list_BEST'))).toBeVisible();
    const list = await element(by.id('list_BEST'));
    await list.scroll(100, 'down');
  });
  it('should expect have button load more commnet on story', async () => {
    const button = await element(by.id('load_more_comment_41002195'));
    await expect(button).toBeVisible();
    await button.tap();
  });
});
