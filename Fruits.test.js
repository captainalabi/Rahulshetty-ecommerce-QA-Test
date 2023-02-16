import FruitsPage from "../pageobjects/Fruits.page.js";


describe('Test ecommerce', () => {
    it('buy 4 fruits', async () => {
        
      await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/");
    
      let buyName = "Cucumber";
      
      await FruitsPage.clickManyTimes(3, buyName)

      /*
      let theName;
      for(let i= 1; i <= (await FruitsPage.allProductLabels.length); i++){
          
        theName = await FruitsPage.allProductLabels[i - 1].getText()
        if(theName.includes(buyName)){
          
          console.log(i + " i ::::::::: "  + theName)
          await FruitsPage.allAddToCartButton[i - 1].click()
        break
        }
      }

     //await FruitsPage.clickMultipleTimes("Brocolli", 2)
      /*
//iterate through the addToCartButtons
        for(let j= 0; j <= (await FruitsPage.allAddToCartButton.length) +1; j++){

         // console.log( await FruitsPage.allAddToCartButton[j].getText()  + " j ::::::::: " + i)
         if(j == 30){ 
          j--
         await FruitsPage.allAddToCartButton[j].click() 
          break
        }
        }
/*
       //await FruitsPage.open()
       
       //await browser.maximizeWindow()
  
//let productName = "Brocolli"
//let howMany = 3

       //add 3 Brocolli to cart
      //await FruitsPage.clickMultipleTimes(productName, howMany)
       */
      await browser.pause(6000)
    });
});