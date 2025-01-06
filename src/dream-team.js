const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if ( members === null || members === undefined ) return false;
  let namesArray = [];
  for (let i = 0; i < members.length; i += 1) {
    if (typeof members[i] == 'string' && members[i] !== "") {
      let memberName = members[i].replaceAll(" ","");
      memberName = memberName.charAt(0).toUpperCase();
      namesArray[namesArray.length] = memberName;
      }
  }
  namesArray = namesArray.sort();
  const namesString = namesArray.join("");
  return namesString;
}

module.exports = {
  createDreamTeam
};
