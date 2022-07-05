const ModuleA = require("./myModules/moduleA.js")//引入自定义模块
ModuleA.print(ModuleA.message)
ModuleA.a()

const _ = require("lodash");// npm install [-参数] 包名1,包名2
const timestamp = _.now();
console.log(timestamp)
