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
  const getLeafDepth = (topNode) => {
    const leafDepth = [];

    const recurHelp = (node, depth) => {
      depth += 1;
      if (node.left === null && node.right === null) leafDepth.push(depth);
      else {
        if (node.left !== null) recurHelp(node.left, depth);
        if (node.right !== null) recurHelp(node.right, depth);
      }
    };

    recurHelp(topNode, 0);
    return leafDepth;
  };

  const leftLeafDepth = tree.left === null ? [0] : getLeafDepth(tree.left);
  const rightLeafDepth = tree.right === null ? [0] : getLeafDepth(tree.right);

  if (Math.max(...leftLeafDepth) - Math.min(...leftLeafDepth) > 1) return false;
  if (Math.max(...rightLeafDepth) - Math.min(...rightLeafDepth) > 1) return false;
  if (Math.abs(Math.max(...leftLeafDepth) - Math.max(...rightLeafDepth)) > 1) return false;
  return true;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
