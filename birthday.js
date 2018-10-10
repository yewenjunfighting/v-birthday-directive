Vue.directive('birthday', {
    bind: function(el, binding){
        let ps = document.querySelector('#ld');
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
                ps.innerHTML = "出生不足一天";
            }else if(Math.floor(dir / (3600 * 24) ) < 30){
                ps.innerHTML = "出生" + Math.floor(dir / (3600 * 24)) + '天';
            }else if(Math.floor(dir / (3600 * 24) / 30) < 12){
                ps.innerHTML = "出生" + (Math.floor(dir / (3600 * 24) / 30)) + '个月 ';
                if(Math.floor(dir / (24 * 3600)) -  Math.floor(dir / (3600 * 24) / 30) * 30 < 10){
                    ps.innerHTML = ps.innerHTML + "零" + (Math.floor(dir / (24 * 3600)) -  Math.floor(dir / (3600 * 24) / 30) * 30) + "天"
                }else ps.innerHTML = ps.innerHTML + ' ' + (Math.floor(dir / (24 * 3600)) -  Math.floor(dir / (3600 * 24) / 30) * 30 )+ "天"
            }else {
                ps.innerHTML = Math.floor(dir / (3600 * 24) / 30 / 12) + '岁 ';
                if(Math.floor(dir / (24 * 3600) / 30) - Math.floor(dir / (3600 * 24) / 30 / 12)){
                    ps.innerHTML = ps.innerHTML + ' ' + (Math.floor(dir / (24 * 3600) / 30) - 12 * Math.floor(dir / (3600 * 24) / 30 / 12)) + '个月';
                }
                if(Math.floor(dir / (24 * 3600)) - 30 * Math.floor(dir / (24 * 3600) / 30)){
                    ps.innerHTML = ps.innerHTML + ' ' + (Math.floor(dir / (24 * 3600)) - 30 * Math.floor(dir / (24 * 3600) / 30)) + '天';
                }
            }
            console.log(ps);
            ps.innerHTML = '叶文俊';
        }
    }
});