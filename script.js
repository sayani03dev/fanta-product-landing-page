var tl=gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"70% 50%",
    scrub:true,
   // markers:true, 
}})

tl.to("#fanta",{
    top:"90%",
    left:"2%",
    width:"37%"
},'orange')

tl.to("#orange-cut",{
    top:"140%",
    rotate:"-170deg",
    left:"2%"
},'orange')

tl.to("#orange",{
    width:"18%",
    top:"160%",
    right:"10%"
},'orange')

tl.to("#leaf",{ 
    top:"105%",
    rotate:"130 deg",
    left:"70%"
},'orange')

tl.to("#leaf2",{ 
    top:"105%",
    rotate:"130 deg",
    left:"0%"
},'orange')

var tl2=gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"70% 50%",
    scrub:true,
   // markers:true, 
}})

tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')

tl2.from("#cocacola",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'ca')

tl2.from(".lemon2",{
    rotate: "90deg",
    left: "110%",
    top: "110%"
}, 'ca')

tl2.from("#pepsi",{
    rotate: "90deg",
    top: "92%",
    left: "100%",
    width:"54%"
}, 'ca')

tl2.to("#orange-cut",{
    width: "auto",
    left: "43%",
    top: "204%"
}, 'ca')

tl2.to("#fanta",{
    width: "26%",
    top: "213%",
    left: "37%"

}, 'ca')












