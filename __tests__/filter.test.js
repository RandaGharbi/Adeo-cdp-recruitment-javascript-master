const filterByAnimalName = require("../app/filter");
const response = [
  {
    name: "Uzuzozne",
    people: [
      {
        name: "Lillie Abbott",
        animals: [
          {
            name: "John Dory",
          },
        ],
      },
    ],
  },
  {
    name: "Satanwi",
    people: [
      {
        name: "Anthony Bruno",
        animals: [
          {
            name: "Oryx",
          },
        ],
      },
    ],
  },
];
describe("filter By Animal Name", () => {
  it("filter By Animal Name", () => {
    expect(filterByAnimalName("ry")).toEqual(response);
  })
});
