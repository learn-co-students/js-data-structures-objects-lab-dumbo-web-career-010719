const driver = {}
function updateDriverWithKeyAndValue(driver, address, value){
  const newObj = { ...driver };
  newObj[address] = value
  return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(driver, address, value){
  driver.address = value
  return driver
}

function deleteFromDriverByKey(driver, key){
  const newObj = {...driver};
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}
