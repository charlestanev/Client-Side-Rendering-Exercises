const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser;
let page;

describe('Softuni tests', function() {
    this.timeout(10000);

    before(async () => {
        browser = await chromium.launch({headless: true});
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async ()=> {
        page = await browser.newPage();
    });

    afterEach(async () => {
        await page.close();
    });


    it('Should load movies', async () => {
        await page.goto('http://localhost:3000/');

        
        await page.click('text=Movies');
        
        let heading = await page.textContent('h2') 
        
        let count = await page.evaluate(() => {
            let movieListElement = document.querySelector('.movie-list');

            return movieListElement.children.length;
        });

        expect(heading).to.be.equal('All Movies');
        expect(count).to.be.greaterThan(0);
    });
});
