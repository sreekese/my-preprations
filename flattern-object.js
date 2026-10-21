const user = {
  name: "Raj",
  address: {
    city: "Delhi",
    location: {
      state: "Delhi",
      country: "India"
    }
  }
};

function flattenObject(obj, parentkey="", result={}){
    for(let key in obj){
        let newKey = parentkey ? `${parentkey}.${key}` : key;
        if(typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
            flattenObject(obj[key], newKey, result);
        } else {
            result[newKey] = obj[key];
        }
    }
    return result;
}

console.log(flattenObject(user));