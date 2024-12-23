const {test, page} = require('@playwright/test')
import { ai } from '@zerostep/playwright'


test('Enter text and complete login using AI', async({page}) => {

    const aiArguments = {page, test}
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')

    await ai("Enter 'rahulshettyacademy' as Username", aiArguments)
    await ai('Enter "learning" as Password', aiArguments)
    await ai('Click admin value radio button', aiArguments)
    await ai('Click Sign In', aiArguments)
    await page.waitForTimeout(8_000)
})