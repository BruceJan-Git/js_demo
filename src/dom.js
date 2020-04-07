console.log('********** Dom test update **********')
/********************************************************************************/
/**
 * 1. 动态创建元素(innerHTML方式创建)
 */
// var btn = document.querySelector('#todo input[type="button"]')
// var content = document.querySelector('#todo input[type="text"]')
// var li = document.querySelector('#todo li')
// var ul = document.querySelector('#todo ul')
// btn.onclick = function () {
//   var res = `<li>${content.value}</li>`
//   var str = ul.innerHTML
//   str += res
//   ul.innerHTML = str
// }

/********************************************************************************/
/**
 * 1.动态创建元素(innerHTML方式创建)
 */
// var btn2 = document.querySelector('.data_table input[type="button"]')
// var input = document.querySelector('.data_table input[type="text"]')
// btn2.addEventListener('click', function () {
//   var newLi = document.createElement('li')
//   newLi.innerText = input.value
//   var ul = document.querySelector('.content ul')
//   ul.insertBefore(newLi, ul.children[0])
// })

/********************************************************************************/
/**
 * 1. 动态创建表格
 */
// var heads1 = ['姓名', '年龄', '性别', '学号', '薪资', '城市', '操作'];
// var datas1 = [
//   { name: '欧阳霸天', age: 19, gender: '男', stuId: '1001', salary: '20000', city: '上海' },
//   { name: '令狐霸天', age: 19, gender: '男', stuId: '1001', salary: '20000', city: '北京' },
//   { name: '诸葛霸天', age: 19, gender: '男', stuId: '1001', salary: '20000', city: '南京' },
//   { name: '欧阳炸炸', age: 19, gender: '男', stuId: '1001', salary: '20000', city: '南京' },
//   { name: '欧阳炸炸', age: 19, gender: '男', stuId: '1001', salary: '20000', city: '南京' },
//   { name: '欧阳炸炸1', age: 19, gender: '男', stuId: '1001', salary: '20000', city: '南京' },
//   { name: '欧阳炸炸4', age: 19, gender: '男', stuId: '1001', salary: '20000', city: '南京' }
// ];
// var detail = document.querySelector('.table')
// var table = document.createElement('table')
// var thead = document.createElement('thead')
// var tbody = document.createElement('tbody')
// detail.appendChild(table)
// table.appendChild(thead)
// table.appendChild(tbody)
// var tr = document.createElement('tr')
// for (var index = 0; index < heads1.length; index++) {
//   var th = document.createElement('th')
//   th.innerText = heads1[index]
//   tr.appendChild(th)
//   thead.appendChild(tr)
// }
// for (var index = 0; index < datas1.length; index++) {
//   var tr = document.createElement('tr')
//   for (const key in datas1[index]) {
//     var td = document.createElement('td')
//     tr.appendChild(td)
//     td.innerText = datas1[index][key]
//     tbody.appendChild(tr)
//   }
//   var lastTd = document.createElement('td')
//   tr.appendChild(lastTd)
//   tbody.appendChild(tr)
//   lastTd.innerHTML = '<a>删除</a>'
// }

/********************************************************************************/
/**
 * 1. 通过事件对象获取当前元素以及其内容
 * 2. 事件委托
 */
// var ul_ = document.getElementById('bubble')
// ul_.addEventListener('click', function (e) {
//   var li = e.target.nodeName
//   if (li == 'LI') {
//     console.log(e.target.innerText)
//   }
// })

/********************************************************************************/
/**
 * 1. 通过事件对象的属性获取当前坐标位置
 */
// var div = document.querySelector('.box2')
// div.style.height = '300px'
// div.style.background = '#000'
// div.onclick = function (e) {
//   div.innerHTML = `<span>${e.clientX}</span>,<span>${e.clientY}</span>`
//   var span = document.querySelectorAll('span')
//   for (var index = 0; index < span.length; index++) {
//     span[index].style.color = 'blue'
//   }
// }

/********************************************************************************/
/**
 * 1. js动画
 * 2. 函数的封装
 * 3. element 选择要移动的元素 @variable @argument
 *    targetVal 要移动的距离 @number
 *    speed 移动的速度 @number
 */
var btnRight = document.querySelector('input[value="向右走"]')
var btnLeft = document.querySelector('input[value="向左走"]')
var element = document.querySelector('.box3')
// 定义一个全局变量,以便在每个click事件中都能访问到,可以清除定时任务
var time
// btnRight.onclick = function () {
//   window.clearInterval(time)
//   time = window.setInterval(() => {
//     var leftVal = element.offsetLeft
//     if (leftVal == 308) {
//       // element.style.left = `${leftVal}px`  // 清除定时任务,则leftVal此时就是元素left值
//       // console.log(leftVal)
//       // 当元素到达这个位置时,此时定时器任务并没有结束,所以要清除定时任务,避免内存消耗
//       window.clearInterval(time)
//       // 当元素到达指定位置时,后边的代码还会执行,此时if条件不成立,定时任务就会继续执行
//       // return组织后续代码继续执行
//       return
//     }
//     element.style.left = `${leftVal + 10}px`
//   }, 100)
// }

var move = function (element, targetVal, speed) {
  window.clearInterval(time)
  time = window.setInterval(() => {
    var leftVal = element.offsetLeft
    if (leftVal == targetVal) {
      window.clearInterval(time)
      return;
    }
    if (Math.abs(targetVal - leftVal) < speed) {
      element.style.left = targetVal + 'px'
    } else {
      // if (leftVal < targetVal) {
      //   element.style.left = leftVal + speed + 'px'
      // } else {
      //   element.style.left = leftVal - speed + 'px'
      // }
      if (targetVal - leftVal > 0) {
        leftVal += speed
      } else {
        leftVal -= speed
      }
      element.style.left = `${leftVal}px`
    }
  }, 100);
}

// btnRight.onclick = function (e) {
//   move(element, 300, 50)
// }
// btnLeft.onclick = function (e) {
// move(element, 8, 100)
// }

/**
 * 轮播图demo
 * 1. 点击左右按钮,实现图片切换,小点状态激活,==>实现无缝衔接
 * 2. 点击小点,实现跳转到对应的图片
 * 3. 自动轮播,鼠标进入离开暂停和继续轮播
 */
// 要获取的元素 .bannerCenter .bannerContent .bannerBtnR .bannerBtnL .bannerDot
var bannerCenter = document.querySelector('#bannerCenter')
var bannerContent = document.querySelector('.bannerContent')
var bannerBtnR = document.querySelector('.bannerBtnR')
var bannerBtnL = document.querySelector('.bannerBtnL')
var bannerDots = document.querySelectorAll('.bannerDot ul li')
var index_ = 0
var step_Val = bannerCenter.offsetWidth

// 第一步

// bannerBtnR.onclick = function () {
//   bannerDots[index_].className = 'disable'
//   index_++
//   if (index_ > 2) {
//     index_ = 2
//   }
//   var elementVal = -left_Val * index_
//   move(bannerContent, elementVal, 50)
//   bannerDots[index_].className = 'disable active'
// }
// bannerBtnL.onclick = function () {
//   bannerDots[index_].className = ''
//   index_--
//   if (index_ < 0) {
//     index_ = 0
//   }
//   var elementVal = -left_Val * index_
//   move(bannerContent, elementVal, 50)
//   bannerDots[index_].className = 'disable active'
// }

// 第一步更正

// bannerBtnR.onclick = function () {
//   bannerDots[index_].className = 'disable'
//   index_++
//   if (index_ > 2) {
//     index_ = 2
//   }
//   var elementVal = -index_ * step_Val
//   move(bannerContent, elementVal, 50)
//   bannerDots[index_].className = 'disable active'
// }
// bannerBtnL.onclick = function () {
//   bannerDots[index_].className = ''
//   index_--
//   if (index_ < 0) {
//     index_ = 0
//   }
//   var elementVal = -index_ * step_Val
//   move(bannerContent, elementVal, 50)
//   bannerDots[index_].className = 'disable active'
// }

// 第二步

// bannerBtnR.onclick = function () {
//   bannerDots[index_].className = 'disable'
//   index_++
//   if (index_ > 2) {
//     index_ = 2
//   }
//   var elementVal = -left_Val * index_
//   move(bannerContent, elementVal, 50)
//   bannerDots[index_].className = 'disable active'
// }
// for (var index = 0; index < bannerDots.length; index++) {
//   // bannerDots[index] = ''
//   bannerDots[index].newIndex = index
//   bannerDots[index].onclick = function () {
//     bannerDots[currentIndex].className = 'disable'
//     // bannerDots[currentIndex].className = 'disable'
//     // console.log(bannerDots[currentIndex])
//     // console.log(this.newIndex)
//     // console.log(this.newIndex)
//     currentIndex = this.newIndex
//     var elementVal = -currentIndex * left_Val
//     move(bannerContent, elementVal, 50)
//     console.log(bannerDots[currentIndex])
//     bannerDots[currentIndex].className = 'disable active'
//   }
// }
// bannerBtnL.onclick = function () {
//   bannerDots[index_].className = ''
//   index_--
//   if (index_ < 0) {
//     index_ = 0
//   }
//   var elementVal = -left_Val * index_
//   move(bannerContent, elementVal, 50)
//   bannerDots[index_].className = 'disable active'
// }

// 第二步更正

// var qj
// for (var i = 0; i < bannerDots.length; i++) {
//   bannerDots[i].index = i
//   bannerDots[i].onclick = function () {
//     bannerDots[0].className = 'disable'
//     if (qj !== undefined) {
//       bannerDots[qj].className = 'disable'
//     }
//     var currentIndex = this.index
//     var moveVal = -currentIndex * step_Val
//     move(bannerContent, moveVal, 100)
//     bannerDots[currentIndex].className = 'disable active'
//     qj = currentIndex
//   }
// }
// bannerBtnR.onclick = function () {
//   bannerDots[index_].className = 'disable'
//   index_++
//   if (index_ > 2) {
//     index_ = 2
//   }
//   var elementVal = -index_ * step_Val
//   move(bannerContent, elementVal, 50)
//   bannerDots[index_].className = 'disable active'
// }
// bannerBtnL.onclick = function () {
//   bannerDots[index_].className = ''
//   index_--
//   if (index_ < 0) {
//     index_ = 0
//   }
//   var elementVal = -index_ * step_Val
//   move(bannerContent, elementVal, 50)
//   bannerDots[index_].className = 'disable active'
// }

// 第三步

// var qj 使用index_这个变量
for (var i = 0; i < bannerDots.length; i++) {
  bannerDots[i].index = i
  bannerDots[i].onclick = function () {
    bannerDots[index_].className = 'disable'
    // if (qj !== undefined) {
    //   bannerDots[qj].className = 'disable'
    // }
    index_ = this.index
    var moveVal = -index_ * step_Val
    move(bannerContent, moveVal, 100)
    bannerDots[index_].className = 'disable active'
    // qj = currentIndex
  }
}

bannerBtnR.onclick = function () {
  if (index_ == 0) {
    bannerContent.style.left = 0 + 'px'
  }
  bannerDots[index_].className = 'disable'
  index_++
  var elementVal = -index_ * step_Val
  move(bannerContent, elementVal, 50)
  if (index_ == 3) {
    index_ = 0
  }
  bannerDots[index_].className = 'disable active'
}

bannerBtnL.onclick = function () {
  bannerDots[index_].className = ''
  index_--
  if (index_ < 0) {
    index_ = 2
    bannerContent.style.left = -900 + 'px'
  }
  var elementVal = -index_ * step_Val
  move(bannerContent, elementVal, 50)
  bannerDots[index_].className = 'disable active'
}

var outPlay = window.setInterval(() => {
  bannerBtnR.onclick()
}, 1000);
bannerCenter.addEventListener('mouseover', function () {
  clearInterval(outPlay)
})
bannerCenter.addEventListener('mouseleave', function () {
  outPlay = window.setInterval(() => {
    bannerBtnR.onclick()
  }, 2000);
})