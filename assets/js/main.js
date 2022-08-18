jQuery(document).ready(function($){
    $(".portfolio-contant").owlCarousel({
        items: 3,
        slideMove:1,
        margin:30,
        dots: false,
        nav: true,
        loop: true,
        animateOut: 'fadeOut',
        autoplay:true,
        autoplayTimeout:5000,
        navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
        responsive:{
        992:{
            items:3
        },
        768:{
            items:3
        },
        0:{
            items:2
        }
    },
    });
    
    $(".blog-content").owlCarousel({
        items: 3,
        slideMove:1,
        dots: false,
        nav: true,
        loop: true,
        animateOut: 'fadeOut',
        autoplay:true,
        autoplayTimeout:5000,
        navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
        responsive:{
        992:{
            items:3
        },
        768:{
            items:2
        },
        0:{
            items:1
        }
    },
    });
    
    $(".about-title").owlCarousel({
        items: 1,
        slideMove:1,
        dots: false,
        nav: true,
        loop: true,
        animateOut: 'fadeOut',
        autoplay:true,
        autoplayTimeout:5000,
        navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>','<i class="fa fa-arrow-right" aria-hidden="true"></i>']
    });
    
        
    $(".navBar").click(function(){
        $(".left-nav").addClass("show");
        $(".navClose").addClass("show");
        $(".navBar").addClass("hide");
    });  

    $(".navClose, .bannerArea").click(function(){
        $(".left-nav").removeClass("show");
        $(".navClose").removeClass("show");
        $(".navBar").removeClass("hide");
    });
    
});