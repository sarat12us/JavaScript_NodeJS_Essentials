"use strict";

class Private {

  static exists(value, node) {

    if (!node) {
      return false;
    } else if (value === node.value) {
      return true;
    }
    
    const left = Private.exists(value, node.left),
      right = Private.exists(value, node.right);

    return left || right;
  }

  static dfs(array, node) {

    if (!node) {
      return array;
    } else {

      array.push(node.value);
      Private.dfs(array, node.left);
      Private.dfs(array, node.right);
    }
    return array;
  }

  static bfs(array, node) {

    var queue = [];

    while (node) {

      array.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }

      node = queue.shift();
    }
    return array;
  }

  static zigZag(array, node) {

    var stack1 = [];
    var stack2 = [];

    if (node) {
      stack1.push(node);
    }
    while (stack1.length > 0 || stack2.length > 0) {

      while (stack1.length > 0) {
        node = stack1.pop();
        array.push(node.value);
        if (node.right) {
          stack2.push(node.right);
        }

        if (node.left) {
          stack2.push(node.left);
        }
      }

      while (stack2.length > 0) {
        node = stack2.pop();
        array.push(node.value);
        if (node.right) {
          stack1.push(node.left);
        }

        if (node.left) {
          stack1.push(node.right);
        }
      }
    }
    return array;
  }
}

/**
 * Binary Search Tree example.
 */
class BinarySearchTree {

  constructor(head) {
    this.head = head;

  }

  /**
   * Search for a value in a BST returning true if found and false it not found.
   * @param value
   * @returns {*}
   */
  exists(value) {
    return Private.exists(value, this.head);
  }

  /**
   * Add items to an array when node is visited using depth first approach.  Return array when done.
   */
  dfs() {

    var array = [];

    return Private.dfs(array, this.head);

  }

  /**
   * Add items to an array when node is visited using depth first approach. Return array when done.
   */
  bfs() {
    var array = [];

    return Private.bfs(array, this.head);
  }

  /**
   *  Write a function in the Binary Search Tree class (function zigZag()) that returns array.
   *  The array will contain all items in a tree in a zig zagging order.  In other words,
   *  the first level (i.e. the root), you will print out left to right, then the second level
   *  you will print out right to left, then the third level, you will print out left to right,
   *  and so on and so on.  Hint, which tree parsing algorithm does this sound most like?
   *  What are two data structures that are opposite of each other that could help you here.
   */
  zigZag() {

    var array = [];

    return Private.zigZag(array, this.head);
  }

}

module.exports = BinarySearchTree;
