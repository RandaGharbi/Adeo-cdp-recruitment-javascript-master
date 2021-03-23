export class MapKeysByDictionary {
  constructor(dictionary) {
    this.dictionary = dictionary;
    this.inversedDictionary = this.inverseDictionary(dictionary);
  }

  transform(mapKeys, entity) {
    return this.mapKeysToDictionary(mapKeys, this.dictionary[entity]);
  }

  inverseTransform(mapKeys, entity) {
    return this.mapKeysToDictionary(mapKeys, this.inversedDictionary[entity]);
  }

  existInDictionary(key, glossary) {
    return Object.prototype.hasOwnProperty.call(glossary, key);
  }

  isNull(value) {
    return value === null;
  }

  isTypeObject(value) {
    return typeof value === 'object';
  }

  isObjectOrArray(value) {
    return !this.isNull(value) && this.isTypeObject(value);
  }

  isArray(value) {
    return Array.isArray(value);
  }

  inverseDictionary(dictionary) {
    const result = {};

    Object.keys(dictionary).reduce((acc, key) => {
      result[acc.key] = this.inverse(dictionary[key]);
    }, {});

    return result;
  }

  inverse(values) {
    const result = {};
    Object.keys(values).reduce((acc, key) => {
      typeof values[acc.key] === 'object'
        ? (result[values[key].key] = {
            key,
            children: this.inverse(values[key].children),
          })
        : (result[values[key]] = key);
    }, {});
    return result;
  }

  mapValuesToDictonary(value, glossary) {
    return this.isObjectOrArray(value)
      ? this.mapKeysToDictionary(value, glossary)
      : value;
  }

  mapKeysToDictionary(entry, glossary) {
    const result = this.isArray(entry) ? [] : {};

    Object.keys(entry).reduce((acc, key) => {
      let mappingKey = this.existInDictionary(key, glossary)
        ? glossary[acc.key]
        : key;
      let childrenGlossary;
      if (this.isTypeObject(mappingKey)) {
        childrenGlossary = mappingKey.children;
        mappingKey = mappingKey.key;
      } else {
        childrenGlossary = glossary;
      }

      this.isArray(entry)
        ? result.push(this.mapValuesToDictonary(entry[key], childrenGlossary))
        : (result[mappingKey] = this.mapValuesToDictonary(
            entry[key],
            childrenGlossary
          ));
    }, {});

    return result;
  }
}
