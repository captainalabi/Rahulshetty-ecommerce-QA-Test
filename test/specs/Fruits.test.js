import FruitsPage from "../pageobjects/Fruits.page.js";


describe('Test ecommerce', () => {
    it('buy 4 fruits', async () => {
        
      //await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/");
      await FruitsPage.open()

      await browser.maximizeWindow() 
    
      let listToBuy = ["Brocolli", "Cauliflower", "Cucumber", "Beetroot"]
      //let buyName = "Cucumber";
      
      await FruitsPage.clickManyTimes(3, listToBuy[0])
      await FruitsPage.clickManyTimes(4, listToBuy[1])
      await FruitsPage.clickManyTimes(2, listToBuy[2])
      await FruitsPage.clickManyTimes(1, listToBuy[3])
      
      await browser.pause(15000)

      await FruitsPage.clickTheCart()

      await browser.pause(2000)

      await FruitsPage.clickProceedToCheckOutButton()

      await browser.pause(2000)

      //validate qty of each product and the total cost on the checkout page

      //the quantities requested

  //brocolli = 3
  //cauliflower = 4
  //cucumber = 2
  //beetroot = 1


//validate brocolli qty
await expect( await FruitsPage.cartQ(1)).toHaveText("3")
await browser.pause(2000)

//validate cauliflower qty
await expect( await FruitsPage.cartQ(2)).toHaveText("4")
await browser.pause(2000)

//validate cucumber qty
await expect( await FruitsPage.cartQ(3)).toHaveText("2")
await browser.pause(2000)

//validate beetroot qty
await expect( await FruitsPage.cartQ(4)).toHaveText("1")
await browser.pause(2000)

//validate unit price of each fruit

// cost of each
let brocolliPrice = 120
let cauliflowerPrice = 60
let cucumberPrice = 48
let beetrootPrice = 32

//validate brocolli cost
await expect( await FruitsPage.cartPrice(1)).toHaveText(brocolliPrice.toString())
await browser.pause(2000)

//validate cauliflower cost
await expect( await FruitsPage.cartPrice(2)).toHaveText(cauliflowerPrice.toString())
await browser.pause(2000)

//validate cucumber cost
await expect( await FruitsPage.cartPrice(3)).toHaveText(cucumberPrice.toString())
await browser.pause(2000)

//validate cauliflower cost
await expect( await FruitsPage.cartPrice(4)).toHaveText(beetrootPrice.toString())
await browser.pause(2000)

//validate total cost for each
let calcuBroTotalCost = 120 * 3
await expect(FruitsPage.cartTotalPrice(1)).toHaveText(calcuBroTotalCost.toString())

let calcuCauliTotalCost = 60 * 4
await expect(FruitsPage.cartTotalPrice(2)).toHaveText(calcuCauliTotalCost.toString())

await browser.pause(2000)

let calcuCucTotalCost = 48 * 2
await expect(FruitsPage.cartTotalPrice(3)).toHaveText(calcuCucTotalCost.toString())

let calcuBeetTotalCost = 32 * 1
await expect(FruitsPage.cartTotalPrice(4)).toHaveText(calcuBeetTotalCost.toString())

await browser.pause(2000)

// validate grand total cost
let calcuGrandTotal = calcuBroTotalCost + calcuCauliTotalCost + calcuCucTotalCost + calcuBeetTotalCost

await expect( await FruitsPage.grandTotal).toHaveText(calcuGrandTotal.toString())

      await browser.pause(2000)

      await FruitsPage.placeOrder.scrollIntoView()
      await FruitsPage.clickPlaceOrder()

      await FruitsPage.clickAgreeToTerms()

      await FruitsPage.clickProceedButton()

      await browser.pause(2000)
    });
});