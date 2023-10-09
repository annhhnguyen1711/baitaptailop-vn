(function(){ //live in an IIFE
    var $img = $('#galllery ing');//Get the img
    var $search = ('#filter-seaarch');//Get the input element
    var cache = [];

    $img.each(function(){//for each image
        cache.push({//add an object to the cache ary
            Element:this,//this image
            Text:this.alt.trim().toLowerCase()//Its alt text (lowercase trimmed)
    });
});
function filter() {//Declare filter()funtion
    var query=this.value.trim().toLowerCase();//Get the query 
    cache.forEach(function(img)){//For each entry in cahe pass image
        var index = 0;

        if (query){//if there is some query text 
            index=img.text.indexOf(query);//Find if query text is in there 
        }

        img.element.style.display=index === -1 ? 'none':''; //Show / hide
    });
}

if('oninput'in $search[0]){//If brower supports input event 
    $search.on('input',filter);//Use input evnet to call filter()
}else{//Otherwise 
    $search.on('keyup',filter);//Use keyup evnet to call filter()
}

}());
