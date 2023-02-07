import FruitsPage from "../pageobjects/Fruits.page.js";


describe('Test ecommerce', () => {
    it('buy 4 fruits', async () => {
        
       await FruitsPage.open()
       
       await browser.maximizeWindow()
        /*
       await FruitsPage.addBrocolliToCart(2)
        
       await FruitsPage.specifyNoAndBuyCauliflower(1)

       await FruitsPage.specifyNoAndBuyBeetroot(1)

       await FruitsPage.specifyNoAndCucumber(1)
        */
       /*
       let arrayOfFruits = [ "Brocolli", "Cauliflower", "Cucumber", "Beetroot"]
      await FruitsPage.addToCart(arrayOfFruits)
*/
       
     await FruitsPage.addBrocolliToCart()
     await FruitsPage.addCauliflowerToCart()
     await FruitsPage.addBeetrootToCart()
     await FruitsPage.addCucumberToCart()

      await browser.pause(6000)
    });
});