function calcular(){
    let precio=document.getElementById('precio').value;
    let kilos=document.getElementById('kilos').value;
    let tipo=document.getElementById('tipo').value;
    let tamaño=document.getElementById('tamaño').value;
    let tipoA1=20,tipoA2=30,tipoB1=30,tipoB2=50,subtotal=0,total=0;
    if(precio === ''){
        alert('Falta ingresar la cantidad');
    }else{
        if(tipo === 'A'){
            if(Number(tamaño) === 1){
                subtotal = Number(precio) + tipoA1;
                total = subtotal*Number(kilos);
                alert('Aumento de precio fijo A1 S/.20')
            }else if(Number(tamaño) === 2){
                subtotal = Number(precio) + tipoA2;
                total = subtotal*Number(kilos);
                alert('Aumento de precio fijo A2 S/.30')
            }else{
                alert('Valor desconocido');
            }
        }else if(tipo === 'B'){
            if(Number(tamaño) === 1){
                subtotal = Number(precio) - tipoB1;
                total = subtotal*Number(kilos);
                alert('Descuento precio fijo B1 S/.20')
            }else if(Number(tamaño) === 2){
                subtotal = Number(precio) - tipoB2;
                total = subtotal*Number(kilos);
                alert('Descuento precio fijo B2 S/.50')
            }else{
                alert('Valor desconocido');
            }
        }else{
            alert('Valor desconocido');
        }
    }
    document.getElementById('precio_final').value = subtotal;
    document.getElementById('total').value = total;
}

function borrar(){
    document.getElementById('precio').value = '';
    document.getElementById('kilos').value = '';
    document.getElementById('tamaño').value = '';
    document.getElementById('tipo').value = '';
    document.getElementById('total').value = '';
}              
document.getElementById('calcular').addEventListener('click',calcular);
document.getElementById('borrar').addEventListener('click',borrar);