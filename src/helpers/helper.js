
const getFirstNonEmptyValue = (obj) => {
  for (const key in obj) {
    if (obj[key]) {
      return obj[key];
    }
  }
  return null; // return a default message
}

export default getFirstNonEmptyValue;