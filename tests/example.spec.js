// @ts-check
const { test, expect } = require('@playwright/test');
import { ai } from '@zerostep/playwright';

test('Getting text and validations using AI', async ({ page }) => {
  const ai_arguments = {page, test}
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');

  await expect(page).toHaveTitle(/GreenKart - veg and fruits kart/);
  const tomatoPrice = await ai("What is the Price of tomato", ai_arguments)
  await expect(tomatoPrice).toEqual("37")
  const tomatoDiscountPrice = await ai("get tomato discount price", ai_arguments)
  await expect(tomatoDiscountPrice).toEqual("26")

  const wheatDifferencePrice = await ai("get subtracted value of wheat price and tomato discount price", ai_arguments);
  await expect(wheatDifferencePrice).toEqual("41");

  const deliveryDate = await ai("what is the delivery date", ai_arguments)
  console.log(deliveryDate)

  const ricePrice = await ai("get price of the rice not the discount price", ai_arguments)
  await expect(ricePrice).toEqual("37")

  await page.goto('https://rahulshettyacademy.com/dropdownsPractise/')
  let blinkingText = await ai("get blinking text", ai_arguments)
  console.log(blinkingText)
  let firstPartOfBlinkingText = await ai('Split ${blinkingText} with "-" and give 0th index value', ai_arguments)
  console.log(firstPartOfBlinkingText)
  expect(firstPartOfBlinkingText).toEqual('QA Meetup with Rahul Shetty @Bangalore ')
});