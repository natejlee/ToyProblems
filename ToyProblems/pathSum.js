/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    var result = false;

    if(root === null) {
        return false;
    }

    if(root.left === null && root.right === null) {
        return root.val === sum;
    }

    function recurse(node, newNum) {
        if(node.right === null && node.left === null && newNum === sum) {
            result = true;
            return;
        }

        if(node.left !== null) {

            recurse(node.left, newNum + node.left.val)
        }

        if(node.right !== null) {

            recurse(node.right, newNum + node.right.val)
        }

    }

    recurse(root, root.val);
    return result;
};