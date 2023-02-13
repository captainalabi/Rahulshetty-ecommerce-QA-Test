import FruitsPage from "../pageobjects/Fruits.page.js";


describe('Test ecommerce', () => {
    it('buy 4 fruits', async () => {
        
      await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/");

      //get the index from product labels
      let index = 0 ;

     await FruitsPage.allProductLabels.forEach( element => {
        index ++         

        if(FruitsPage.allProductLabels[index].getText().includes("Brocolli")){
          return;
        }
      });

      // click the button in no of times
      let howMany = 3
      //let index = 1

      for(let i =1; i <= howMany; i++){
      await FruitsPage.addTocartButton(index).click()
      }


       //await FruitsPage.open()
       
       //await browser.maximizeWindow()
 /*     
let productName = "Brocolli"
let howMany = 3

       //add 3 Brocolli to cart
      await FruitsPage.clickMultipleTimes(productName, howMany)
       */
      await browser.pause(6000)
    });
});