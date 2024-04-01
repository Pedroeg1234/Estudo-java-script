const headers= document.querySelectorAll(".accordion-header");
const itens= document.querySelectorAll(".accordion-item");

headers.forEach(function(header){

    header.addEventListener("click", function(){

        const item= this.parentNode;

        const isActive= item.classList.contains("accordion-item--active");


        itens.forEach(function (item){

            item.classList.remove("accordion-item--active");
            item.classList.add("accordion-item--closed");
        });

        if (!isActive){

            item.classList.add("accordion-item--active");
        }


    });
});

/*
Quando um elemento é clicado:
Se ele já estiver ativo (aberto), o código simplesmente o fecha, ou seja, remove a classe accordion-item--active e adiciona a classe accordion-item--closed.
Se ele não estiver ativo, o código fecha todos os elementos (remove a classe accordion-item--active e adiciona a classe accordion-item--closed em todos os elementos)
 e, em seguida, ativa o elemento clicado (adiciona a classe accordion-item--active e remove a classe accordion-item--closed apenas no elemento clicado).
*/