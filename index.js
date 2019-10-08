const driver = {};
// updateDriverWithKeyAndValue(driver, key, value)
//   1) returns a driver with the original key value pairs and the new key value pair
//   2) it does not modify the original driver, but rather returns a clone with the new data
// destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
//   3) updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver

function updateDriverWithKeyAndValue(driver,key,value){
  const newObj = {...driver}
  newObj[key] = value;
  return newObj;
};

// destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
// 1) updates `driver` with the given `key` and `value` (it is destructive)
// returns the entire updated driver
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  return Object.assign(driver, {[key]: value})
};

// deleteFromDriverByKey(driver, key)
// deletes `key` from a clone of driver and returns the new driver (it is non-destructive):
function deleteFromDriverByKey(driver, key){

};
