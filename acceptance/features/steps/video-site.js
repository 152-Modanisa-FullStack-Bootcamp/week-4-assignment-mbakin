const {Given, When, Then} = require("cucumber")
const openUrl = require("../support/action/openUrl")

Given("that User goes to Video Site Project's HomePage", async function () {
  await openUrl.call(this, "/")
});

When("page is loaded", async function () {
  await this.page.waitForTimeout(2000)
});

Then("User can see some of videos' title like", async function (array){
  const selector = "card-video"
  for (let [videoTitle] of array.rawTable) {
    const desiredVideo = await this.page.$$eval(selector, videos => videos.find(video => video.querySelector("#title") === videoTitle))
  }
})