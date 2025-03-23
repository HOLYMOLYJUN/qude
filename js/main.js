window.onload = function () {
    //01.gnb 애니메이션

    const menuOpen = document.querySelector('.gnb .menuOpen');
    const menuBox = document.querySelector('.gnb .menuBox');

    menuOpen.addEventListener('click', ()=> {
        menuBox.classList.toggle('on');
    })

    //반응형 헤더
    let header = document.querySelector("header");
    let mediaQuery = window.matchMedia("(max-width: 1023px)");

    function handleScroll () {
        if (mediaQuery.matches) {
            if (window.scrollY > 0) {
                header.classList.add('show');
            } else {
                header.classList.remove("show");
            }
        } else {
            header.classList.add('show');
        }

    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 



    gsap .registerPlugin(ScrollTrigger); //gsap 라이브러리 스크롤 트리거 등록

    //01. visual
    gsap.timeline({
        scrollTrigger: {
            trigger : '.visual',
            start: '100% 100%',
            end: '100% 0%',
            scrub: 2, //스크롤할때만 애니메이션
            // markers: true,
        }
    })
    .to('.logoWrap #s', {x: -120, y:250, rotate: 20, ease: 'none', duration: 5}, 0)
    .to('.logoWrap #a', {x: -20, y:150, rotate: -10, ease: 'none', duration: 5}, 0)
    .to('.logoWrap #n', {x: 0, y:400, rotate: -10, ease: 'none', duration: 5}, 0)
    .to('.logoWrap #g', {x: 50, y:300, rotate: 10, ease: 'none', duration: 5}, 0)
    .to('.logoWrap #j', {x: 70, y:100, rotate: -10, ease: 'none', duration: 5}, 0)
    .to('.logoWrap #u', {x: 80, y:200, rotate: 10, ease: 'none', duration: 5}, 0)
    .to('.logoWrap #n', {x: 10, y:450, rotate: 20, ease: 'none', duration: 5}, 0)



    

    //02. 공통적 .mainText .title i
    gsap.utils.toArray('.mainTextBox .title i').forEach((selector) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: "100% 100%",
                end: '100%, 100%',
                scrub: 1,
            }
        })
        .fromTo(selector, {overflow: 'hidden', y: 150}, {y:0, ease:'none', duration: 5}, 0)
    })

    //03. 공통적 .subText p
    gsap.utils.toArray('.subText p').forEach((selector) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: "100% 100%",
                end: "100% 100%",
                scrub: 1,
            }
        })
        .fromTo(selector, {opacity: 0, y: 100}, {opacity: 1, y:0, ease :'none', duration: 5}, 0)
    })

    //04. .con1 textAni 텍스트 체인지 gsap 애니메이션
    let textAniList = document.querySelectorAll('.con1 .textAni li') 
    let textAni = gsap.timeline({repeat: -1})

    for(let i = 0; i < textAniList.length; i++) {
        textAni.to(textAniList[i], 0.8, {opacity: 1, repeat: 1, delay: 0, x:0, yoyo: true, ease: 'power4.out'})
    }
    textAni.play();

    //05. con4 listBox의 스크롤트리거 애니메이션
    gsap.utils.toArray('.con4 .listBox .box').forEach((selector) => {
        gsap.timeline({
            scrollTrigger :{ 
                
                trigger: selector,
                start: "0% 20%",
                end: "0% 0%",
                scrub: 1,
            }
        })
        .to(selector, {transform: 'rotateX(-10deg) scale(0.9)', transformOrigin: 'top', filter: 'brightness(0.3)'}, 0)
    })

    //06. con3 ListBox 카드애니메이션
    gsap.utils.toArray('.con3 .listBox li').forEach((selector, t)=> {
        ScrollTrigger.create({
            trigger: selector,
            start: "20% 60%",
            onEnter: ()=> {
                gsap.set(selector, {
                    rotationX: '-65deg',
                    z: '-500px',
                    opacity: 0,
                } ),
                gsap.to(selector,{
                    rotationX: 0,
                    z: 0,
                    opacity: 1,
                    delay: t % 3 * .05,
                })
            },
        })
    })           

    //07. con5 listBox li hover효과
    let listBox = document.querySelectorAll('.con5 .listBox li');
    let imgBox = document.querySelector('.con5 .imgBox');
    let img = document.querySelector('.con5 .imgBox img');

    for(let i = 0; i< listBox.length ; i++) {
        listBox[i].addEventListener('mouseover', () => {
            img.src = `images/img${i}.jpg`;
            gsap.set(imgBox, {scale: 0, opacity: 0, duration: .3});
            gsap.to(imgBox, {scale: 1, opacity: 1, duration: .3})
        })
        listBox[i].addEventListener('mousemove', (e) => {
            let imgBoxX = e.pageX + 20;
            let imgBoxY = e.pageY - 20;
            imgBox.style.left = imgBoxX + 'px';
            imgBox.style.top = imgBoxY + 'px';
        })
        listBox[i].addEventListener('mouseout', () => {
            gsap.to(imgBox, {scale: 0, opacity: 0, duration: .3})
        })
    }

    gsap.timeline({
        scrollTrigger : {
            trigger: '.con5',
            start: "0% 100%",
            end: '100% 0%',
            toggleClass: {targets:'.wrap', className: 'on'}
        }
    })

    //08. footer영역
    gsap.timeline({
        scrollTrigger: {
            trigger : 'footer',
            start: '0% 100%',
            end: '100% 0%',
            scrub: 1, //스크롤할때만 애니메이션
            // markers: true,
        }
    })
    .to('.logoWrap', {top: '20%', ease: 'none', duration: 5}, 0)

    //09. loading

    let loading = document.querySelector('.loading');
    let rotate = document.querySelectorAll('.rotate');
    let opa = document.querySelectorAll('.opacity');

    setTimeout(() => {
        loading.classList.add('scene1');
    }, 100); // 살짝 여유를 줘서 자연스럽게

    setTimeout(() => {
        loading.classList.add('scene2');
    }, 1600);

    setTimeout(() => {
        loading.style.display = 'none'; // display 속성으로 완전히 숨기기
    }, 2600);

    setTimeout(() => {
        rotate.forEach(rotate => {
            rotate.classList.add('on');
        });
    }, 2600);

    setTimeout(() => {
        opa.forEach(opa => {
            opa.classList.add('on');
        });
    }, 2600);


}