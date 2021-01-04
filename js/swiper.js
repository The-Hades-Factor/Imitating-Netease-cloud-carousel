window.addEventListener("load", function () {
  //获取元素
  var swiper = document.querySelector(".swiper");
  var pic = swiper.querySelectorAll(".pic li");
  var btns = swiper.querySelector(".btns");
  var cricle = swiper.querySelector(".cricle");
  var leftbtn = swiper.querySelector(".leftbtn");
  var rightbtn = swiper.querySelector(".rightbtn");

  //清除图片类名
  function clearPicName() {
    pic.forEach(function (ele) {
      ele.className = "";
    });
  }
  function leave() {
    btns.style.display = "none";
    timer = setInterval(function () {
      rightbtn.click();
    }, 2000);
  }
  //点击图片轮播
  function next() {
    rightbtn.click();
  }
  function prev() {
    leftbtn.click();
  }

  var timer = setInterval(function () {
    rightbtn.click();
  }, 2000);
  swiper.addEventListener("mouseenter", function () {
    btns.style.display = "block";
    clearInterval(timer);
    swiper.removeEventListener("mouseleave", leave);
    swiper.addEventListener("mouseleave", leave);
  });
  //动态生成小圆点
  var lis = "";
  pic.forEach(function () {
    lis += `<li></li>`;
  });
  cricle.innerHTML = lis;
  //获取动态生成的小圆点
  var lis = cricle.querySelectorAll("li");
  lis[0].className = "_bg";
  //清楚小圆点类名
  function clearCricleName() {
    lis.forEach(function (ele) {
      ele.className = "";
    });
  }
  var pic_index = 0;
  lis.forEach(function (ele, i) {
    ele.addEventListener("mouseenter", function () {
      clearCricleName();
      ele.className = "_bg";
      //记住索引值
      var index = i;
      clearPicName();

      //上一张
      i = i == 0 ? lis.length : i;
      pic[i - 1].className = "prev";
      //恢复索引
      i = index;

      //当前
      pic[i].className = "now";

      //下一张
      i = i == lis.length - 1 ? -1 : i;
      pic[i + 1].className = "next";
      //恢复索引
      i = index;
      pic_index = i;
    });
  });

  //左按钮
  leftbtn.addEventListener("click", function () {
    pic_index--;
    pic_index = pic_index < 0 ? pic.length - 1 : pic_index;

    var index = pic_index;
    clearPicName();

    //上一张;
    pic_index = pic_index == 0 ? pic.length : pic_index;
    pic[pic_index - 1].className = "prev";
    pic_index = index;

    //当前
    pic[pic_index].className = "now";
    clearCricleName();
    lis[pic_index].className = "_bg";

    //下一张
    pic_index = pic_index == pic.length - 1 ? -1 : pic_index;
    pic[pic_index + 1].className = "next";
    pic_index = index;
  });

  //右按钮
  rightbtn.addEventListener("click", function () {
    pic_index++;
    pic_index = pic_index == pic.length ? 0 : pic_index;
    var index = pic_index;
    clearPicName();
    //上一张
    pic_index = pic_index == 0 ? pic.length : pic_index;
    pic[pic_index - 1].className = "prev";
    // pic[pic_index - 1].removeEventListener("click", prev);
    pic[pic_index - 1].addEventListener("click", prev);
    pic_index = index;
    //当前
    pic[pic_index].className = "now";
    clearCricleName();
    lis[pic_index].className = "_bg";

    //下一张
    pic_index = pic_index == pic.length - 1 ? -1 : pic_index;
    pic[pic_index + 1].className = "next";
    // pic[pic_index + 1].removeEventListener("click".next);
    pic[pic_index + 1].addEventListener("click", next);
  });
});
