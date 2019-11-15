//Antes de nada comprobamos con un console log si podemos continuar sin errores
//console.log('all good');
//detectamos el boton con el query selector. Despues detectamos el evento click y llamamos la funcion para traer datos
document.querySelector('#boton').addEventListener('click', traerDatos);
//Creamos la funcion
function traerDatos(){

    //comprobamos que todo vaya bien
    console.log('estamos en la funcion');


//////////////////////////////////////////////////////EMPEZAMOS CON AJAX////////////////////////////////////////////////////////


    //declaramos constante
    const xhttp = new XMLHttpRequest();

    //configuramos metodo open

    xhttp.open('GET', 'workers.json', true);

    //enviamos

    xhttp.send();

    //conseguimos respuesta

    xhttp.onreadystatechange = function(){
        //preguntamos por estados
        if(this.readyState == 4 && this.status == 200){
            //obtenemos datos de catalogo.json
            //console.log(this.responseText);
            //obtenemos la respuesta en JSON
            let datos = JSON.parse(this.responseText);

            //console.log(datos)
            
            let res = document.querySelector('#res');
            //limpiamos la respuesta, ya que en el bucle for va a estar reescribiendo todo el rato
            res.innerHTML = '';

            //accedemos a los datos con un bucle for
            for (let item of datos)
            {
                //de esta manera podemos visualizar solo el nombre de uno en uno, al igual que cualquier otro dato
                //console.log(item.FirstName)

                //agregamos informacion por cada ciclo for
                //comillas especiales para poder mezclar con codigo html
                res.innerHTML += `
                    <tr>
                        <td>${item.PersonId}</td>
                        <td>${item.LastName}</td>
                        <td>${item.FirstName}</td>
                        <td>${item.DisplayName}</td>
                        <td>${item.WorkEmail}</td>
                        <td>${item.Username}</td>
                    </tr>
                `
                //con ${} accedemos a las variables del archivo json de oracle

            }
        }
    }
}