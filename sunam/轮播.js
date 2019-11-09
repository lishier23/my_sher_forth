window.onload=function(){
    var imgList=document.getElementById("imgList");
    var imgArr=document.getElementsByTagName("img");
    imgList.style.width=552*imgArr.length+"px";

    var navDiv=document.getElementById("navDiv");
    var outer=document.getElementById("outer");
    navDiv.style.left=(outer.offsetWidth-navDiv.offsetWidth)/2+"px";

    var index=0;
    var a=document.getElementsByTagName("a");
    a[index].style.backgroundColor="#696969";

    for(var i = 0;i < a.length; i++) {
        a[i].number = i;
        a[i].onclick=function(){
            clearInterval(timer);
            index = this.number;
            //imgList.style.left = -552 * index + "px";
            move(imgList , "left" , -552 * index , 20, function(){
                autoChange();
            })
            setA();
        };
    }

    autoChange();

    function setA(){
        if(index >=imgArr.length - 1){
            index = 0;
            imgList.style.left = 0;
        }
        for(var i = 0; i < a.length; i++) {
            a[i].style.backgroundColor="";
        }
        a[index].style.backgroundColor="#696969";
    };

    var timer;

    function autoChange(){
        timer = setInterval(function(){
            index++;
            move(imgList, "left", -552 * index, 20, function(){
                setA();
            })
        },3000);
    }
}
