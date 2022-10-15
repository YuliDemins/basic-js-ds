const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.rootBase = null
    }

    root() {
      return this.rootBase
    }
  
    add(data) {
      let addNode = (node, data) => {
        if (!node) return new Node (data)
        else if (node.data == data) return node
        else if (data < node.data) node.left = addNode(node.left, data)
        else node.right = addNode(node.right, data)
        return node
      }
      this.rootBase = addNode(this.rootBase, data)
    }
  
    has(data) {
      let Existing = (node, data) => {
        if (!node) return false
        else if (data == node.data) return true
        else if (data < node.data) return Existing(node.left, data)
        else return Existing(node.right, data)
      }
      return Existing(this.rootBase, data)
    }
  
    find(data) {
      let findNode = (node, data) => {
        if (!node) return null
        else if (node.data == data) return node
        
        if (node.data > data) return findNode(node.left, data)
        else return findNode(node.right, data)
      }
      return findNode(this.rootBase, data)
    }
  
    remove(data) {
      let removeNode = (node, data) => {
        if (!node) return null
        else if (data < node.data) {
          node.left = removeNode(node.left, data)
          return node
        }
        else if (data > node.data) {
          node.right = removeNode(node.right, data)
          return node
        }
  
        else {
          if (!node.left && !node.right) return null
          else if (!node.left) {
            node = node.right
            return node
          }
          else if (!node.right) {
            node = node.left
            return node
          }
  
          else {
            let min = node.right
            while (min.left) {
              min = min.left
            }
            node.data = min.data
            node.right = removeNode(node.right, min.data)
            return node
          }
        }
      } 
      this.rootBase = removeNode(this.rootBase, data)
    }
  
    min() {
      if (!this.rootBase) return null
      else {
        let node = this.rootBase
        while (node.left) {
          node = node.left
        }
        return node.data
      }
    }
  
    max() {
      if (!this.rootBase) return null
      else {
        let node = this.rootBase
        while (node.right) {
          node = node.right
        }
        return node.data
      }
  }
}

module.exports = {
  BinarySearchTree
};