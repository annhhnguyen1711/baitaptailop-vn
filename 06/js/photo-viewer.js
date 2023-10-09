var requesr;  //Latest image to be requested
var $current; //Image currently being shown
var cache={}; //Cache object 
var $fame = $('#photo-viewer');//container for image
var $thumb= $('.thumb');//thumbnails

function crossfade($img){//funtiion to flade bettween images 
                            //pass in new image as parameter
    if($current){//If there is currently an image showing
        $current.stop().fadeOut('slow');//Stop any animation & flade it out
    }

    $img.css({          //Set the CSS margins for the image
        marginLeft: -$img.with() / 2, //Negative margin of half image's width
        marginTop: -$img.height() / 2//Negative margin of hafl image's height
    });

    $img.stop().fladeTo('slow',1);//Stop animation on new image & fade in

    $current=$img;//New image becomes currnent image

}

$(document).on('click','thumb',function(e){ //When a thumb is clicked on
    var $img,                               //Create local variable called $img
        scr=this.herf;                      //Store path  to image 
        Request=scr;                        //Store latest image request 

        e.preventDefault();                 //Stop default link behaviior

        $thumb.removeClass('active');       //Remove active from all thumbs
        $(this).addClass('active');         //Add active to clicked thumb

        if(cache.hasOwnProperty(scr)){         //If cache contains this image
            if(cache[scr].isLoadig === false){ //And if is loading is false
                crossfade(cache[scr].$img);     //Call crossfade()funtion
            }
        }else{                                   //Otherwise it is not in cache
         $img = $('<img/>');                     //Store empty <img/> element in $img
         cache[scr] = {                          //Store this image in cache
            $img: $img,
            isLoadig:true                        //Set isLoading property to false
         };
         //Next few Lines will run when image has loaded but are prepared first 
         $img.on('load',function(){             //When image has loaded
            $img.hide;                          //Hide it
            //Remove is-loading class from frame & append new image to it 
            $fame.removeClass('is-loading ').append($img);
            cache[scr].isLoadig = false;        //Update isLoading in cache
            //If still most recently requested image then
            if(Request === scr){
                crossfade($img);        //Call crossfade() funtion
            }                           //Slove asynchronous loading issue
         });


         $fame.addClass('is-loading');         //Add is-loading class to frame

         $img.attr({                          //Det attributes on <img> element 
            'scr':scr,                        //Add scr attribute to load image
            'alt':this.title ||''             //Add title if one was given in link

         });

        }
});

//Final line runs once when rest of script has loaded to show first image 
$('.thumb').eq(0).click();          //Simulate click on first thumb