/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var temp = {};

    for(var i = 0; i < nums.length; i++){
        temp[nums[i]] = temp[nums[i]] ? ++temp[nums[i]] : 1;
    }

    for(var j = 0; j < nums.length; j++){
        if(temp[nums[j]] < 2){
            return nums[j];
        }
    }
};