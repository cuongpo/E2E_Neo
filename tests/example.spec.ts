import { test, expect } from '../fixtures';
import { createWallet } from '../e2eNeo'; 
import { Page } from 'playwright';
import { test as base, chromium, type BrowserContext } from "@playwright/test";
test('Create Wallet', async ({ page }: { page: Page }) => {
  test.setTimeout(10000000);
  await createWallet(page);
  
  await page.goto('https://flamingo.finance/trade/advanced');
 


  await page.getByRole('button', { name: 'Connect Wallet', exact: true }).click();
  await page.getByRole('button', { name: 'Connect' }).first().click();
  await new Promise(resolve => setTimeout(resolve, 5000));
  console.log(await page.title());
  // await page.getByRole('button', { name: 'Connect Wallet', exact: true }).click();
  await page.keyboard.press("Control+T");
  await page.pause();

});
