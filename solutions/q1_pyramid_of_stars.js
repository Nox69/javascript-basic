/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (heightOfPyramid) => {
	// Write your code here

  let spaces = heightOfPyramid ;
      let stars = 1,
          res ='';
      for(var i=1 ; i <= heightOfPyramid ; i++ )
      {
          for(var j = 0 ; j<spaces ; j++)
          {
              res += ' ';
          }
          for(var k = 0 ; k<stars ; k++)
          {
              res += '* ';
          }
          res += ' \n';
          spaces -=1;
          stars +=1;
          }
      return res;


};



/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
