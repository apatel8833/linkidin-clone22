var arr = [
    {Image:"img1.jpg",img1:"prof.jpg",img2:"pr1.jpg",name1:"Gourav sing",name2:"Abhinav thakur",edu:"B.Tech at LNCT, Bhopal | PYTHON | HTML5 | CSS | DATA SCIENCE | HACKER RANK 5 ⭐IN PYTHON",time:"51H",discription:"Everybody has a dream to work at Microsoft and meet one of the worlds biggest entrepreneurs, Bill Gates, the Founder of Microsoft."},
    {Image:"img2.jpg",img1:"prof1.jpg",img2:"pr2.jpg",name1:"Anubhuti shah",name2:"Priyancy sahu",edu:"Graduate Engineer Trainee - JSW Steel, Dolvi | Marketing & Managem",time:"2W",discription:"Everyone has their own share of problems. Even I have mine. Do read the entire story if you wish to!"},
    {Image:"img3.jpg",img1:"prof3.jpg",img2:"pr3.jpg",name1:"Darshan Rawal",name2:"Viren Vishvakarma",edu:"Msc. Business Analytics and Decision Science | University of Leeds, 22 ",time:"3W",discription:"After almost two years working at Capgemini, its finally time to bid farewell to such a wonderful organization and to team members who were famil"},
    {Image:"https://media-exp1.licdn.com/dms/image/C4E22AQFBXJ55DYKc0g/feedshare-shrink_800/0/1661595665875?e=1664409600&v=beta&t=4UPjLwxDVmg6GYVng9-UCMSA9XqD5DQV5k_FMC2G5JI",img1:"prof4.jpg",img2:"pr4.jpg",name1:"Adil aazmi",name2:"Prakash Dashore",edu:"Salesforce Certified Administrator||Project Engineer (TURBO) at Wipro",time:"24H",discription:"I am so happy to share my very first certification with Salesforce. I am now a Salesforce certified administrator. I am really grateful to Wipro for givi"},
    {Image:"https://media-exp1.licdn.com/dms/image/C4D22AQHDU4eZY71cEg/feedshare-shrink_800/0/1661542289204?e=1664409600&v=beta&t=ZpuaaDs-SOPC7pznAXSRKcRTxvKdF4kkk_F4maoFanI",img1:"prof5.jpg",img2:"pr5.jpg",name1:"Anubhav sing",name2:"Satyam Patel",edu:"Graduate Engineer Trainee - JSW Steel, Dolvi | Marketing & Managem",time:"5W",discription:"Nagarro facilitates Work From Anywhere but sometimes office meets are wonderful. These pictures say it all :)"},
    {Image:"https://media-exp1.licdn.com/dms/image/C5622AQHtQ-It8YZ7NA/feedshare-shrink_800/0/1661526496067?e=1664409600&v=beta&t=naVtaGTx26pGOcKsS0t1FF-tmz1sJX79FJ5vJKYpOpM",img1:"prof6.jpg",img2:"pr6.jpg",name1:"Ravindra Thakur",name2:"Atul patel",edu:"| Front-end Developer || Java || Working on my skills to achieve my dr",time:"12H",discription:"CGI Mega Virtual Off Campus Recruitment 2022 : Hiring for Freshers With 3.7 LPA Salary"},
    {Image:"https://media-exp1.licdn.com/dms/image/C4E22AQFBXJ55DYKc0g/feedshare-shrink_800/0/1661595665875?e=1664409600&v=beta&t=4UPjLwxDVmg6GYVng9-UCMSA9XqD5DQV5k_FMC2G5JI",img1:"prof4.jpg",img2:"pr4.jpg",name1:"Adil aazmi",name2:"Prakash Dashore",edu:"Salesforce Certified Administrator||Project Engineer (TURBO) at Wipro",time:"24H",discription:"I am so happy to share my very first certification with Salesforce. I am now a Salesforce certified administrator. I am really grateful to Wipro for givi"},
    {Image:"https://media-exp1.licdn.com/dms/image/C4D22AQHDU4eZY71cEg/feedshare-shrink_800/0/1661542289204?e=1664409600&v=beta&t=ZpuaaDs-SOPC7pznAXSRKcRTxvKdF4kkk_F4maoFanI",img1:"prof5.jpg",img2:"pr5.jpg",name1:"Anubhav sing",name2:"Satyam Patel",edu:"Graduate Engineer Trainee - JSW Steel, Dolvi | Marketing & Managem",time:"5W",discription:"Nagarro facilitates Work From Anywhere but sometimes office meets are wonderful. These pictures say it all :)"},
    {Image:"img1.jpg",img1:"prof.jpg",img2:"pr1.jpg",name1:"Gourav sing",name2:"Abhinav thakur",edu:"B.Tech at LNCT, Bhopal | PYTHON | HTML5 | CSS | DATA SCIENCE | HACKER RANK 5 ⭐IN PYTHON",time:"51H",discription:"Everybody has a dream to work at Microsoft and meet one of the worlds biggest entrepreneurs, Bill Gates, the Founder of Microsoft."},




]


var ulTag = document.querySelector(".bar2>ul")

for (let i = 0; i < arr.length; i++) {
    let liTag = ` <li>
                    <div class="post">
                        <i class=" more ri-more-line"></i>
                        <div class="like">
                            <img src="${arr[i].img1}" alt="" class="img6">
                            <div class="nam">${arr[i].name1}</div>
                            <div class="like_this">likes this</div>
                        </div>
                        <div class="line4"></div>
                        <img src="${arr[i].img2}" alt="" class="img7">
                        <div class="detail">
                        <div class="name">${arr[i].name2}. 2nd</div>
                            <div class="st">${arr[i].edu}</div>
                            <div class="time">${arr[i].time}. </div>
                        </div>
                        <div class="discr">${arr[i].discription}</div>
                        <img src="${arr[i].Image}" alt="" class="img8">
                        <div class="likes">
                            <img src="like.svg" alt="" class="img9">
                            <img src="heart.svg" alt="" class="img9">
                            <img src="laugh.svg" alt="" class="img9">
                            <img src="light.svg" alt="" class="img9">

                        </div>
                        <div class="line5"></div>
                        <div class="lk">
                            <i class="ri-thumb-up-line"></i>
                            <h5>Like</h5>
                        </div>
                        <div class="com">
                            <i class="ri-message-2-line"></i>
                            <h5>Comment</h5>
                        </div>
                        <div class="share">
                            <i class="ri-share-forward-line"></i>
                            <h5>Share</h5>

                        </div>
                        <div class="send">
                            <i class="ri-send-plane-fill"></i>
                            <h5>send</h5>
                        </div>
                    </div>
                    <div class="like_overlay">
                    <img src="like.svg" alt="" class="img10">
                    <img src="heart.svg" alt="" class="img10">
                    <img src="laugh.svg" alt="" class="img10">
                    <img src="clap.svg" alt="" class="img10">
                    <img src="hand_heart.svg" alt="" class="img10">
                    <img src="light.svg" alt="" class="img10">
                    <img src="curious.svg" alt="" class="img10">
                    </div>
                </li>`
ulTag.insertAdjacentHTML("beforeend",liTag)
    
}



function like(){
    document.querySelector(".lk").addEventListener("mouseover",function(){
        document.querySelector(".like_overlay").style.display = "initial"
    })
    document.querySelector(".like_overlay").addEventListener("mouseover",function(){
        document.querySelector(".like_overlay").style.display = "initial"
    })
    document.querySelector(".like_overlay").addEventListener("mouseout",function(){
        document.querySelector(".like_overlay").style.display = "none"
    })

}
like()

var flag = 0;


document.querySelector(".au").addEventListener("click",function(){
    if (flag===0) {
        gsap.to(".messaging",{
            y:"-90%",
            duration:.2,
            
        })
        document.querySelector(".au").style.display="none"
        document.querySelector(".ad").style.display="initial"
        flag = 1
        
    }
    else{
        gsap.to(".messaging",{
            y:"0%",
            duration:.2,
            
        })
        document.querySelector(".au").style.display="initial"
        document.querySelector(".ad").style.display="none"
        flag=0
    }

    
})


        document.querySelector(".ad").addEventListener("click",function(){
            gsap.to(".messaging",{
                y:"0%",
                duration:.2,
                
            })
            document.querySelector(".au").style.display="initial"
            document.querySelector(".ad").style.display="none"
        })



document.querySelector(".show_more").addEventListener("click",function(){
    if (flag===0) {
        gsap.to("#right",{
            height:"88%"
        })
        document.querySelector(".show_less").style.opacity = "1"
        document.querySelector(".show_more").style.opacity = "0"
        document.querySelector(".show_less").style.zIndex = "99"
    
        gsap.to(".newss2",{
            opacity:1
        })
        flag=1;
        
    }
    else{
        gsap.to("#right",{
            height:"60%"
        })
        document.querySelector(".show_less").style.opacity = "0"
        document.querySelector(".show_more").style.opacity = "1"
    
        
        gsap.to(".newss2",{
            opacity:0
        })
        flag = 0;

    }
})
document.querySelector(".show_less").addEventListener("click",function(){
    gsap.to("#right",{
        height:"60%"
    })
    document.querySelector(".show_less").style.opacity = "0"
    document.querySelector(".show_more").style.opacity = "1"

    
    gsap.to(".newss2",{
        opacity:0
    })
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


