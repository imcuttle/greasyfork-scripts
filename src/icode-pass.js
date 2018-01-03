// ==UserScript==
// @name icode
// @namespace Violentmonkey Scripts
// @match *://icode.baidu.com/**/reviews/*/files
// @grant none
// ==/UserScript==

window.addEventListener('load', function () {
  var _timer = setInterval(function () {
    if (check()) {
      hide()
      append()
      clearInterval(_timer)
    }
  }, 200)

  function check() {
    var tab = document.querySelector('.nav-tab')
    return !!(tab && tab.nextElementSibling)
  }

  function hide() {
    var tab = document.querySelector('.nav-tab')
    tab.nextElementSibling.style.display = 'none'
  }
  function show() {
    var tab = document.querySelector('.nav-tab')
    tab.nextElementSibling.style.display = ''
  }
  function append() {
    function newButton(text, onClick) {
      var btn = document.createElement('button')
      btn.innerText = text
      btn.style.marginLeft = '10px'
      btn.addEventListener('click', onClick)
      return btn
    }
    var tab = document.querySelector('.nav-tab')
    var span = document.createElement('span')
    span.appendChild(newButton('show', show))
    span.appendChild(newButton('hide', hide))
    span.style.float = 'right'
    tab.appendChild(span)
  }
})
