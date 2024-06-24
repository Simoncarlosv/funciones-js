const caja = document.getElementById("key");

        function CambiarColor(color) {
            caja.style.backgroundColor = color;
        }

        function crearCaja(color) {
            nuevoElemento = document.createElement("div");
            nuevoElemento.className = "nuevoDiv"
            nuevoElemento.style.backgroundColor = color;
            document.body.appendChild(nuevoElemento);
        }

        document.addEventListener("keydown", function (event) {
            if (event.key === "a") {
                CambiarColor("pink");
            } else if (event.key === "s") {
                CambiarColor("orange");
            } else if (event.key === "d") {
                CambiarColor("lightblue");
            } else if (event.key === "q") {
                crearCaja("purple");
            } else if (event.key === "w") {
                crearCaja("gray");
            } else if (event.key === "e") {
                crearCaja("brown");
            }
        });