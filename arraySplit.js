const nums = [1,2,3,4,5,6,7,8,9];

const part = nums.slice(2,5);

const remove = nums.splice(2, 5);

console.log(remove);
console.log(nums);

const together = nums.join(" numbers ");
console.log(together);