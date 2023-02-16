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
      
      await browser.pause(10000)

      await FruitsPage.clickTheCart()

      await browser.pause(1000)

      await FruitsPage.clickProceedToCheckOutButton()

      //validate qty of each product and the total cost on the checkout page

      //the quantities requested
let brocolliQtyReq = 3
let cauliflowerQtyReq = 4
let cucumberQtyReq = 2
let beetrootQtyReq = 1


//validate brocolli qty
let broCartQty = await $("#productCartTables tbody tr:nth-child(1) td:nth-child(3)")

//console.log( "qty ::::::::::::::: " + bQty)
//validate that qty requested equals cart qty
await expect(FruitsPage.cartQty(1)).toHaveText("3")

// get qty for each
let brocolliDisplayPrice = 120
let cauliflowerDisplayPrice = 60
let cucumberDisplayPrice = 48
let beetrootDisplayPrice = 32

//2. get price for each
//3. get total for each
//4. get grand total cost

      await browser.pause(5000)
    });
});