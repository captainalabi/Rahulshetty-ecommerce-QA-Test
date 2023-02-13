import Page from "./page.js";

class Fruits extends Page{

// get any addToCart Button by index. Note that buttonIndex = productIndex
/**
 * 
 * @param {number} buttonIndex 
 * @returns button selector for the index
 */
 addTocartButton (buttonIndex) {
     return $(`div:nth-child(${buttonIndex}) div.product-action `)
    }

    //get the search input field
get searchField(){ return $(".search-keyword")}

get allProductLabels (){ return $$(".product-name")}

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
 * @returns {number} index of the product
 */


/**
 * 
 * @param {string} productName 
 * @param {number} howMany 
 */
async clickMultipleTimes(productName, howMany){



    for(let j = 1; j <= howMany; j++ ){
        
        for(let productIndex = 1; productIndex <= await this.allProductLabels.length; ++productIndex){
        
            //productIndex ++
            //if text contains name of fruit, return index
            if( ((await this.addTocartButton (productIndex ).getText()).includes(productName))){
                
                console.log( "productIndex ::::::::::::: " + productIndex)
                console.log( "productName ::::::::::::: " + await this.addTocartButton (productIndex ).getText())
                console.log( "howMany ::::::::::::: " + howMany)
                
               await this.addTocartButton(productIndex ).click()

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