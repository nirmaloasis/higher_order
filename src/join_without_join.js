function joinWithoutJoin(array,delimiter){
  if(!delimiter) delimiter = " "
  return array.reduce(function(inc,element){
    return element == array[array.length - 1] ? inc+element : inc + element + delimiter
  },'')
}
module.exports = joinWithoutJoin;
