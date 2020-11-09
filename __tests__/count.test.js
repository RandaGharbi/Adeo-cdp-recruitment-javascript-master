const countCountryAndPeopleContents = require("../app/count");
const data = require("../data/data");
const mockCount = require("./mockCount.json");

describe("Count of People and Animals by counting the number of children and appending it in the name ", () => {
  it("countCountryAndPeopleContents", () => {
    expect(countCountryAndPeopleContents(data)).toEqual(mockCount);
  });
});
