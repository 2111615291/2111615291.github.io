//读取元素样式 el:元素  attr:属性（字符串)
function getStyle(el,attr){
    return window.getComputedStyle(el)[attr];
}