import "./index.html"
// import "./css/common.scss";
import "./css/index.scss";
import "./test";
import "./dom.js"
// 当test模块内容更新时触发
if (module.hot) {
  module.hot.accept(['./test.js','./dom.js'], function () {
    // import / export语法必须在顶级作用域中使用,无法在子级作用域中使用
    require('./test.js')
    require('./dom.js')
  })
}
// import _ from 'lodash';
// import printMe from './test.js';

// function component() {
//   var element = document.createElement('div');
//   var btn = document.createElement('button');
//   btn.innerHTML = 'Click me and check the console!';
//   btn.onclick = printMe;
//   element.appendChild(btn);
//   return element;
// }
// // document.body.appendChild(component());

// let element = component(); // 存储 element，以在 print.js 修改时重新渲染
// document.body.appendChild(element);

// if (module.hot) {
//   module.hot.accept('./test.js', function () {
//     console.log('Accepting the updated printMe module!');
//     // printMe();
//     document.body.removeChild(element);
//     element = component(); // Re-render the "component" to update the click handler
//     element = component(); // 重新渲染 "component"，以便更新 click 事件处理函数
//     document.body.appendChild(element);
//   })
// }