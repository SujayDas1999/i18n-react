export const localStorageHelper = () => {
  var language = localStorage.getItem("language");
  return language ?? "en-us";
};
