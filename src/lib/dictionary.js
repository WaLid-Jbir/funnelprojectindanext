
const dictionaries = {
  en: import("../dictionaries/en.json").then(module => module.default),
  fr: import("../dictionaries/fr.json").then(module => module.default),
  ch: import("../dictionaries/ch.json").then(module => module.default),
  ar: import("../dictionaries/ar.json").then(module => module.default)
}

export const getDictionary = async locale => {
  const dictionary = await dictionaries[locale];
  return dictionary;
};
