// go to header
let GoTop = document.querySelector(`.GoToActive`)
window.onscroll = ()=>{
    (this.window.scrollY>400)? GoTop.style.display=`flex`:GoTop.style.display=`none`
}

GoTop.addEventListener(`click`,()=>{
    window.scrollTo({
        top:0,
        behavior:`smooth`
    })
})

// when click at button menu

let menuBtn=document.querySelector(`.menu`)
let navList=document.querySelector(`.navList`)
let isMenu=false
menuBtn.addEventListener(`click` , ()=>{
    if (isMenu===false) {
        navList.style.display=`flex`
        navList.classList.add(`navBarClick`)
        isMenu=true
    }
    else{
        navList.style.display=`none`
        navList.classList.remove(`navBarClick`)
        isMenu=false
    }
})

// search on click
let searchBtn=document.querySelector(`.search`)
let search=document.querySelector(`.searchContiner`)

searchBtn.addEventListener(`click` , ()=>{
    search.style.display=`flex`;
    navList.style.display=`none`
    navList.classList.remove(`navBarClick`)
    isMenuOnSearch=isMenu
    isMenu=false
    let close = document.querySelector(`.close`)
    close.addEventListener(`click`,()=>{
        search.style.display=`none`;
        if (isMenuOnSearch) {
            navList.style.display=`flex`
            navList.classList.add(`navBarClick`)
            isMenu=true
        }
    })
})

section2=document.querySelector(`.section2`)
let header=document.querySelector(`header`)
let listChang=[]
listChang.push(document.querySelectorAll(`.navList>li>a`))
listChang.push(document.querySelectorAll(`.navList>li>a>i`))
listChang.push(document.querySelector(`.title`))
listChang.push(menuBtn)
listChang.push(searchBtn)

window.addEventListener(`scroll` , ()=>{
    if (section2.getBoundingClientRect().top < 0) {
        header.classList.add(`headerOnScroll`)
        listChang.forEach((el)=>{
            if (el.length > 1) {
                el.forEach((element)=>{
                    element.classList.add(`colorOnScroll`)
                })
            }
            else{
                el.classList.add(`colorOnScroll`)
            }
        })
        searchBtn.classList.add(`btncolor`)
        menuBtn.classList.add(`btncolor`)
    }else{
        header.classList.remove(`headerOnScroll`)
        listChang.forEach((el)=>{
            if (el.length > 1) {
                el.forEach((element)=>{
                    element.classList.add(`transitionElement`)
                    element.classList.remove(`colorOnScroll`)
                })
            }
            else{
                el.classList.add(`transitionElement`)
                el.classList.remove(`colorOnScroll`)
            }
        })
        searchBtn.classList.remove(`btncolor`)
        menuBtn.classList.remove(`btncolor`)
    }
    
})

// change first menu 
let butChang=document.querySelector(`.productChang`);
imgIcon=["./images/chiken.png" ,"./images/salade.png","./images/salade.png","./images/cahawa.png","./images/cahawa.png","./images/chiken.png" , "./images/pizza.png","./images/cahawa.png","./images/burger.png"]
imgProduct=["./images/promo-3.png" ,"./images/food-menu-1.png" ,"./images/food-menu-2.png" , "./images/promo-4.png" ,"./images/promo-5.png","./images/food-menu-5.png" , "./images/pizzao.png","./images/promo-3.png","./images/cta-banner.png"]
product=[`Hot Chiken` , "Salad" , "Salad", "chawarma normal" ,"Chawarma Special", "Drumstick" , "Pizza" , "chawarma","Hot Burger"]

let iconImg=document.querySelectorAll(`.imgIcon`)
let productName=document.querySelectorAll(`.productName`)
let productImg=document.querySelectorAll(`.productImg`)
let i=2
butChang.addEventListener(`click`,()=>{
    butChang.style.animation=` R 1s ease`
    if(i>8){i=0}
    j=i
    iconImg.forEach(el=>{
        el.src=imgIcon[j]
        j++
    })
    j=i
    productImg.forEach(el=>{
        el.src=imgProduct[j]
        j++
    })
    j=i
    productName.forEach(el=>{
        el.textContent=product[j]
        j++
    })
    i=j
    setTimeout(()=>{
        butChang.style.animation=` l 1s ease`
    },1000)
})

// delivry move

let delivry=document.querySelector(`.DelivryImg`);
let delivry1move=0
let hight=window.innerWidth
let delivryLeft=delivry.getBoundingClientRect().left
let width=document.documentElement.clientWidth 
let c1=document.documentElement.offsetHeight / 8 * 5
let c2=document.documentElement.offsetHeight / 8 * 6

window.addEventListener(`scroll` , ()=>{
    if(width>300){
        if( window.scrollY >=c1 && window.scrollY<=c2 ){
            if(hight < (hight + delivryLeft )){
                delivry1move++
                delivry.style.transform=`translate(${delivry1move}px , 0)`
                if(width < document.documentElement.scrollWidth){
                    delivry.style.transform=`translate(0)`
                }
            }
        }
    }else{
        width=document.documentElement.scrollWidth;
        if( window.scrollY >=c1 && window.scrollY<=c2 ){
            if(hight < (hight + delivryLeft )){
                delivry1move++
                delivry.style.transform=`translate(${delivry1move}px , 0)`
                if(width !== document.documentElement.scrollWidth){
                    delivry.style.transform=`translate(0)`
                }
            }
        }
    }
})

let s1=document.documentElement.offsetHeight / 8 * 6.2
let s2=document.documentElement.offsetHeight / 8 * 7.2 
let delivry2=document.querySelector(`.delivry2`);
let delivry2move=0

window.addEventListener(`scroll` , ()=>{
    if(width>300){
        if( window.scrollY >=s1 && window.scrollY<=s2  ){
            if(hight < (hight + delivryLeft )){
                delivry2move=5+delivry2move
                delivry2.style.transform=`translate(${delivry2move}px , 0)`
                if(width < document.documentElement.scrollWidth){
                    delivry2.style.transform=`translate(0)`
                }
            }
        }
    }else{
        if( window.scrollY >=s1 && window.scrollY<=s2 ){
            console.log(`step1`);
            if(hight < (hight + delivryLeft )){
                delivry2move=5+delivry2move
                delivry2.style.transform=`translate(${delivry2move}px , 0)`
                if(width < document.documentElement.scrollWidth){
                    delivry2.style.transform=`translate(0)`
                }
            }
        }
    }
})

// order on click

orderBTN=document.querySelectorAll(`.orderBTN`)
bokBTN=document.querySelector(`.bokBTN`)
orderBTN.forEach((element)=>{
    element.addEventListener((`click`) , ()=>{
        window.scrollTo({
            top:document.documentElement.scrollHeight,
            behavior:`smooth`
        })
    })
})

