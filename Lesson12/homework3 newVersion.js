// TODO Find intersection numbers in array. Two arrays as parameters. Return array with unique intersection parameters:
// new trying with set
const num1 = [1, 2, 6, 7, 5];
const num2 = [5, 2, 3, 4];
const result = [];
function getIntersection(nums1, nums2) {
  const set = new Set(nums1);
  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) {
      result.push(nums2[i]);
      set.delete(nums2[i]);
    }
  }
  return result;
}

console.log = (getIntersection(num1, num2));
