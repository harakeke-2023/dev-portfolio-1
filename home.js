document.addEventListener('scroll', function() {
    const scrollValue = window.scrollY;
    const windowHeight = window.outerHeight;

    const second = document.querySelector(".second");
    const secondOffsetTop = second.offsetTop;
    const secondHeight = second.offsetHeight;  
   
    if (scrollValue > secondOffsetTop + secondHeight - windowHeight) {
        
        setTimeout(function(){
            second.classList.add("active");
        }, 100);
    }
            
    const third = document.querySelector(".third");
    const thirdOffsetTop = third.offsetTop;
    const thirdHeight = third.offsetHeight;
        
        
    if (scrollValue > thirdOffsetTop + thirdHeight - windowHeight) {
                
        setTimeout(function(){
            third.classList.add("active");
        }, 100);
    }
            
    const fourth = document.querySelector(".fourth");
    const fourthOffsetTop = fourth.offsetTop;
    const fourthHeight = fourth.offsetHeight;
        
    if (scrollValue > fourthOffsetTop + fourthHeight - windowHeight) {
    
        setTimeout(function(){
            fourth.classList.add("active");
        }, 100);
    }

})


