const data = require("../../data/data");

const filterByAnimalName = (keyword) => {
  return data.data.reduce((accCountry, currentCountry) => {
    const filteredPeoples = currentCountry.people.reduce(
      (accPeople, currentPeople) => {
        const filteredAnimals = currentPeople.animals.filter((animal) =>
          animal.name.includes(keyword)
        );
        if (filteredAnimals.length) {
          accPeople.push(
            Object.assign({}, currentPeople, { animals: filteredAnimals })
          );
        }
        return accPeople;
      },
      []
    );
    if (filteredPeoples.length) {
      accCountry.push(
        Object.assign({}, currentCountry, { people: filteredPeoples })
      );
    }
    return accCountry;
  }, []);
};

module.exports = filterByAnimalName;
