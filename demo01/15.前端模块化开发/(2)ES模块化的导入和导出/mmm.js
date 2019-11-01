// 1.导入的对象{}中定义的变量
import {flag,sum} from '../aaa.js'
if (flag){
    console.log("小明是天才哈哈哈");
    console.log(sum(20,30));
}

// 2.直接导入export定义的变量
import {num1,height} from "../aaa.js"
console.log(num1);
console.log(height);

// 3.直接导入export定义的函数
import {num,Person} from "../aaa.js"
console.log(num(30,50));

const p = new Person();
p.run();

// 4.导入export default中的内容
import addr from "../aaa.js"
addr('你好啊');

// 5.统一全部导入
// import {flag,num, num1 ,height, Person,sum} from './aaa/js'

import * as aaa from './aaa/js'
console.log(aaa.flag);





