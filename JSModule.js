var jsModule=function (vip) {
    //声明私有成员
    var Yvip="";
    //全局
    Yq="12312312"
    return {
        add:function (t) {
            if(t>12){
                var YV=t;
                Yvip="年"+YV+Yq
            }else {
                var Mt=t;
                Yvip="月"+Mt+Yq
            }

        }
    }
}

var js=new jsModule("vip");
js.add(12)

//js.Yq 不存在
