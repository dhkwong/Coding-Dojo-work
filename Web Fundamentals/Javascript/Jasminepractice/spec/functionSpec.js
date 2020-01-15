//return the sum of 1 to N.  For example Sum1toN(3) would return the sum of 1+2+3 which is 6.
//sum1toN(255) returns the sum of all numbers from 1 to 255
function Sum1toN(n) {
    var sum = 0;
    for (var i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
//return the sum of the first number in the array and the last number in the array
function sumFirstLast(arr) {
    var sum = 0;
    sum = arr[0] + arr[arr.length - 1];
    return sum;
}
function returnLargest(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

describe("Sum1toN", function () {
    it("should return 3 when we pass 2 as an argument", function () {
        expect(Sum1toN(2)).toEqual(3);
    });
    it("should return 6 when we pass 3 as an argument", function () {
        expect(Sum1toN(3)).toEqual(6);
    });
    it("should return 10 when we pass 4 as an argument", function () {
        expect(Sum1toN(4)).toEqual(10);
    });
});

describe("sumFirstLast", function () {
    it("should return 3 when we pass [1,2] as an argument", function () {
        expect(sumFirstLast([1, 2])).toEqual(3);
    });
    it("should return 10 when we pass [2,3,8] as an argument", function () {
        expect(sumFirstLast([2, 3, 8])).toEqual(10);
    });
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function () {
        expect(sumFirstLast([-6, 23, 3, -4])).toEqual(-10);
    });
});

describe("returnLargest", function () {
    it("should return 4 when we pass [1,2,4] as an argument", function () {
        expect(returnLargest([1, 2, 4])).toEqual(4);
    });
});


// function reverseArray(arr){ 
//     for(var i=0; i<arr.length/2; i++) { 
//         temp = arr[arr.length-i-1]; 
//         arr[arr.length-i-1] = arr[i]; 
//         arr[i] = temp; 
//     } 
//     return arr; 
// } 
// b = reverseArray([1,2,3]); 
// console.log('b is', b); 

// describe("reverseArray", function() { 
//     it("should return [5,3,1] when [1,3,5] is passed", function() { 
//         expect(reverseArray([1,3,5])).toEqual([5,3,1]); 
//     }); 
//     it("should return [2,4,8,1] when [1,8,4,2] is passed", function() { 
//         expect(reverseArray([2,4,8,1])).toEqual([1,8,4,2]); 
//     }); 
// });



