let ans = '年龄';
let getAge = '';
function clear(it){
    clearInterval(it);
}
Vue.directive('birthday', {
    bind: function(el, binding){
        //获取出生日期
        let bir = binding.value;
        let come = 0;
        if(bir){
            let date = bir.split('-');
            let year = parseInt(date[0]);
            let month = parseInt(date[1]);
            let day = parseInt(date[2]);
            let dt = new Date();
            dt.setFullYear(year);
            dt.setMonth(month);
            dt.setDate(day);
            dt.setHours(0);
            dt.setMinutes(0);
            dt.setSeconds(0);
            dt.setMilliseconds(0);
            come = dt.getTime();
            let dir = new Date().getTime() - come;
            dir /= 1000; //dir是相差的秒数
            if(Math.floor(dir / (3600 * 24)) <= 0){
                ans = "出生不足一天";
            }else if(Math.floor(dir / (3600 * 24) ) < 30){
                ans = "出生" + Math.floor(dir / (3600 * 24)) + '天';
            }else if(Math.floor(dir / (3600 * 24) / 30) < 12){
                ans = "出生" + (Math.floor(dir / (3600 * 24) / 30)) + '个月 ';
                if(Math.floor(dir / (24 * 3600)) -  Math.floor(dir / (3600 * 24) / 30) * 30 < 10){
                    ans = ans + "零" + (Math.floor(dir / (24 * 3600)) -  Math.floor(dir / (3600 * 24) / 30) * 30) + "天"
                }else ans = ans + ' ' + (Math.floor(dir / (24 * 3600)) -  Math.floor(dir / (3600 * 24) / 30) * 30 )+ "天"
            }else {
                ans = Math.floor(dir / (3600 * 24) / 30 / 12) + '岁 ';
                if(Math.floor(dir / (24 * 3600) / 30) - Math.floor(dir / (3600 * 24) / 30 / 12)){
                    ans = ans + ' ' + (Math.floor(dir / (24 * 3600) / 30) - 12 * Math.floor(dir / (3600 * 24) / 30 / 12)) + '个月';
                }
                if(Math.floor(dir / (24 * 3600)) - 30 * Math.floor(dir / (24 * 3600) / 30)){
                    ans = ans + ' ' + (Math.floor(dir / (24 * 3600)) - 30 * Math.floor(dir / (24 * 3600) / 30)) + '天';
                }
            }
        }else {
            el.innerHTML = "正在计算你的年龄...";
            //el.innerHTML = ans;
            getAge = setInterval(function(){
                if(ans){
                    el.innerHTML = '年龄: ' + ans;
                    clear(getAge); //在计算出结果后把定时器清除掉
                }
             }, 100);
        }
    }
});
