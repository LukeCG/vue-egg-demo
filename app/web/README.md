# frame

> 基于vue-cli版本为V2.9.2的手脚架

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

#项目技术选型
Webpack模块打包器：通过webpack我们可以实现前端的工程化，它的插件可以帮助我们解决代码的合并、代码的压缩、图片的优化、代码的转化（如less转化为css、px转化为rem）等等，从而完成项目的打包工作。
Vue.js：他是一个用来开发web界面的可组件化MVVM前端库。学习成本低，数据的双向绑定能让我们在开发的时候把重心放在业务逻辑上。它也有配套的周边工具（如vue-router、vuex等等），如果把这些东西都算在一起，那么也可以叫它一个“前端框架”。
Vue-router：当用vue.js创建单页面应用的时候，路由是必须的，它可以将组件映射到路由，通过切换不同的路由来显示不同的组件组合。
Vue-axios：它可以用于请求后端接口。
Babel编译器：它用于把ES6编译成ES5（能让我们现在就可以编写下一代JavaScript）
Less：它是一门CSS预处理语言，扩展了CSS，增加了变量、函数等特性，提高了CSS开发效率
Reset.css：用于解决浏览器在默认样式上的诸多差异，说白了就是统一元素的默认样式
base.css：常用的公共样式。如.font12{font-size:12px;}、.dib{display:inline-block;}等等
util文件夹：用于存放通用函数库（如处理cookie、H5存储等等，可通用于多有项目）
跨域问题：项目用的是vue-cli手脚架，它自带了跨域的解决方案
统一代码风格：使用vsCode编辑器的EditorConfig插件统一项目的代码风格
项目的版本管理（X.Y.Z）
Mock.js：使用Mock.js在开发的时候动态模拟后端接口数据
封装axios接口：配置请求的通用项，统一处理错误请求

#开发规范
组件化开发思路：对整个UI界面进行拆分，每个组件都应该包含模块(HTML)+样式(CSS)+逻辑(JS)。说白了就是一个.vue文件。所有组件应该放在components文件夹下。
模块化开发思路：有时候一个组件会牵涉到上1000行代码，这时候可以把组件模块化，所谓模块化，就是把一个大文件拆分成相互依赖的小文件，再进行统一的拼装和加载。当一个组件需要模块化的时候，在存放组件的目录下新建一个文件夹，文件夹下存放模块文件
代码规范：JS代码应该用ES6编写
