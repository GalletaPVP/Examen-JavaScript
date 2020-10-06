function calcular(){
    let cantidad=document.getElementById('cantidad').value;
    let tipo=document.getElementById('tipo').value;
    let bonus=document.getElementById('bono').value;
    if(cantidad === '' && tipo === ''){
        alert('Falta ingresar la cantidad');
    }else if(Number(cantidad) === 0 && Number(tipo) === 0){
        alert('Falta ingresar la cantidad');
    }else{
        if(Number(cantidad) === 1){
            switch(Number(tipo)){
                case 1:
                    alert('Nuevo limite de credito 25%');
                    break;
                case 2:
                    alert('Nuevo limite de credito 35%');
                    break;
                case 3:
                    alert('Nuevo limite de credito 40%');
                    break;
                default:
                    alert('Nuevo limite de credito 50%');
            }            
        }else{
            switch(Number(bonus)){
                case 1:
                    alert('Nuevo limite de credito 25%');
                    break;
                case 2:
                    alert('Nuevo limite de credito 35%');
                    break;
                case 3:
                    alert('Nuevo limite de credito 40%');
                    break;
                default:
                    alert('Nuevo limite de credito 50%');
            }
        }
    }
}

function borrar(){
    document.getElementById('cantidad').value = '';
    document.getElementById('tipo').value = '';
    document.getElementById('bono').value = '';
}              
document.getElementById('calcular').addEventListener('click',calcular);
document.getElementById('borrar').addEventListener('click',borrar);