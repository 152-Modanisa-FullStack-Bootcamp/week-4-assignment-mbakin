const {Given, When, Then} = require("cucumber")
const openUrl = require("../support/action/openUrl")

Given("that User goes to Video Site Project's HomePage", async function () {
  await openUrl.call(this, "/")
});

When("page is loaded", async function () {
  await this.page.waitForTimeout(2000)
});