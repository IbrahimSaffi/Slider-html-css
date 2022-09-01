let btn = document.querySelector(".btn")
let filledBar = document.querySelector(".filledBar")
let bar = document.querySelector(".bar")
let val = document.querySelector(".val")

btn.addEventListener("drag",(e)=>{
  const width = bar.getBoundingClientRect().left;
  const x = e.clientX - width
  if(x>=0&&x<=width){
      btn.style.left = `${x}px`
      filledBar.style.width = `${x}px`
      val.textContent=`Value: ${Math.ceil(x/width*100)}`
  }
})



