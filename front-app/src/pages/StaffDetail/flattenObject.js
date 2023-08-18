function flattenObject(obj) {
    const result = {};
  
    function recurse(currentObj, currentPath = '') {
      for (const key in currentObj) {
        const newPath = currentPath ? `${key}` : key;
        if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
          recurse(currentObj[key], newPath);
        } else {
          result[newPath] = currentObj[key];
        }
      }
    }
  
    recurse(obj);
  
    return result;
  }
  
  export default flattenObject;
  
  