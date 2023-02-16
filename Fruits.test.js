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
//brocolli = 120
//cauliflower = 60
//cucumber = 48
//beetroot = 32

//validate brocolli cost
await expect( await FruitsPage.cartPrice(1)).toHaveText("120")
await browser.pause(2000)

//validate cauliflower cost
await expect( await FruitsPage.cartPrice(2)).toHaveText("60")
await browser.pause(2000)

//validate cucumber cost
await expect( await FruitsPage.cartPrice(3)).toHaveText("48")
await browser.pause(2000)

//validate cauliflower cost
await expect( await FruitsPage.cartPrice(4)).toHaveText("32")
await browser.pause(2000)

//2. get price for each
//3. get total for each
//4. get grand total cost

      await browser.pause(5000)
    });
});