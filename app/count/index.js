const countCountryAndPeopleContents = (data) => {
  const countries = data.data.map((country) => ({
    name: `${country.name} [${country.people.length}]`,
    people: country.people.map((p) => ({
      name: `${p.name} [${p.animals.length}]`,
      animals: p.animals,
    })),
  }));
  return countries;
};

module.exports = countCountryAndPeopleContents;
