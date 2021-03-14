// Original article BLOG_POST_URL

client => {
    client
        .url('https://loadero.com/home')
        .waitForElementVisible('.home', 10 * 1000)
        .waitForElementVisible('.accept', 10 * 1000)
        .click('.accept')
        .setValue('.trial input', 'john.doe@example.com')
        .setValue('.trial input', client.Keys.ENTER)
        .pause(10 * 1000)
        .takeScreenshot('screenshot.png')
        .perform(done => {
            console.log('The script has finished its execution');

            done();
        });
}
