// react에서 자주 쓰는 함수 map()
// map() : 배열 내의 모든 요소 각각에 대해 주어진 함수를 호출 => 호출한 결과를 새로운 배열로 반환
let arr1 = [1, 2, 3, 4, 5, 6];

// arr1.map((item) => console.log(item));

// arr1.map((item, idx) => console.log(idx, ":", item));

// arr1 배열을 (x) => x * 2 함수 호출 후 결과를 map1(새로운 배열)로 반환
const map1 = arr1.map((x) => x * 2);
console.log(map1);

// 구조분해
const array = [10, 11, 12];

// 배열 요소를 개별 변수에 담기
// const arr2 = array[0];
// const arr3 = array[1];
// const arr4 = array[2];
// console.log(arr2, arr3, arr4);

// const [arr2, arr3, arr4] = array;

// ... : spread
const [arr2, ...arr4] = array;
console.log(arr2, arr4);

let varArr1 = ["num1", "num2"];
let varArr2 = ["num3", "num4"];
let varArr3 = [...varArr1, ...varArr2];
let varArr4 = [varArr1, varArr2];
console.log(varArr3);
console.log(varArr4);
