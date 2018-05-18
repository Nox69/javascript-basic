// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics
// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.
// Write your code here
const flatten = () => {
const arrACC =  new Array();
for(i=1;i<50;i++){
arrACC.push({stId:"name"+i,grammar: Math.floor(Math.random() * 100),Accounts:Math.floor(Math.random() * 100)})
}
const arrPhy =  new Array();
for(j=50;j<=100;j++){
arrPhy.push({stId:"name"+j,grammar: Math.floor(Math.random() * 100),physics:Math.floor(Math.random() * 100)});
}
const arrayToObject = (array) =>
   array.reduce((obj, item) => {
     obj[item.stId] = item
     return obj
 }, {})
const arrAccObj = arrayToObject(arrACC);
const arrPhyObj = arrayToObject(arrPhy);
var str = "Name" + "&nbsp;" + "Per"
str = str + '<br>' + "---------------------------";
console.log(arrAccObj)
for (var stId in arrAccObj) {
  const name = arrAccObj[stId].stId;
  const per = (arrAccObj[stId].grammar + arrAccObj[stId].Accounts)/2;
  str = str + '<br>' + name + "&nbsp;" + per + "%";
}
for (var stId in arrPhyObj) {
  const name = arrPhyObj[stId].stId;
  const per = (arrPhyObj[stId].grammar + arrPhyObj[stId].physics)/2;
  str = str + '<br>' + name + "&nbsp;" + per + "%";

}
return str;
}
