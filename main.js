/**
 * Created by newuser on 2017/6/2.
 */
window.onload = function () {

    var nav = document.getElementById('biliNav');

    var bili = document.getElementsByClassName('bili');

    var lis = nav.getElementsByTagName('li');


    //思路
    // 给window绑定事件 scroll
    // 1.根据滚动获取滚动过的距离
    // 2.根据滚动过的距离，和每一个楼层之间距离顶部距离进行比较
    // 3.高亮导航条对应楼层的li元素

    //定义一个数组存放页面滚到那个位置与导航条进行对应显示的数组
    var offsetArr = [];
    for (var i = 0; i <= bili.length; i++) {
        if(i == 0){
           offsetArr.push(bili[i].offsetTop);
        }else {
            var num = bili[i-1].offsetTop +(bili[i - 1].offsetHeight * 2 / 3)
            offsetArr.push(num);
        }
    }
   //console.log(offsetArr);

    //给window绑定事件 scroll
    window.onscroll = function () {
        // 根据滚动获取滚动过的距离
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        // 根据滚动过的距离，和每一个楼层之间距离顶部距离进行比较

        for (var i = 1; i < offsetArr.length; i++) {
            lis[i-1].firstElementChild.className='';

            if(scrollTop < offsetArr[i] && scrollTop >= offsetArr[i - 1] ){
            lis[i-1].firstElementChild.className='active';
            }
        }

    }

    for (var i = 0;i < lis.length; i++){
        lis[i].index = i;
        lis[i].onclick = function () {
            // console.log(this.className)
            var top = 0;
            if(!this.className){ //返回顶部
                top = bili[this.index].offsetTop
                //当前元素高亮
                for(var j = 0;j < lis.length - 1; j++){
                    var span = lis[j].firstElementChild;
                    span.className = j == this.index ? 'active': ''
                }

            }
            document.documentElement.scrollTop = top;
            document.body.scrollTop = top;
        }
    }

}
