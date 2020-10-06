function calcular(){
    let cantidad=document.getElementById('cantidad').value;
    let precio1=95,precio2=85,precio3=75,total = 0;
    if(cantidad === ''){
        alert('Falta ingresar la cantidad');
    }else{
        if(Number(cantidad) > 300){
           total=Number(cantidad)*75;
           alert('Precio por personas S/.75');
        }else if(Number(cantidad) > 200 && Number(cantidad) <= 300){
            total=Number(cantidad)*85;
            alert('Precio por personas S/.85');
        }else{
            total=Number(cantidad)*95;
            alert('Precio por personas S/.95');
        }
    }
    document.getElementById('total').value = total;
}

function borrar(){
    document.getElementById('cantidad').value = '';
    document.getElementById('total').value = '';
}              
document.getElementById('calcular').addEventListener('click',calcular);
document.getElementById('borrar').addEventListener('click',borrar);


