// 正常引入：会报错，要加入css-loader
import "../css/style.css";
import "../css/title.less";

// 内联方式引入
// import "css-loader!.//css/style.css";

const divEl = document.createElement("div");

divEl.className = "title";
divEl.innerHTML = "hello world";

document.body.appendChild(divEl);
