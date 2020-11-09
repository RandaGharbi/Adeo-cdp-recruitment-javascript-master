const filterByAnimalName = require("./filter");
const countCountryAndPeopleContents = require("./count");
const data = require("../data/data");

const init = () => {
  const [, , flag] = process.argv;
  const [selector, keyword] = flag.trim().split("=");
  switch (selector) {
    case "--filter":
      const result = filterByAnimalName(keyword);
      console.log("init -> filter", JSON.stringify(result, null, 2));
      break;
    case "--count":
      const count = countCountryAndPeopleContents(data);
      console.log("init -> count", JSON.stringify(count, null, 2));
      break;
    default:
      console.log(`Sorry, ${flag} is not provided.`);
  }
};

init();
