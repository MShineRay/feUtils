import hotPotato from '../src/hotPotato'

test('test', () => {
  const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
  const result = hotPotato(names, 7)
  result.elimited.forEach(name => {
    console.log(`${name} 在击鼓传花游戏中淘汰。`)
  })
  console.log(`胜利者：${result.winner}`)

})
