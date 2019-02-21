// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  const newDriver = {...driver};

  newDriver[key] = value;

  return newDriver;
};


function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;

  return obj;
};

function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver);
  delete newDriver[key];

  return newDriver;
};

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key];
  return obj;
};
