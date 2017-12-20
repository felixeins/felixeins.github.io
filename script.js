function toggleClass(el) {
  var boxes = document.getElementbyID('content').children;
  for (var i = 0; i < boxes.length; i++){
    boxes[i].className = "class1";
  }
  el.className = ""
}
