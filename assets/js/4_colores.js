const caja1 = document.getElementById("div1")
const caja2 = document.getElementById("div2")
const caja3 = document.getElementById("div3")
const caja4 = document.getElementById("div4")

function CambioColor (elemento){
    elemento.style.backgroundColor = "black";
}

caja1.addEventListener("click", function() {
    CambioColor(this)
});
caja2.addEventListener("click", function() {
    CambioColor(this)
});
caja3.addEventListener("click", function() {
    CambioColor(this)
});
caja4.addEventListener("click", function() {
    CambioColor(this)
});