 $(document).ready(function(){
    var elementCount = $(".items").length;
    var currentPage = 1;
    var dX = 0;

// Если количество элементов в слайдере   четной, то все элементы отображаются одинаковыми. Иначе  первый элемент становится крупным .  

    if(elementCount%2 == 1){
        $(".items:first").addClass("big");
        var wrapperWidth = (elementCount - 1)/2*240+480;
    }else{
        var wrapperWidth = elementCount/2*240;
    }
    
    
    var workspace =  $(".content").width()+20;
    var pageCount = Math.ceil(wrapperWidth/workspace); 

    function btnStatus(){
        if(pageCount==1){
            $(".prev").hide();
            $(".next").hide();
        }
        
        $(".prev").show();
        if(currentPage == 1){
            $(".prev").hide();
        }

        $(".next").show();
        if(currentPage == pageCount){
            $(".next").hide();
        }    
    }
    
    btnStatus();
    
    var oldSize = $(".content").width()+20;
    var offset = 0;
    
    $(window).on("resize", function(){
        window.resizeEvt;
        $(window).resize(function(){
            clearTimeout(window.resizeEvt);
            window.resizeEvt = setTimeout(function(){
                workspace= $(".content").width()+20;
                pageCount = Math.ceil(wrapperWidth/workspace);  

                offset = workspace-oldSize;
                console.log(offset);

                oldSize=workspace;
                btnStatus(); 
            }, 250);
        });  
    });
    
    $(".next").on('click', function(){
         if(currentPage==1){
            offset=0;          
        }
        $(".wrapper").animate({'margin-left': dX-workspace+"px"}, 1000);
        dX-=workspace;
        currentPage++;
        btnStatus();
    })
    
    $(".prev").on('click', function(){
        currentPage--;
        btnStatus();
        if(currentPage==1){
             offset=0;          
        }
        $(".wrapper").animate({'margin-left': dX+workspace-offset+"px"}, 1000);
        dX+=workspace;
    })
 
});

