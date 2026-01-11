function topnavpar(){
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const closeBtn = document.getElementById("closeBtn");

menuBtn.onclick = () => {
     sideMenu.style.right = "0";
     // sideMenu.style.display='block'
};

closeBtn.onclick = () => {
     sideMenu.style.right = "800%";
     // sideMenu.style.display='none'

};


}
topnavpar();

addEventListener("mousemove",(e)=>{
     console.log(e.clientX);
     console.log(e.clientY);
document.body.style.setProperty("--x",e.clientX+'px');
document.body.style.setProperty("--y",e.clientY+'px');
     })
     function Qrpaper(){
const imp = document.querySelector("#inpu");
          const b = document.querySelector("#btn");
          const c = document.querySelector("#io");
          b.addEventListener("click", () => {
               let f = imp.value.trim();
               if (!f) {
                    alert("Please enter a value!");
                    return;
               }
               c.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${f}`;
               c.alt = `QR code for ${f}`;
               });

     }
     Qrpaper()
function colorpaper(){
  var arr=[
     {
 Name:"CSK",
 color:"yellow",
 Trophy:"4",
 bg:"pink",
     },
      {
 Name:"RCB",
 color:"red",
 Trophy:"1",
 bg:"blue",
     },
      {
 Name:"MI",
 color:"blue",
 Trophy:"7",
 bg:"pink",
     },
      {
 Name:"PNB",
 color:"red",
 Trophy:"0",
 bg:"tomato",
     },
      {
 Name:"SRH",
 color:"Orange",
 Trophy:"1",
 bg:"skyblue",
     },
      {
 Name:"RJ",
 color:"pink",
 Trophy:"0",
 bg:"cadetblue",
     },
]
const a=document.querySelector('#bbtt');
const yu=document.querySelector('.box');
const nav=document.querySelector('nav');
console.log(nav);

a.addEventListener('click',()=>
{
     var winner=arr[Math.floor(Math.random()*arr.length)];     
     yu.style.backgroundColor=winner.color;
     yu.innerHTML=winner.Name;
     nav.style.backgroundColor=winner.bg;
})
}
colorpaper();
             
function boxpaper(){
 const zx=document.querySelector(".yy");
     const jk=document.querySelector(".kk");
zx.addEventListener('click',()=>{
     var dvv=document.createElement('div');
     var x=Math.random()*80;
     var y=Math.random()*80;
     var t1=Math.floor(Math.random()*265);
     var t2=Math.floor(Math.random()*265);
     var t3=Math.floor(Math.random()*265);
     dvv.style.width='50px';
     dvv.style.height='50px';
     dvv.style.left=x+'%';
     dvv.style.top=y+'%';
     dvv.style.rotate=y+'deg';
     dvv.style.position='absolute';
     dvv.style.backgroundColor = `rgb(${t1}, ${t2}, ${t3})`;
     dvv.style.zIndex='8'
     jk.appendChild(dvv);
})
}
boxpaper()

function download(){
const outer=document.querySelector('.outer');
const inner=document.querySelector('.inner');
const click=document.querySelector('.click');
console.log(outer,inner,click);
let c=0
click.addEventListener('click',()=>{
     click.style.pointerEvents='none'
     var stop=setInterval(()=>{
          outer.style.width=c+'%';
          c++;
          inner.innerHTML=c+'%';
          if(c<=20)
               {
                    inner.style.color='red';
               outer.style.backgroundColor='red';
               outer.border='white';
          }
         else if(c<=80){
                    inner.style.color='black';
               outer.border='white';

               outer.style.backgroundColor='white';

          }
          else if(c<=99){
               outer.border='white';
                    inner.style.color='green';
               outer.style.backgroundColor='green';
               click.innerHTML='Full Charge'
               click.style.color='green'

          }
     },50)
     setTimeout(()=>{
          clearInterval(stop);
          // inner.innerHTML=c+'%';
          // click.disabled=true;
     },5000)
})
}
download();
    
