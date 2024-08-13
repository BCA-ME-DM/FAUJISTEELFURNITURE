var more = document.querySelector("#menuopen")
var cross = document.querySelector(".logo")
var sear = document.querySelector(".searchbar")
var hom = document.querySelector("#menu")
var moreb = document.querySelector(".aftheader")

var tl = gsap.timeline()

tl.to("#menu",{
    right:"0",
    duration:0.4
})
tl.from("#menu h1",{
    y:30,
    x:100,
    duration:0.2,
    stagger:0.1,
    opacity:0,
    scrub:2
})
tl.pause()

more.addEventListener("click",function(){
    tl.play()
})
moreb.addEventListener("click",function(){
    tl.play()
})

cross.addEventListener("click",function(){
    tl.reverse()
})
sear.addEventListener("click",function(){
    tl.reverse()
})
hom.addEventListener("click",function(){
    tl.reverse()
})

/*use to show more and hide*/

var more = document.querySelector("#more-less")

var tln = gsap.timeline()


tln.from("#dis",{
    display:"none",
    opacity:0,
    scrub:1
})

tln.pause()

more.addEventListener("click",function(){
    tln.play()
})
