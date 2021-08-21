(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5166],{95166:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>u});var r=t(59713),o=t.n(r),l=t(6479),a=t.n(l),s=(t(67294),t(3905));function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){o()(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var i={};function u(n){var e=n.components,t=a()(n,["components"]);return(0,s.kt)("wrapper",c(c(c({},i),t),{},{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h3",null,"中介者模式"),(0,s.kt)("p",null,"中介者模式: 对象和对象之间借助第三方中介者进行通信。"),(0,s.kt)("p",null,(0,s.kt)("img",c({parentName:"p"},{src:"http://with.muyunyun.cn/ae0958f85990978c48b3a6aa2ca76ea1.jpg-400",alt:null}))),(0,s.kt)("h3",null,"场景 demo"),(0,s.kt)("p",null,"一场测试结束后, 公布结果: 告知解答出题目的人挑战成功, 否则挑战失败。"),(0,s.kt)("pre",null,(0,s.kt)("code",c({parentName:"pre"},{className:"language-js"}),"const player = function(name) {\n  this.name = name\n  playerMiddle.add(name)\n}\n\nplayer.prototype.win = function() {\n  playerMiddle.win(this.name)\n}\n\nplayer.prototype.lose = function() {\n  playerMiddle.lose(this.name)\n}\n\nconst playerMiddle = (function() { // 将就用下这个 demo, 这个函数当成中介者\n  const players = []\n  const winArr = []\n  const loseArr = []\n  return {\n    add: function(name) {\n      players.push(name)\n    },\n    win: function(name) {\n      winArr.push(name)\n      if (winArr.length + loseArr.length === players.length) {\n        this.show()\n      }\n    },\n    lose: function(name) {\n      loseArr.push(name)\n      if (winArr.length + loseArr.length === players.length) {\n        this.show()\n      }\n    },\n    show: function() {\n      for (let winner of winArr) {\n        console.log(winner + '挑战成功;')\n      }\n      for (let loser of loseArr) {\n        console.log(loser + '挑战失败;')\n      }\n    },\n  }\n}())\n\nconst a = new player('A 选手')\nconst b = new player('B 选手')\nconst c = new player('C 选手')\n\na.win()\nb.win()\nc.lose()\n\n// A 选手挑战成功;\n// B 选手挑战成功;\n// C 选手挑战失败;\n")),(0,s.kt)("p",null,"在这段代码中 A、B、C 之间没有直接发生关系, 而是通过另外的 playerMiddle 对象建立链接, 姑且将之当成是中介者模式了。"))}u.isMDXComponent=!0}}]);