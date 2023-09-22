// walletHelper.ts

import { Page } from 'playwright';

export async function createWallet(page: Page) {
    await page.keyboard.press("Control+T");
    await page.goto('chrome-extension://cphhlgmgameodnhkjdmkpanlelnlohao/index.html#/popup/wallet/new-guide?returnUrl=%2Fpopup%2Fhome');
    await page.getByRole('button', { name: 'Create a new wallet' }).click();
    await page.locator('li').filter({ hasText: 'Neo N3' }).click();
    await page.locator('wallet-create div').filter({ hasText: 'Set wallet name *' }).nth(2).click();
    await page.getByRole('textbox', { name: 'Set wallet name' }).fill('Test');
    await page.locator('wallet-create div').filter({ hasText: 'Enter password *' }).nth(2).click();
    await page.getByRole('textbox', { name: 'Enter password', exact: true }).fill('neo123456');
    await page.getByRole('textbox', { name: 'Enter password again' }).click();
    await page.getByRole('textbox', { name: 'Enter password again' }).fill('neo123456');
    await page.getByRole('button', { name: 'Create' }).click();
    await page.getByRole('button', { name: 'Later' }).click();
    await page.getByRole('button', { name: 'Later' }).click();
    await page.keyboard.press("Control+W");
}

export async function importWallet(page: Page) {

}

