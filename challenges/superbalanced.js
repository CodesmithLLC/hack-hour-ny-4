/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  if (!tree) return true; 
  if (this.left) { 
    var leftHeight = superbalanced(this.left);
  } else if (this.right) { 
    var rightHeight = superbalanced(this.right); 
  } //end if else
  
  let taller = Math.max(leftHeight, rightHeight);
  if (leftHeight > rightHeight && leftHeight - rightHeight < 2) { 
    return true; 
  } else if (rightHeight < leftHeight && rightHeight -  leftHeight < 2) { 
    return ture; 
  } else { 
    return false; 
  }//end if else
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
