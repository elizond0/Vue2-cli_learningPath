# Vue2-cli_learningPath 

## 1,脚手架安装 (https://github.com/vuejs/vue-cli)

1. $ npm install vue-cli -g
2. vue -V (注意是大写v)

## 2,初始化项目

1. $ vue init <template-name> <project-name>  管理员模式启动命令行可避免部分报错
2. <template-name>：表示模板名称，vue-cli官方提供了5种模板;<project-name>：标识项目名称

webpack-一个全面的webpack+vue-loader的模板，功能包括热加载，linting,检测和CSS扩展。
webpack-simple-一个简单webpack+vue-loader的模板，不包含其他功能，让你快速的搭建vue的开发环境。
browserify-一个全面的Browserify+vueify 的模板，功能包括热加载，linting,单元检测。
browserify-simple-一个简单Browserify+vueify的模板，不包含其他功能，让你快速的搭建vue的开发环境。
simple-一个最简单的单页应用模板。

3. Karma + Mocha -- 单元测试工具;Nightwatch -- e2e用户行为模拟测试
4. 安装完成之后 cd到项目目录
5. $ npm run dev 可启动预览

## 3,Vue-cli项目结构

``
|-- build                            // 项目构建(webpack)相关代码
|   |-- build.js                     // 生产环境构建代码
|   |-- check-version.js             // 检查node、npm等版本
|   |-- logo.png                     // logo
|   |-- utils.js                     // 构建工具相关
|   |-- vue-loader.conf.js           // 调用utils类生成样式loader的配置
|   |-- webpack.base.conf.js         // webpack基础配置
|   |-- webpack.dev.conf.js          // webpack开发环境配置
|   |-- webpack.prod.conf.js         // webpack生产环境配置
|-- config                           // 项目开发环境配置
|   |-- dev.env.js                   // 开发环境变量
|   |-- index.js                     // 项目一些配置变量
|   |-- prod.env.js                  // 生产环境变量
|-- src                              // 源码目录
|   |-- assets                       // 静态资源,会被关联并进行处理打包,是代码的一部分,并非完全"静态"
|   |-- components                     // vue公共组件
|   |-- router                         // 定义路由,使结构更清晰
|   |-- App.vue                        // 页面入口文件
|   |-- main.js                        // 程序入口文件，加载各种公共组件
|-- static                           // 静态资源，与src/assets的区别是,static下的资源是不会被webpack处理的
|   |-- .gitkeep                       // git占位符
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 定义代码格式
|-- .gitignore                       // git上传需要忽略的文件格式
|-- .postcssrc.js                    // postcssrc配置
|-- index.html                       // 入口页面
|-- package.json                     // 项目基本信息
|-- README.md                        // 项目说明
``

## 4,Vue-cli的模板

1. main.js是整个项目的入口文件,在src文件夹下,引入App组件(import App from './App')
2. *.vue是vue组件文件,App.vue分为三个部分,template,script,style(加上scoped属性可以让css只在当前组件内生效);router-view标签作为容器关联路由文件(只适用于单页面应用),单双标签都可以
3. router/index.js路由文件内引入components/helloword.vue(实际的业务内容)
4. 一般拿到vue的spa项目先从src下main.js文件开始阅读,然后根据引入组件以及router文件夹下的路由文件来分模块了解

## 5,开发模式

1. $ npm run dev 即可进入开发模式package.json里可以查看相关的配置(dev,start,build)

## 6,vue-router新建路由

1. 在components/下新建组件(test1.vue)
2. 在router/index.js里引入test1.vue,并为其配置路由
3. 然后就能在浏览器里打开了 http://localhost:8080/#/test1
4. router-link是vue内置组件,可以用于制作导航

## 7,vue-router子路由

1. 在components/下建立相应组件
2. 在router/index.js引入组件(注意import的顺序),并配置路由,子路由有略微区别,通过children扩展

## 8,vue-router参数传递

1. name传参:{{$route.name}}
2. router-link传参:
* 绑定router-link 标签中的to(即router-link :to='{}')
* 传入对象{name:(需要与路由文件中的name对应)},params:{user:'hhh',id:'123'}}
* 在需要参数的组件内,用{{$route.params.id}}接收
3. 利用url传递参数:
* 路由文件内import引入所需组件,配置路径path,用":"冒号绑定参数,此处可以使用正则对url传值进行匹配"/params/:name(reg)"
* 所需组件如params.vue,{{$route.params.num}}接受参数
* router-link标签属性to="/params/123/hhh",设置触发容器

## 9,单页面多路由

1. 新增router-view标签,并配置name属性,如果不设置name则为default对应的组件
2. 在index.js(路由文件)中,引入需要的组件,components新增键值对(key:value),此处注意组件的复数

