$(Document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });


    //toogle menu bar /nav bar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

}); 
// typing animate script////
    var typed = new Typed(".typing ",{
        strings: ["Programmer" , "Web Designer" , "Logo Designer" , "Tutor" , "Coder"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
// typing animate script
var typed = new Typed(".typing2 ",{
    strings: ["Programmer" , "Web Designer" , "Logo Designer" , "Tutor"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});