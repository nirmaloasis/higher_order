module.exports = function (sentence){
  if(sentence == "") return {}
  return sentence.split(" ").reduce((out,inp) =>{
    out[inp] ? out[inp] += 1: out[inp] = 1
    return out
  },{})
}
