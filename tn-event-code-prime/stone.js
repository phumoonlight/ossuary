const fs = require('fs')
const b = fs.readFileSync('./stone_pile.Small.input', "utf8")

const g = b.split('\n')
let casecount = 0
for (let count = 1 ; count < g[0] ; count = count + 2) {
  casecount++
  const stonecount = g[count]
  let stone = g[count+1].split(' ')

  let sort = stone.sort((a, b) => (b - a))
  let A = 0
  let B = 0

  sort.forEach((each) => {
    if (A < B) {
      A += (+each)
    } else if ( A > B ) {
      B += (+each)
    } else {
      A += (+each)
    }
  })

  console.log(`Case #${casecount}: ${Math.abs(A-B)}`)
  // console.log(stonecount)
  // console.log(sort)
  // console.log()
}