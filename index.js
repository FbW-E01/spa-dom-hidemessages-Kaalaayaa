const animals = document.querySelector("#container");


animals.addEventListener("click", function(e){
    const parent = e.target.parentElement;
    const animals = parent.parentElement;
        animals.removeChild(parent);})