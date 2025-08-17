const flipCard = document.getElementById('flipCard');
const loginText = document.getElementById('loginText');
const front = document.getElementById('flip-card-front');
const btnsello = document.getElementById('btnsello')
    front.addEventListener('click', () => {
        flipCard.style.transform = 'rotateY(180deg)';
    });

    const topFlap = document.getElementById("topFlap");
    const bottomFlap = document.getElementById("bottomFlap");

    let topOpen = false;
    let bottomOpen = false;

    btnsello.addEventListener("click", () => {
        if (!topOpen && !bottomOpen) {
            topFlap.style.transform = "rotateX(180deg)";
            topOpen = true;
            btnsello.style.visibility = 'hidden';
        }
    });
    topFlap.addEventListener("click", () => {
        if (topOpen && !bottomOpen) {
            topFlap.style.transform = "rotateX(0deg)";
            topOpen = false;
            setTimeout(() => {
            btnsello.style.visibility = 'visible';
                }, 1500);
        }
    });
    bottomFlap.addEventListener("click", () => {
        // Si hay alguna tarjeta activa, no permitir cerrar
        const tarjetaActiva = document.querySelector('.slot-tarjeta.active');

        if (topOpen && !bottomOpen) {
            bottomFlap.style.transform = "rotateX(-180deg)";
            bottomOpen = true;
        } else if (topOpen && bottomOpen && !tarjetaActiva) {
            bottomFlap.style.transform = "rotateX(0deg)";
            bottomOpen = false;
        }
    });

    // 📌 Evento solo para los tabs
    const tabs = document.querySelectorAll('.tab-tarjeta');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.stopPropagation();
            const slot = tab.closest('.slot-tarjeta');

            if (slot.classList.contains('active')) {
                slot.classList.remove('active');
                return;
            }

            document.querySelectorAll('.slot-tarjeta').forEach(s => s.classList.remove('active'));
            slot.classList.add('active');
        });
    });
function openMapModal() {
    document.getElementById('mapModal').style.display = 'flex';
}

function closeMapModal() {
    document.getElementById('mapModal').style.display = 'none';
}
document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.querySelector(".card-sobre");
    const imagen = document.querySelector(".imagenfondo");

    // Medidas originales de la imagen
    const proporcionAncho = 570;
    const proporcionAlto = 475;

    // Tomar tamaño inicial del contenedor
    const anchoCont = contenedor.clientWidth;
    const altoCont = contenedor.clientHeight;

    // Escalar proporcionalmente
    let escala = Math.min(anchoCont / proporcionAncho, altoCont / proporcionAlto);
    let anchoFinal = proporcionAncho * escala;
    let altoFinal = proporcionAlto * escala;

    // Asignar tamaño fijo
    imagen.style.width = anchoFinal + "px";
    imagen.style.height = altoFinal + "px";
});
function ajustarVH() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}
window.addEventListener('resize', ajustarVH);
ajustarVH();