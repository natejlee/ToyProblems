/**
 * Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this in place with constant memory.

 * For example,
 * Given input array nums = [1,1,2],
 * Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    var search = null;
    var check = null;
    var tempArr = nums;
    var deleted = false;
    var index = 0;

    while(index < nums.length) {
        search = tempArr[index];
        check = tempArr[index + 1];

        if(search === check) {
            tempArr.splice(index + 1, 1);
        } else {
            index++;
        }

        // Another way to do it
        // for(var inner = index + 1; tempArr[inner] === search; inner++) {
        //     tempArr.splice(inner, 1);
        //     deleted = true;

        //     if(deleted) {
        //         inner--;
        //         deleted = false;
        //     }
        // }
    }

    return tempArr.length;
};