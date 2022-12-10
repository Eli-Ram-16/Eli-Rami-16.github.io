//alert ("Bienvenid@ a mi pagina");

let app=document.getElementyId('typewriter');
let typewriter=new typewriter(app, {
    loop:true,
    delay:75,
});
typewriter
.pauseFor(2500)
.typeString('Banda musical originaria de Mexicali, Baja California, México y formada en 2003. Esta banda está principalmente conformada por Jesús Navarro (Voz principal y Piano), Julio Ramírez (Guitarra y Bajo) y Gilberto «Bibi» Marín (Guitarra y Batería).')
.pauseFor(200)
.deleteChars(10)
.start();