/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution.

 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSums(nums, target) {
    for(var index1 = 0; index1 < nums.length; index1++) {
        for(var index2 = index1 + 1; index2 < nums.length; index2++) {
            if(nums[index1] + nums[index2] === target) {
                return [index1, index2];
            }
        }
    }
};