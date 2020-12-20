
module.exports.getDate = getDate;
function getDate(){
 const today = new Date();

const options = {
  weekday:"long",
  day:"numeric",
  month:"long"
};

let day = today.toLocaleDateString("en-US",options);

return day;
}

module.exports.getDay = function (){
let today = new Date();

let options = {
  weekday:"long",
};

return day = today.toLocaleDateString("en-US",options);;
}
console.log(module.exports);
