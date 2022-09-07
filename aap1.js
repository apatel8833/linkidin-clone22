gsap.to(".layer",{
     scrollTrigger:{
        scroll:"body",
        trigger:"#left",
        // markers:true,
        start:"top 00%",
        end:"bottom 40%",
        scrub:5
    },
    y:"110%"
})



flag=0;
document.querySelector(".ae").addEventListener("click",function(){
    if(flag===0){

        document.querySelector(".view_pro").style.display="initial"
        flag=1;
    }
    else{
        document.querySelector(".view_pro").style.display="none"
        flag=0;


    }
})








flag =0;
if (flag===0) {

    document.querySelector(".g").addEventListener("click",function(){
        gsap.to("#lay",{
            x:"-120%"
        })
        gsap.to("#layer2",{
            x:"-140%"
        })
    })

       document.querySelector(".close").addEventListener("click",function(){
        gsap.to("#lay",{
            x:"0%"
        })
        gsap.to("#layer2",{
            x:"0%"
        })
    }) 
    
    
    
    flag=1;
}
else{
    document.querySelector(".g").addEventListener("click",function(){
        gsap.to("#lay",{
            x:"0%"
        })
        gsap.to("#layer2",{
            x:"0%"
        })
    })

       document.querySelector(".close").addEventListener("click",function(){
        gsap.to("#lay",{
            x:"120%"
        })
        gsap.to("#layer2",{
            x:"140%"
        })
    }) 
    
    flag = 0;

}





