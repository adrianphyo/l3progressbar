const getdownloadbtn = document.querySelector(".download-btn");
const getprogressbar = document.querySelector('.progress-bar');
const seturl = "https://linkedin.com";

getdownloadbtn.addEventListener('click',function(){
    // console.log('hay i am working');

    var setwidth = 0;

    let setinv = setInterval(progressinc,150);

    function progressinc(){

        if(setwidth >= 100){
            setwidth = 0;
            clearInterval(setinv); //function အကြိမ်ကြိမ် invote လုပ်တာကို ရပ်ချင်ရင်သုံး

            // redirect
            window.location.href = seturl; //တခြား website ကိုရောက်သွားစေချင်ရင် window.location.href ကိုသုံး

        }else{
            setwidth++;
            getprogressbar.style.width = `${setwidth}%`;
            getprogressbar.setAttribute('data-inc',`${setwidth}%`);
            getdownloadbtn.setAttribute('disabled',true);
        }

        // console.log(setwidth);

    }
});