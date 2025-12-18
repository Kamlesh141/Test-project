addEventListener("mousemove",(e)=>{
console.log(e.clientX);
console.log(e.clientY);
document.body.style.setProperty("--x",e.clientX+'px');
document.body.style.setProperty("--y",e.clientY+'px');
     })

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


     const zx=document.querySelector(".yy");
     const jk=document.querySelector(".kk");
zx.addEventListener('click',()=>{
     var dvv=document.createElement('div');
     var x=Math.random()*90;
     var y=Math.random()*90;
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
const outer=document.querySelector('.outer');
const inner=document.querySelector('.inner');
const click=document.querySelector('.click');
let g=0;
click.addEventListener('click',()=>{
    click.style.pointerEvents = 'none';
    let num=Math.floor(Math.random() *100)+50;
    var stop=setInterval(() => {
         g++;
         inner.innerHTML=g+'%'
         outer.style.width=g+'%'
         console.log(g)
     },num);
     setTimeout(() => {
          clearInterval(stop);
          click.style.opacity='0.5';
          console.log("second"+num/100);
   },num*100);
    console.log(num);

})