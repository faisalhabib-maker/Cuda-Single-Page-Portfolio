   $(document).ready(function(){

        $(function(){
              $('.circlechart').circlechart();
            });
            
            // mixitup
        var mixer = mixitup('.mixparent');
           

            // navbar active class add
            $("nav ul li a").click(function(){
              $("nav ul li a").removeClass("activee");
              $(this).addClass("activee");
            });


    });