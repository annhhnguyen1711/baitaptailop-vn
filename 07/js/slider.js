$('.slider').each(function(){                           //For every slider
    var $this=$(this);                                  //Current slider
    var $group=$this.find('.slider-group');             //Get the slide-group (container)
    var $slides=$this.find('.slide');                   //Creat jQuery object to hold navigation buttons 
    var buttonsArray = [];                              //Creat arry to hold navigation buttons 
    var currentIndex = 0;                               //Hold index number of the current slide
    var timeout;                                        //Sets gap bettwen auto-sliding

    function move(newIndex){                            //Creates the slide from old to new one
        var animateLeft, slideLeft;                     //Declare variables

        advance();                                      //When slide moves, call advance() again 
    
        //If it is the current slide / animating to nothing 
        if  ($group.is(':animated') || currentIndex === newIndex){
            return;
        }

        buttonsArray[currentIndex].removeClass('active ')           //Remove class from item
        buttonsArray[newIndex].addClass('active');                  //Add class to new item

        if(newIndex>currentIndex){                                  //If new item > current 
            slideLeft ='100%';                                      //Sit the new slide to the right
            animateLeft = '-100%';                                   //Animate the current group to the left
        }else{                                                      //Otherwise
            slideLeft = '-100%';                                    //Sit the new slide to the left
            animateLeft = '100%';                                   //Animate the current group to the right
        }
        //Postion new slide to left (if less) or right (if more) of current
        $slides.eq(newIndex).css( {left: slideLeft,displat:'block'});       

        $group.animate( {left:animateLeft},function(){          //Animate slides and
            $slides.eq(currentIndex).css

        });
    }
});