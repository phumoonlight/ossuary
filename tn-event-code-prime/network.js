const fs = require('fs')
const file = fs.readFileSync('./sorting_network.A.input', "utf8")

// 0 - less
// 1 - more
class Node {
  constructor(test) {
    this.test = test
    this.output = []
    this.invoke = (i) => {
      this.node9()
      const output = JSON.stringify(this.test.sort((a, b) => a - b)) === JSON.stringify(this.output) ? 'sorted!!' : this.output
      console.log('case#', i+1, output)
    }
    this.compare = (a, b) => {
      if (a < b) {
        return [a, b]
      } else {
        return [b, a]
      }
    }
    this.node1 = () => {
      const result = this.compare(this.test[0], this.test[1])
      return result
    }
    this.node2 = () => {
      const result = this.compare(this.test[2], this.test[3])
      return result
    }
    this.node3 = () => {
      const result = this.compare(this.test[4], this.test[5])
      return result
    }
    this.node4 = () => {
      const result = this.compare(
        this.node1()[0],
        this.node2()[0],
      )
      this.output[0] = result[0]
      return result
    }
    this.node5 = () => {
      const result = this.compare(
        this.node1()[1],
        this.node3()[0],
      )
      return result
    }
    this.node6 = () => {
      const result = this.compare(
        this.node2()[1],
        this.node3()[1],
      )
      this.output[5] = result[1]
      return result
    }
    this.node7 = () => {
      const result = this.compare(
        this.node4()[1],
        this.node5()[0],
      )
      this.output[1] = result[0]
      return result
    }
    this.node8 = () => {
      const result = this.compare(
        this.node5()[1],
        this.node6()[0],
      )
      this.output[4] = result[1]
      return result
    }
    this.node9 = () => {
      const result = this.compare(
        this.node7()[1],
        this.node8()[0],
      )
      this.output[2] = result[0]
      this.output[3] = result[1]
    }
  }
}

// const node = new Node([6, 1, 2, 3, 4, 5])
// node.invoke()

const splitedCase = file.split('\n')
splitedCase.shift()
splitedCase.pop()
splitedCase.forEach((each, index) => {
  each = each.split(' ').map((item) => parseInt(item, 10))
  const node = new Node(each)
  node.invoke(index)
})


