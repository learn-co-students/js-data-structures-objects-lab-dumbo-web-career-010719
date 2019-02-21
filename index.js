// Write your solution in this file!
// Be sure to run the tests to get a feel for the types of problems this
// lab is asking you to solve. In particular, you'll need to define a driver
// Object and then apply certain updates (destructively and non-destructively)
// in various functions.
//
// You'll be writing four functions:
//
// updateDriverWithKeyAndValue()- this function should take in a driver Object,
// a key and a value. The function should not mutate the driver parameter and
// return a new driver that has an updated value for the key passed in.
// destructivelyUpdateDriverWithKeyAndValue() - this function should work the
// same as updateDriverWithKeyAndValue() but it should mutate the driver
// parameter passed in.
// deleteFromDriverByKey() - this function should take in a driver Object
// and a key. It should delete the key/value pair for the key that was passed
// in from the driver Object. This should all not actually mutate the driver
// passed in.
// destructivelyDeleteFromDriverByKey() - this function should work the same
// as deleteFromDriverByKey() but it should mutate the driver passed in.
// HINT: You might find deleteFromDriverByKey() to be a bit hard to write
// non-destructively. Think about how we learned to use Object.assign().
// What happens if we do this:

let driver = {};
function updateDriverWithKeyAndValue(driver, key, value) {
  let newObj = {...driver}
  newObj[key] = value;
  return newObj;
}
function deleteFromDriverByKey(driver, key) {
  let newObj = {...driver}
  delete newObj[key];
  return newObj;
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}
function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
