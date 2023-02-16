import Page from "./page.js";

class Fruits extends Page{

    cartQ(index){ return $(`tbody tr:nth-child(${index}) td:nth-child(3)`)}

    cartPrice(index){ return $(`tbody tr:nth-child(${index}) td:nth-child(4)`)}
    

get proceedToCheckOutButton(){ return $("div.cart-preview.active div.action-block")}

//the cart selector
get theCart(){ return $("div.cart a.cart-icon ")}

/**
 *  get any addToCart Button by index. Note that buttonIndex = productIndex
 * @param {number} buttonIndex 
 * @returns button selector for the index
 */
 addTocartButton (buttonIndex) {
     return $(`div:nth-child(${buttonIndex}) div.product-action `)
    }

    //get all addToCartButton
    get allAddToCartButton(){return $$(".product-action")}

    //get the search input field
get searchField(){ return $(".search-keyword")}

// get the labels of all the products to extract their names
get allProductLabels (){ return $$("h4.product-name")}

async clickProceedToCheckOutButton(){
    await this.proceedToCheckOutButton.click()
}

async clickTheCart(){
   await this.theCart.click()
}

/**
 * set value of the search field to search for product
 * @param {String} productName 
 */
async searchForProducts(productName){
    await this.searchField.setValue(productName)
 }

/**
 * search for the index of any named product
 * and use it to click its button
 * @param {string} name of product to buy
 * 
 */
async clickAnAddToCartButton(buyName){
    let theName;
      for(let i= 0; i <= (await this.allProductLabels.length); i++){
       theName = await this.allProductLabels[i].getText()
        if(theName.includes(buyName)){
          
          await this.allAddToCartButton[i].click()
        break
        }
      }

}
/**
 * repeat any code any number of times
 * @param {number} noOfTimes 
 * @param {string} buyName 
 */
async clickManyTimes(noOfTimes, buyName){    
    for(let i = 1; i <= noOfTimes; i++){
       this.clickAnAddToCartButton(buyName)
    }
    }

    /**
     * 
     * @returns open browser as specified by the parent page
     */
async open(){
    return super.open()
}

}

export default new Fruits()