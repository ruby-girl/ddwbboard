














let htmll='<div id="appLods" ><div class="version-warp"><div class="version"></div></div></div>';

let htmlDom=document.getElementsByTagName('html')[0];


var bodyy=document.createElement('body');
bodyy.id="loadingApp"
bodyy.innerHTML=htmll

htmlDom.appendChild(bodyy);
NProgress.start()

NProgress.configure({parent:"#appLods"})

let loadNumber=0
let Interval=setInterval(function(){
  let baifenbi=NProgress.status*100
  let number=Math.round(baifenbi)
  document.querySelector('.version').innerHTML=number+'%'
  document.querySelector('.version').style.width=number+'%'
  loadNumber=number;
  let bodys=document.querySelectorAll('body').length;
  if(bodys>1){
    clear()
  }
},500)
function clear(){
  clearInterval(Interval);
  NProgress.done();
  let doc=document.getElementById("loadingApp");
  doc.parentNode.removeChild(doc);
  // pageLoading()
}

let Interval2=null
function pageLoading(){
  let doc=document.getElementById("appLods2");
  if(doc!=undefined){
    document.querySelector('.version').innerHTML=loadNumber+'%'
    document.querySelector('.version').style.width=loadNumber+'%'

    Interval2=setInterval(function(){
      let baifenbi=NProgress.status*100
      let number=Math.round(baifenbi);
      if(number>loadNumber){
        loadNumber=number
      }else{
        loadNumber++
      }
      console.log(loadNumber)
      pageLoading()
    },500)
  }else{
    clearInterval(Interval2);
  }


}
