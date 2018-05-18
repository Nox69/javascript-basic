/* Write a Program to Flatten a given n-dimensional array */

const flatten = (array) => {
	// Write your code here
    if(Array.isArray(array)){
        return flat(array);
    }
    else{
        return null;
    }
};
function flat(array){
    var output = array.reduce(
        function(arr,element){
            return arr.concat(Array.isArray(element) ? flat(element) : element);
        },[]
    );
    return output;
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
