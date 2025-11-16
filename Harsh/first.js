// const h1=document.querySelector('h1');

// h1.addEventListener('click',()=>{
//      console.log("ram ram");
//      h1.style.backgroundColor="cadetblue";
// h1.innerHTML="ram";
// h1.style.color="red";     
// })

var arr=[
     {
 Name:"CSK",
 color:"red",
 Trophy:"4",
 bg:"red",
     },
      {
 Name:"RCB",
 color:"blue",
 Trophy:"1",
 bg:"purple",
     },
      {
 Name:"MI",
 color:"yellow",
 Trophy:"7",
 bg:"black",
     },
      {
 Name:"PNB",
 color:"pink",
 Trophy:"0",
 bg:"red",
     },
      {
 Name:"SRH",
 color:"Orange",
 Trophy:"1",
 bg:"blue",
     },
      {
 Name:"RJ",
 color:"pink",
 Trophy:"0",
 bg:"black",
     },
]
const a=document.querySelector('button');
const b=document.querySelector('#box');
const main=document.querySelector('.main');
console.log(main);
a.addEventListener('click',()=>
{
     var winner=arr[Math.floor(Math.random()*arr.length)];     
     b.style.backgroundColor=winner.color;
     b.innerHTML=winner.Name;
     main.style.backgroundColor=winner.bg;
//    var r=Math.floor(Math.random()*256);
//    var g=Math.floor(Math.random()*256);
//    var c=Math.floor(Math.random()*256);
//    b.style.backgroundColor=`rgc(${r},${g},${c})`;
// b.innerHTML=`rgc(${r},${g},${c})`;
})
