const getKey = (keyString) => {
  let keys = keyString.split('.');

  if (keys.includes('')) {
    console.error('Invalid Session Key!');
    return false;
  }

  return keys;
};

const getValue = (obj) => {
  const key = Object.keys(obj)[0];
  return key !== '0' ? getValue(obj[key]) : obj;
};

const getItem = (keyString) => {
  let keys = getKey(keyString);
  if (!keys) {
    return null;
  }

  let parent = JSON.parse(localStorage.getItem(keys[0]));
  if (!parent) {
    return null;
  }
  if (keys.length === 1) {
    return parent;
  }

  for (let index = 1; index < keys.length; ++index) {
    if (!parent[keys[index]]) {
      return null;
    }
    parent = parent[keys[index]];
  }

  return parent;
};

const setItem = (keyString, data) => {
  let keys = getKey(keyString);
  if (!keys) {
    return null;
  }

  if (keys.length === 1) {
    localStorage.setItem(keys[0], JSON.stringify(data));
  } else {
    let parent = getItem(keys[0]) ?? {};
    let object;
    let result = (object = parent);
    for (let index = 1; index < keys.length - 1; ++index) {
      if (!object[keys[index]]) {
        object[keys[index]] = {};
      }
      object = object[keys[index]];
    }
    object[keys[keys.length - 1]] = data;
    localStorage.setItem(keys[0], JSON.stringify(result));
  }
  return true;
};

const updateItem = (keyString) => {
  let keys = getKey(keyString);
  if (!keys || !getItem(keyString)) {
    return null;
  }
  let parent = getItem(keys[0]);
  localStorage.removeItem(keys[0]);
  setItem(keyString, getValue(parent));
  return true;
};

const removeItem = (keyString) => {
  let keys = getKey(keyString);
  if (!keys) {
    return null;
  }
  localStorage.removeItem(keys[0]);
  return true;
};

const clearItem = () => {
  localStorage.clear();
  return true;
};

export const localStorageHelper = {
  getKey,
  getValue,
  getItem,
  setItem,
  updateItem,
  removeItem,
  clearItem,
};
