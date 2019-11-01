// 编程范式： 命令式编程/声明式编程
// 编程范式： 面向对象编程（第一公民：对象） / 函数式编程（第一公民：函数）

// filter/map/reduce
const nums = [10,20,501,325,41,12,88,54,101];

let total = nums.filter(function (n) {
    return n < 100
}).map(function (n) {
    return n*2
}).reduce(function (perValue , n){
    return perValue + n
},0)

console.log(total);

let total2 = nums.filter(n => n < 100).map(n => n *2).reduce((pre, n)=> pre + n);
console.log(total2);

// 1.filter中的回调函数有一个要求：必须返回一个Boolean值；（true，false）
// true：当返回true时，函数内部会自动将这次回调的n加入到新的数组中
// false：当返回false时，函数内部会过滤掉这次的n

let newNums = nums.filter(function (n){
    return n<100;
})
console.log(newNums);

// 2.map函数的使用
let new2Nums = newNums.map(function(n){
    return n*2
})
console.log(new2Nums);

// 3.reduce函数的使用
// reduce作用对数组中所有的内容进行汇总
let = new3Nums = new2Nums.reduce(function (perValue,n){
    return perValue + n
},0)
console.log(new3Nums);

// 第一次：perValue 0 n 20
// 第二次：perValue 20 n 40
// 第三次：perValue 60 n 82
// 第四次：perValue 142 n 24
// 第五次：perValue 166 n 176
// 第六次：perValue 342 n 108
// return 342 + 108 = 450



// 1.需求：取出所有小于100的数字
// let newNums = []
// for(let n of nums){
//     if(n < 100){
//         newNums.push(n)
//     }
//     console.log('newNums:' + newNums);
    
// }

// 2.将所有小于100的数字进行转化：全部*2
// let new2Nums = [];
// for (let n of newNums){
//     new2Nums.push(n*2)
//     console.log('new2Nums:' + new2Nums);
    
// }

// 3.将所有new2Nums的数字相加之后的一个总数值
// let totalNum = 0;
// for (let n of new2Nums){
//     totalNum += n;
//     console.log(totalNum);
// }