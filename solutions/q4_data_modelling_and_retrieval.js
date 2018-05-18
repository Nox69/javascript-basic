// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast
// Write your code here
const fruitretrieve = (fruit) => {
const fruitlist = [
    { fruit: "jackfruit", color: "yellow", price: 100 },
    { fruit: "apple", color: "red", price: 80 },
    { fruit: "grapes", color: "green", price: 250 },
    { fruit: "watermelon", color: "red", price: 500 },
    { fruit: "dragonfruit", color: "yellow", price: 200 }
  ]
   const arrayToObject = (array) =>
     array.reduce((obj, item) => {
       obj[item.fruit] = item
       return obj
     }, {})
   const fruitobj = arrayToObject(fruitlist)
   return fruitobj[fruit].color + fruitobj[fruit].price
}
fruitretrieve(mango);
