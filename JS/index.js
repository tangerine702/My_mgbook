// let book_name = document.querySelectorAll('.book_name');
// console.log(book_name);


console.log("   欢迎大家来我的小站,没想到在这里见到我的欢迎词吧哈哈😄,写在这里其实也是无意之间想到的,毕竟放在正文里多多少少会占点空子,这里就不用担心了,要是因为写点欢迎词导致CSS爆炸💥我就直接头发掉光,升天了要，饶了我吧🙏");
console.log("   接下来该介绍下我自己了：大家好，我是tangerine702，其实也可以叫我Kagami。喜欢MIKU,经常在个人网站留点MIKU的痕迹, 同时也写点知识型博客，玩点音游，网易云重度患者，塞子小白，喜欢水月的调音。还是个真·咸鱼🤗");
console.log("   在这个网站里大家可以按分类自行查找需要的漫画，每周更新一次，更新数量不定，因为这里的漫画都是我自己看过的，虽然数量少，但是绝对不会错。至于资源，等日后我统计一下吧🥱");
console.log("   下面是什么地方可以找到我:");
console.log("   %c知乎","color:#FFFFFF;background-color:#3399CC;padding:2px;border-radius:2px;font-weight:800",":ll穗乃果  (tip:是字母ll不是数字11)");
console.log("   %cGithub","background-color:#000000;color:#FFFFFF;padding:3px;border-radius:2px;",":github.com/tangerine702");
// console.log('  %c ', 'font-size: 0;background:url("https://wiki.connect.qq.com/wp-content/uploads/2013/10/03_qq_symbol-1-250x300.png"); no-repeat;')

console.log("   %cQQ","background-color:#177cb0;padding:2px;border-radius:10px;font-weight:800",":188426563");
console.log("   %cWX","background-color:#009966;color:#FFFFFF;padding:2px;border-radius:5px;font-weight:800",":tangerine702 / Kagami_wx");


console.log("   把你%cMIKU MIKU","color:#99CCCC;font-weight:bold","掉,欸嘿~");
// 毕竟咱是老傲娇控了，而小镜堪称完美👍...咳咳

// for(var i = 0; i < book_name.length; i++){
//     console.log(book_name[i].innerHTML);
    
// }



//-----------------------------------------------------------------------------//



let book_li = document.querySelectorAll('.new_time li');
//console.log(book_li);                //获取页面所有li
 




// 按标签筛选
let category_btn = document.querySelectorAll('#iside .btn');//按钮的值
// console.log(category_btn);



category_btn.forEach(btn =>{
    btn.onclick =()=>{
        category_btn.forEach(remove => remove.classList.remove('btn_color'));     //删除默认选择样式，添加鼠标选择标签样式
        let datecategory = btn.getAttribute('date_category');
        book_li.forEach(li=>{
            var bookli = li.getAttribute('date-search');
            var bookli2 = li.getAttribute('date-search2');
            // console.log(bookli);
            // console.log(datecategory);
            // console.log(bookli2);
            if(datecategory =='all'){
                li.style.display = 'flex';
            }else if(datecategory == bookli){
                li.style.display = 'flex';
            }else if(datecategory == bookli2){
                li.style.display = 'flex';
            }else{
                li.style.display = 'none';
            }
        });
        btn.classList.add('btn_color');
    }
})





//-------------------------------自适应切换--------------------------------

let menu_btn = document.querySelector('#menu');
let iside_menu = document.querySelector('#iside');
let iside_user_span = document.querySelector('#user span');
// console.log(menu_btn);
// console.log(iside_menu);

menu_btn.onclick=function(){
    
    if(iside_menu.style.left=="-350px"){
        iside_menu.style.left = "0px";
        iside_menu.style.width = "96px"
        book_li.style = "300px"
        iside_menu.style.position= "fixed";
        iside_menu.style.top="45px";
        iside_menu.style.background = "#ffffff"; 
        iside_user_span.innerText = '';   
    }else{
        iside_menu.style.left="-350px";
    }
}



// if(!window.localStorage.getItem('storge')){
//     alert('欢迎来到我的首页');
//     window.localStorage.setItem('storge','true');
// }

if(!window.sessionStorage.getItem('storge')){
    alert('欢迎来到我的首页');
    window.sessionStorage.setItem('storge','true');
}



//返回顶部
// function pageScroll(){
//     windows.scrollBy(0,-10);
//     scrolldelay = setTimeout('pageScroll()',100);
//     if(document.documentElement.scrollTop==0){clearTimeout(scrolldelay)};
// }

let gotop = document.querySelector('#go_top');

gotop.onclick=function(){
    for(var h=document.documentElement.scrollTop;h>0;h--){
        if(document.documentElement.scrollTop !=0){
            document.documentElement.scrollTop=document.documentElement.scrollTop-10;
            // console.log(document.documentElement.scrollTop);
        }else{
    
        }
    }
}



// -----------------详情页施工中-----------------------------------

book_li.forEach(li =>{
        li.onclick = ()=>{
            window.location.href='https://tangerine702.github.io/My_mgbook/';
            //console.log("点击了li");
        }
})
