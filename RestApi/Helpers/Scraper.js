const puppeteer = require("puppeteer");
module.exports = async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const [el] = await page.$x('//*[@id="listing-right-column"]/div/div[1]/div[1]/div/div/div/div/div[1]/ul/li[1]/img');//Elementi xpath'ine göre aldım.
    const src = await el.getProperty("src");
    const srcTxt = await src.jsonValue();
    let pureProductImg = srcTxt.trim();

    const [el2] = await page.$x('//*[@id="listing-page-cart"]/div[2]/h1');
    const title = await el2.getProperty("textContent");
    const titleTxt = await title.jsonValue();
    const pureTitle = titleTxt.trim()

    const [el3] = await page.$x('//*[@id="listing-page-cart"]/div[3]/div[1]/div[1]/div/div[1]/p');
    const price = await el3.getProperty("textContent");
    const priceTxt = await price.jsonValue();
    const purePrice = priceTxt.trim()
    
    return {pureProductImg,pureTitle,purePrice}


}
