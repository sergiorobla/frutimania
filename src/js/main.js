"use strict";
// Añado las frutas en este array.
const frutas = [
    "🥝",
    "🍇",
    "🍈",
    "🍉",
    "🍊",
    "🍋",
    "🍌",
    "🍍",
    "🍎",
    "🍐",
    "🍑",
    "🍒",
    "🍓",
    "🥥",
    "🥭",
];
// Agrego el espacio del HTML para visualizar las frutas.
const contentEmojis = document.getElementById("content");
// Hago esta función para agregar una fruta aleatoria por delante en el contenedor donde se guardarán las frutas.
function elementoDelante(arr, container) {
    const nuevaFruta = arr[Math.floor(Math.random() * arr.length)];
    if (container) {
        const emoji = container.innerHTML.trim().split(" ");
        emoji.unshift(nuevaFruta);
        container.innerHTML = emoji.join(" ");
    }
}
// Hago que la función anterior sea ejecutada en el documento HTML cuando presiono el botón.
const buttonDelante = document.getElementById("unshift");
buttonDelante?.addEventListener("click", function () {
    elementoDelante(frutas, contentEmojis);
});
// Hago esta función para agregar una fruta aleatoria por detrás en el contenedor donde se guardarán las frutas.
function elementoDetras(arr, container) {
    const nuevaFruta = arr[Math.floor(Math.random() * arr.length)];
    if (container) {
        const emoji = container.innerHTML.trim().split(" ");
        emoji.push(nuevaFruta);
        container.innerHTML = emoji.join(" ");
    }
}
// Hago que la función anterior sea ejecutada en el documento HTML cuando presiono el botón.
const buttonDetras = document.getElementById("push");
buttonDetras?.addEventListener("click", function () {
    elementoDetras(frutas, contentEmojis);
});
// Hago esta función para agregar una fruta aleatoria en la posición dada en el contenedor donde se guardarán las frutas.
function elementoPosicion(arr, container) {
    const inputPosition = document.getElementById("addPosition");
    if (inputPosition && container) {
        const position = parseInt(inputPosition.value);
        if (!isNaN(position) && position >= 0) {
            const nuevaFruta = arr[Math.floor(Math.random() * arr.length)];
            const emojis = container.innerHTML.trim().split(" ");
            emojis.splice(position, 0, nuevaFruta);
            container.innerHTML = emojis.join(" ");
        }
    }
}
// Hago que la función anterior sea ejecutada en el documento HTML cuando presiono el botón.
const buttonPosition = document.getElementById("insertAt");
buttonPosition?.addEventListener("click", function () {
    elementoPosicion(frutas, contentEmojis);
});
// Hago esta función para eliminar una fruta aleatoria por detrás del contenedor donde se guardarán las frutas.
function eliminarDetras(container) {
    if (container) {
        const emoji = container.innerHTML.trim().split(" ");
        emoji.pop();
        container.innerHTML = emoji.join(" ");
    }
}
// Hago que la función anterior sea ejecutada en el documento HTML cuando presiono el botón.
const buttonPop = document.getElementById("pop");
buttonPop?.addEventListener("click", function () {
    eliminarDetras(contentEmojis);
});
// Hago esta función para eliminar una fruta aleatoria por detrás del contenedor donde se guardarán las frutas.
function eliminarDelante(container) {
    if (container) {
        const emoji = container.innerHTML.trim().split(" ");
        emoji.shift();
        container.innerHTML = emoji.join(" ");
    }
}
// Hago que la función anterior sea ejecutada en el documento HTML cuando presiono el botón.
const buttonShift = document.getElementById("shift");
buttonShift?.addEventListener("click", function () {
    eliminarDelante(contentEmojis);
});
function eliminarPosicion(container) {
    const inputPosicion = document.getElementById("deletePosition");
    if (inputPosicion && container) {
        let posicion = parseInt(inputPosicion.value);
        if (!isNaN(posicion) && posicion >= 0) {
            posicion -= 0;
            const emojis = container.innerHTML.trim().split(" ");
            emojis.splice(posicion, 1);
            container.innerHTML = emojis.join(" ");
        }
        else {
            console.error("La posición ingresada no es válida.");
        }
    }
}
// Hago que la función anterior sea ejecutada en el documento HTML cuando presiono el botón.
const buttonDelete = document.getElementById("deleteAt");
buttonDelete?.addEventListener("click", function () {
    eliminarPosicion(contentEmojis);
});
