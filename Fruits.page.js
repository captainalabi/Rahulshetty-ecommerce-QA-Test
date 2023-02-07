import Page from "./page.js";

class Fruits extends Page{

//sync addToCartButton(index){return $(`#root div.products-wrapper div:nth-child(${index}) div.product-action button`)}

get brocolliButton (){return $("#root div.products-wrapper div:nth-child(1) div.product-action button")}
get cauliflowerButton (){ return $('#root div.products-wrapper div:nth-child(2) div.product-action button')}
get cucumberButton (){ return $('#root div.products-wrapper div:nth-child(3) div.product-action button')}
get beetrootButton (){ return $('#root div.products-wrapper div:nth-child(4) div.product-action button')}

get searchField(){ return $(".search-keyword")}

/**
 * set value of the search field to search for product
 * @param {String} productName 
 */
async searchForProducts(productName){
    await this.searchField.setValue(productName)
 }

 /*
async addToCart(productsArray){
 
    for(let i = 1; i < productsArray.length; i++){

        await this.searchForProducts(productsArray[i])
        await this.addToCartButton(i).click()
    }
}
*/
 /**
 * click add to cart button to add the product searched to cart
 */

 /*
async specifyNoAndBuyBrocolli(NoToBuy){
    
    for(let i = 1; i <= NoToBuy; i++){
       await this.addBrocolliToCart()
        if(i === NoToBuy){
           break;
        }
    }
    
}

async specifyNoAndBuyCauliflower(NoToBuy){
    
    
      setInterval( await this.addCauliflowerToCart(), 2000)
       
       
     }
    
    


async specifyNoAndCucumber(NoToBuy){
    
    for(let j = 1; j <= NoToBuy; j++){
       await this.addCucumberToCart()
       if(j === NoToBuy){
        break;
     }
    }
    
}

async specifyNoAndBuyBeetroot(NoToBuy){
    
    for(let j = 1; j <= NoToBuy; j++){
       await this.addBeetrootToCart()
       if(j === NoToBuy){
        break;
     }
    }
    
}

async addBrocolliToCart(NoToBuy){
    let i =0;
 let timer =  setInterval( async function(){  for(let j = 1; j <= NoToBuy; j++){
i++
    await this.searchForProducts('Brocolli')
    await  this.brocolliButton.click()
    await  this.searchField.clearValue()
 }
    }, 100000)
   if(i === NoToBuy){
    clearInterval(timer)
   }
}
*/
async addBrocolliToCart(){
    await this.searchForProducts('Brocolli')
    await this.brocolliButton.click()
    await this.searchField.clearValue()
}

async addCauliflowerToCart(){
    await this.searchForProducts('Cauliflower')
    await this.cauliflowerButton.click()
    await this.searchField.clearValue()
}

async addCucumberToCart(){
    await this.searchForProducts('Cucumber')
    await this.cucumberButton.click()
    await this.searchField.clearValue()
}

async addBeetrootToCart(){
    await this.searchForProducts('Beetroot')
    await this.beetrootButton.click()
    await this.searchField.clearValue()
}
 
async open(){
    return super.open()
}

}

export default new Fruits()