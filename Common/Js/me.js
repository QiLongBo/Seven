(function(){
    function w() {
    var r = document.documentElement;
    var a = r.getBoundingClientRect().width;//获取当前设备的宽度
        if (a > 500 ){//720不固定，根据设计稿的宽度定
            a = 500;
        } 
        rem = a / 7.2;
        r.style.fontSize = rem + "px"
    }
    w();
    window.addEventListener("resize", function() {//监听横竖屏切换
        w()
    }, false);
})();
(function () {

    
})();
window.reload=window.onload=window.onresize=function () {
        function imgcon() {
          // var ht = document.getElementById('img-con');
          // var belong = document.getElementById('img-belong');
          // var img = document.getElementById('img');
          // var wd = document.documentElement.clientWidth;
          // alert();
          var hts = document.getElementsByClassName('img-con');
          var img_belongs = document.getElementsByClassName('img-belong');
          var imgs = document.getElementsByClassName('imgs');
          // alert(imgs.length);
          for(var i =0;i<hts.length;i++){
                hts[i].style.height=img_belongs[i].offsetHeight+'px';
                imgs[i].style['padding-top']=((img_belongs[i].offsetHeight-imgs[i].offsetHeight)/2)+'px';
           }
          // 

        }
        imgcon();

    }