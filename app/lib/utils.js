export const capitalizeFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);
  
  export const decodeCategoryName = (categoryName) =>
    capitalizeFirstLetter(decodeURI(categoryName));
  
  export const slugify = (text) => {
    return text.toLowerCase().replace(/\s+/g, '-');
  };
  
  export const unslugify = (text) => {
    return text.replace(/-/g, ' ');
  };
  
  export const sleep = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  