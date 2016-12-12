const expect = require('chai').expect
const joinWithoutJoin = require('../src/join_without_join')

describe('#JoinWithoutJoin',() => {
  it('takes an empty array and returns empty string', () => {
    const input = [],delimiter = " "

    expect(joinWithoutJoin(input,delimiter)).to.equal('')

  })
  it('takes an array and returns string by joining all the elements', () => {
    const input = ['a','b']
    const delimiter = ","
    expect(joinWithoutJoin(input , delimiter)).to.equal('a,b')
    const input1 = ['a','b','abc','ghj']
    
    expect(joinWithoutJoin(input1)).to.equal('a b abc ghj')

  })


})
