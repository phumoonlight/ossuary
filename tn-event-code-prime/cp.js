const fs = require('fs')
const b = fs.readFileSync('./welcome_back.Small.input', "utf8") 
const c = b.split('\n')

var i = -1
c.forEach((cc) => {
  if(i === -1 ) {
    return i++
  }
  i++
  const newcc = cc.replace('-', ' ')
  if (i > 5) return
  const f = `Case #${i}: ${newcc.toUpperCase()}!`
  console.log(f)
})