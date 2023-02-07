# Rahulshetty-ecommerce-QA-Test
Testing the pactice page of Rahulshetty: https://rahulshettyacademy.com/seleniumPractise/#/

#WEBDRIVER IO TESTING WITH MOCHA, JS AUTOMATION: AUTO SELECT ELEMENTS DYNAMICALLY WITH INDEX# 
npm: '9.4.0',
  node: '18.13.0',
  PACKAGE.JSON:
  {
  "name": "my-new-project",
  "type": "module",
  "devDependencies": {
    "@wdio/cli": "^8.3.3",
    "@wdio/local-runner": "^8.3.3",
    "@wdio/mocha-framework": "^8.3.0",
    "@wdio/spec-reporter": "^8.3.0",
    "chromedriver": "^109.0.0",
    "wdio-chromedriver-service": "^8.0.1"
  },
  "scripts": {
    "test": "wdio"
  }
}

A senario of testing an ecommerce site:https://rahulshettyacademy.com/seleniumPractise/#/
You need to select some products by name like:
```
let productArray = [ 'Brocolli', 'Cauliflower', 'Cucumber', 'Beetroot' ]

```
then you get the button for each of the items and click:
```

get cauliflowerButton (){ return $('#root div.products-wrapper div:nth-child(2) div.product-action button')}
get cucumberButton (){ return $('#root div.products-wrapper div:nth-child(3) div.product-action button')}
get beetrootButton (){ return $('#root div.products-wrapper div:nth-child(4) div.product-action button')}

```
This can easily be done but what if you want to change the set of products. There is need for a function that will be able to get any button by the name of the product. This is where I am currently having an issue. i tried the following strategies to no avail:
1. ```
async brocolliButton (index){return await $("#root div.products-wrapper div:nth-child(" + index + ") div.product-action button")}
```
2. ```
async brocolliButton (index){return await $("#root div.products-wrapper div:nth-child(${index}) div.product-action button")}
```
If you have any solution for this, get me on startcollabo@gmail.com and feel free to contribute to rhis repository please
