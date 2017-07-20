function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let startingPoint = document.querySelectorAll('#grand-node')
  let nextElement = startingPoint[0].children[0]
  while(nextElement.children.length > 0) {
    nextElement = nextElement.children[0]
  }
  return nextElement

}

function increaseRankBy(n) {
  let myList = document.querySelectorAll('.ranked-list')
  myList.forEach((node) => {
    let items = node.querySelectorAll('li')
    items.forEach((item) => {
      let currentValue = parseInt(item.innerHTML)
      let newValue = (currentValue + n).toString()
      item.innerHTML = newValue
    })
  })
}
