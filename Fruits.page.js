import Page from "./page.js";

class Fruits extends Page{


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

/**
 * set value of the search field to search for product
 * @param {String} productName 
 */
async searchForProducts(productName){
    await this.searchField.setValue(productName)
 }

/**
 * search for the index of any named product
 * @param {string} name of product to buy
 * 
 */

async clickAnAddToCartButton(buyName){
    let theName;
      for(let i= 0; i <= (await this.allProductLabels.length); i++){
       theName = await this.allProductLabels[i].getText()
        if(theName.includes(buyName)){
          
          await this.allAddToCartButton[i ].click()
        break
        }
      }

}

async clickManyTimes(noOfTimes, buyName){    
    for(let i = 1; i <= noOfTimes; i++){
       this.clickAnAddToCartButton(buyName)
    }
    }

/**
 * 
 * @param {string} productName 
 * @param {number} howMany 
 */
async clickMultipleTimes(productName, howMany){

    for(let j = 1; j <= howMany; j++ ){//click multiple
        
        for(let productIndex = 1; productIndex <= await this.allProductLabels.length; ++productIndex){//search index
        
            //if text contains name of fruit, return index
            if( (( this.allProductLabels[productIndex]).getText().includes(productName))){
                
                console.log( "productIndex ::::::::::::: " + productIndex)
                console.log( "productName ::::::::::::: " + await (this.allProductLabels(productIndex )).getText())
                
               break;
            }
        }
       
    }
}

async open(){
    return super.open()
}

}

export default new Fruits()