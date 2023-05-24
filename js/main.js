function AgregarTarea(){
    console.log("Agregando tarea");
    const input= document.getElementById ("nuevoElemento");
    const contenedor= document.getElementById ("contenedor");
        //Añadir tarea
    //1.Crear un nuevo elemento tipo <li>
    let nuevoElemento= document.createElement ("li");
    //2. Escribir dentro del elemento
    nuevoElemento.innerHTML= input.value;
    //3.Crear un elemento boton
    let boton = document.createElement("button");
    boton.innerHTML="BORRAR";
    //4.Añadir ese boton a la lista
    nuevoElemento.appendChild(boton);
    //4. Crear otro boton
    let botonListo= document.createElement ("button");
    botonListo.innerHTML ="LISTO";
    //5. Añadir ese boton al elemento d ela lista
    nuevoElemento.appendChild (botonListo);
    //7.Colocar el nuevo elemento dentro del contenedor
    contenedor.appendChild(nuevoElemento);
    //8. Resetear el input
    input.value="";
}