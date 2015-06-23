 $(document).ready(function(){
  
    var elementCount = $(".items").length;
    var workspace =  $(".content").width();
    var lZone, cZone, rZone;
    var cDx=0;
    lZone= 0;


    switch(workspace){
        case 1420:
            var Vworkspace = 12;
            break;
        case 1180:
           Vworkspace = 10;
            break;
        case 940:
            Vworkspace = 8;
            break;
    }


    if(elementCount%2 == 1){
        $(".items:first").addClass("big");
        var vItems = elementCount+3;
    }else{
        vItems = elementCount;
    }

    if(Vworkspace > vItems){
        cZone=vItems;
        $(".next").hide();
    }else{
        cZone=Vworkspace;
    }

    rZone = vItems - (lZone+cZone);        


    console.log(lZone, cZone, rZone);
    console.log(vItems);



    function btnStat(){
         $(".next").show();
        if(rZone==0){
            $(".next").hide();
        }
         $(".prev").show();
        if(lZone==0){
            $(".prev").hide();
        }
    }

    btnStat();

    $(".next").on('click', function(){
        if(rZone >= cZone){
            var dx = $(".content").width()+20;
            cDx+=dx;
            $(".wrapper").animate({'margin-left': -cDx+"px"}, 1000);
            lZone+=cZone;
            rZone-=cZone;
            console.log(lZone, cZone, rZone);
        }else{
            dx=rZone/2*240;
            cDx+=dx;
            $(".wrapper").animate({'margin-left': -cDx+"px"}, 1000);
            lZone+=rZone;
            rZone-=rZone;
            console.log(lZone, cZone, rZone);
        }
        btnStat();

    })
    $(".prev").on('click', function(){
        if(lZone >= cZone){          
            if(lZone-cZone == 2 && elementCount%2 == 1){
                var dx = $(".content").width()+20;
                cDx-=dx+240;
                $(".wrapper").animate({'margin-left': -cDx+"px"}, 1000);
                lZone-=cZone+2;
                rZone+=cZone+2;
                console.log(lZone, cZone, rZone, "Вар1");
            }else{
                var dx = $(".content").width()+20;
                cDx-=dx;
                $(".wrapper").animate({'margin-left': -cDx+"px"}, 1000);
                lZone-=cZone;
                rZone+=cZone;
                console.log(lZone, cZone, rZone, "Вар2");
            } 
        }else{
            dx=lZone/2*240;
            cDx-=dx;
            $(".wrapper").animate({'margin-left': -cDx+"px"}, 1000);
            rZone+=lZone;
            lZone-=lZone;
            console.log(lZone, cZone, rZone);
        }
        btnStat();

    })


    window.resizeEvt;
    $(window).resize(function(){
        clearTimeout(window.resizeEvt);
        window.resizeEvt = setTimeout( function(){
            workspace =  $(".content").width();

            switch(workspace){
                case 1420:
                    var newVworkspace = 12;
                    break;
                case 1180:
                    newVworkspace = 10;
                    break;
                case 940:
                    newVworkspace = 8;
                    break;
            }

            var dElemrnt=Vworkspace-newVworkspace;
            Vworkspace=newVworkspace;
            rZone+=dElemrnt;
            cZone-=dElemrnt;
            console.log(lZone, cZone, rZone);

            //console.log(dElemrnt);


        }, 250);
    });  

});

