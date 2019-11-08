  var showNo = 0; //当前显示图片在数组中下标
  function showByIndex(dir){
    var imgShow = document.getElementById("imageShow");
    var images = imgShow.getElementsByTagName("div");
    if(dir==0){ //dir为0，显示当前图片前面的图片，否则显示当前图片后面的图片
      showNo=showNo+images.length-1;  //因为负数取余的逻辑是绝对值取余之后再取相反数。比如5%3=2；-5%3=-2，而实际上应该为1
    }else{
      showNo=showNo+1;
    }
    showNo=showNo%(images.length);
    for(var i=0;i<images.length;i++){
      if(showNo==i){
        images[i].style.display='block';
      }else{
        images[i].style.display='none';
      }
    }
  }
    function cl(){
      document.getElementById('s').style.display='block'
      document.getElementById('aa').style.display='none'
    }
    function c2(){
      document.getElementById('img4').style.display='block'
      document.getElementById('img3').style.display='none'
    }
    function c3(){
      document.getElementById('img4').style.display='none'
      document.getElementById('img3').style.display='block'
    }
    
window.onload=function(){
    var points= document.getElementsByClassName('point');
    var items = document.getElementsByClassName('item');//这个ELement s 就好憨啊
    var goPreBtn = document.getElementById('goPre');
    var goNextBtn = document.getElementById('goNext');
    var index = 0;//第几张图片在展示

    var clearActive = function(){
      for (var i=0 ; i<items.length ; i++) {
        items[i].className = 'item';
        points[i].className='point';
      }
    }

    var goIndex = function(){
      clearActive();
      items[index].className = 'item active';
      points[index].className='point active';
    }

    var goNext = function(){
      if(index<items.length-1){
        index ++;
      }else{
        index=0;
      }
      goIndex();
    }
    var goPre = function(){
      if(index>0){
        index--;
      }else{
        index=items.length-1;
      }
      goIndex();
    }

    goNextBtn.addEventListener('click',function(){goNext();})
    goPreBtn.addEventListener('click',goPre)

    for (var i=0;i<points.length ;i++){
        points[i].addEventListener('click',function(){
        var pointIndex =this.getAttribute('data-index');//获取标签的属性
        index=pointIndex;
        goIndex();

        
      })
    }

}


