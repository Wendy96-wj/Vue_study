var  name = "小明";
var age = 18;
var flag = true;

function sum(num1,num2){
    return num1 + num2;
}

if(flag){
    console.log(sum(20,30));
}

// 1.导出方式一：
export {
    flag,
    sum,
}

// 2.导出方式二：
export var num1 = 1000;
export var height = 1.88;

// 3.导出函数/类  function/class
export function num(num1,num2) {
    return num1 + num2
}

export class Person{
    run(){
        console.log("在奔跑");
        
    }
}

// 4.export default
// 某些情况下，一个模块中包含某个功能，我们并不希望给这个功能命名，而且让导入者可以自己来命名
// 需要注意：export default在同一个模块中，不允许同时存在多个。 


// const address = "武汉市";

// export {
//     address
// }

// export const address = '武汉市'

// export default address

export default function (argument) {
    console.log(argument);
    
}

