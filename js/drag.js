function drag(obj) {
  if (typeof obj === 'string') {
    var obj = document.getElementById(obj);
  } else {
    var obj = obj;
  }
  function fixEvent(event) {
    event.target = event.srcElement;
    event.preventDefault = fixEvent.preventDefault;
    return event;
  }
  fixEvent.preventDefault = function () {
    this.returnValue = false;
  };
  obj.onmousedown = mousedown;
  function mousedown(e) {
    console.log(e)
    var e = e || fixEvent(window.event);
    var disX = e.clientX - obj.offsetLeft;
    var disY = e.clientY - obj.offsetTop;
    if (e.target.className === 'sheet-headerTitle') {
      document.onmousemove = move;
      document.onmouseup = up;
    } else {
      document.onmousemove = null;
      document.onmouseup = null;
    }
    function move(e) {
      var e = e || fixEvent(window.event);
      var left = e.clientX - disX;
      var top = e.clientY - disY;
      if (obj.setCapture) {
        obj.setCapture();
      }
      if (left < 0) {
        left = 0;
      } else if (left > document.documentElement.clientWidth - obj.offsetWidth) {
        left = document.documentElement.clientWidth - obj.offsetWidth;
      }
      if (top < 0) {
        top = 0;
      } else if (top > document.documentElement.clientHeight - obj.offsetHeight) {
        top = document.documentElement.clientHeight - obj.offsetHeight;
      }
      obj.style.left = left + 'px';
      obj.style.top = top + 'px';
      return false;
    };
    function up() {
      if (obj.releaseCapture) {
        obj.releaseCapture();
      }
      document.onmousemove = null;
      document.onmouseup = null;
    }
  };
}