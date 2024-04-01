const voltarAoTopo= document.querySelector("#back-to-top");

window.addEventListener("scroll", function() {


    const scrollTop = window.pageYOffset;

    if (scrollTop >500){

        voltarAoTopo.style.display = "block";
    } else{

        voltarAoTopo.style.display= "none";
    }
});


voltarAoTopo.addEventListener("click", function(e){


    e.preventDefault();

    window.scrollTo({

        top:0,
        behavior:"smooth",

    })
});