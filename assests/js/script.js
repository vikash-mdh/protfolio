$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY > 60){
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // Scroll spy
        // $('section').each(function(){
        //     let height = $(this).height();
        //     let offset = $(this).offset().top - 200;
        //     let top = $(window).scrollTop();
        //     let id = $(this).attr('id');

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // Smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },500, 'linear');
    });

    // Change document title and favicon on visibility change
    document.addEventListener('visibilitychange', function(){
        if(document.visibilityState === "visible"){
            document.title = "Portfolio | Vikash Kumar Yadav";
            $("#favicon").attr("href","assets/images/favicon.png");
        } else {
            document.title = "Come Back To Portfolio";
        }
    });

    // Initialize Typed.js effect
    var typed = new Typed(".typing-text", {
        strings: ["Software Development", "DSA", "JAVA Development", "Tech Communities"],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
    });

    // Initialize VanillaTilt.js effect
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });

    // Initialize Tawk.to Live Chat
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/60f70460649e0a0a5ccd22a7/1fb2ei71o';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
    })();

    // Handle form submission using EmailJS
    $("#contact-form").submit(function (event) {
        event.preventDefault();
        emailjs.init("tKcnAF73jMw0tRWFB");
        emailjs.sendForm('service_sxhkdba', 'template_9fbmhxi', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
    });

    // Fetch and display data
    async function fetchData(type = "skills") {
        let response;
        type === "skills" ?
            response = await fetch("skills.json")
            :
            response = await fetch("./projects/projects.json");
        const data = await response.json();
        return data;
    }

    function showSkills(skills) {
        let skillsContainer = document.getElementById("skillsContainer");
        let skillHTML = "";
        skills.forEach(skill => {
            skillHTML += `
            <div class="bar">
                <div class="info">
                    <img src=${skill.icon} alt="skill" />
                    <span>${skill.name}</span>
                </div>
            </div>`;
        });
        skillsContainer.innerHTML = skillHTML;
    }

    fetchData().then(data => {
        showSkills(data);
    });

    // Initialize ScrollReveal animations
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    // Add ScrollReveal animations
    srtop.reveal('.home .content h3', {delay: 200}); 
    srtop.reveal('.home .content p', {delay: 200}); 
    srtop.reveal('.home .content .btn', {delay: 200}); 
    srtop.reveal('.home .image', {delay: 400}); 
    srtop.reveal('.home .linkedin', {interval: 600}); 
    srtop.reveal('.home .github', {interval: 800}); 

    srtop.reveal('.about .content h3', {delay: 300});
    srtop.reveal('.about .content .tag1', {delay: 400}); 
    srtop.reveal('.about .content p', {delay: 300}); 
    srtop.reveal('.about .content .box-container1', {delay: 300}); 
    srtop.reveal('.about .content .resumebtn', {delay: 300}); 

    srtop.reveal('.education .box', {interval: 200}); 

    srtop.reveal('.work .box', {interval: 200}); 

    srtop.reveal('.experience .timeline', {delay: 400});
    srtop.reveal('.experience .timeline .container', {interval: 400}); 

    srtop.reveal('.contact .container', {delay: 400});
    srtop.reveal('.contact .container .form-group', {delay: 400});

    // Toggle header visibility on logo click
    let flag = 0;
    var menu_logo = document.querySelector("#menu_logo");
    menu_logo.addEventListener("click",function(){
        if (flag === 0) {
            document.querySelector("header").style.top = "0%";
            menu_logo.style.zIndex = "1001";
            flag = 1;
        } else {
            document.querySelector("header").style.top = "-20%";
            menu_logo.style.zIndex = "1001";
            flag = 0;
        }
    });

    document.querySelector("header").addEventListener("click",function(){
        if(flag==0){
            document.querySelector("header").style.top = "0%";
        } else {
            document.querySelector("header").style.top = "-20%";
        }
    });

    if (flag==0) {
        gsap.to("header", {
            scrollTrigger: {
                trigger: "#home",
                start: "0% 0%",
                end: "10% 0%",
                scrub: 1
            },
            top:"-20%",
        });
        flag = 1;
    } else {
        gsap.to("header", {
            scrollTrigger: {
                trigger: "#home",
                start: "0% 0%",
                end: "10% 0%",
                scrub: 1
            },
            top:"-20%",
        });        
        flag = 0;
    }
// });
