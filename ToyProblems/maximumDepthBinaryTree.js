/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root === null) {
        return 0;
    }

    var left = maxDepth(root.left) + 1;
    var right = maxDepth(root.right) + 1;

    if(left > right){
        return left;
    } else {
        return right;
    }
};