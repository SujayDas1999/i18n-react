import englishJson from "../i18n/en-us.json";
import hindiJson from "../i18n/in-hin.json";
import frenchJson from "../i18n/eu-fr.json";
import { useEffect, useState } from "react";

export const useTranslationHook = (language) => {
  const [translateJson, setTranslateJson] = useState(englishJson);

  useEffect(() => {
    switch (language) {
      case "en-us":
        setTranslateJson(englishJson);
        break;
      case "in-hin":
        setTranslateJson(hindiJson);
        break;
      case "eu-fr":
        setTranslateJson(frenchJson);
        break;
      default:
        setTranslateJson(englishJson);
    }
  }, [language]);

  const translateText = (text) => {
    // dynamically form the object string

    var objectArray = text.split(".");
    if (objectArray.length === 1) {
      var translatedValue = translateJson[objectArray[0]];
      return translatedValue;
    } else {
      var translatedValue = JSON.parse(JSON.stringify(translateJson));
      objectArray.forEach((element) => {
        if (translatedValue) translatedValue = translatedValue[element] ?? null;
      });

      return translatedValue ?? text;
    }
  };

  return { translateText };
};
