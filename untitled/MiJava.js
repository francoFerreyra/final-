/**
 * Created by usuario on 15/06/2016.
 */
/* FUNCIONES DE CONTROL*/
var valor;
var unidad;
var valorIngreso;

function comprobarNum(valorIngreso) {
    if (isNaN(valorIngreso)) {
        alert("Valor ingresado no numerico, ingresar de nuevo.")
    }
}
function convertirUnidades (valor, unidad){
    if(unidad == "miligramo" || unidad == "milimetro"){
        valor = valor/1000;

    }else if(unidad == "centimetro"){
        valor = valor/100;
    }else if(unidad == "kilogramo" || unidad =="kilometro") {
        valor = valor * 1000;
    }
    return valor;
}
/* FUNCIONES PARA OCULTAR*/
var clic = 1;

function divLogin() {
    if (clic == 1) {
        document.getElementById("caja").style.height = "500px";
        document.getElementById("Resultado").style.display = 'block';

        clic = clic + 1;
    } else {
        document.getElementById("caja").style.height = "0px";
        document.getElementById("Resultado").style.display = 'none';

        clic = 1;
    }
}
function VerOpcion1() {
    if (clic == 1) {
        document.getElementById("Caja1").style.height = "500px";
        document.getElementById("Resultado1").style.display = 'block';

        clic = clic + 1;
    } else {
        document.getElementById("Caja1").style.height = "0px";
        document.getElementById("Resultado1").style.display = 'none';

        clic = 1;
    }
}


/* FUNCIONES PARA CALCULOS */

function CCR(vmasa,valtura,vx,kx,vsegmento)
{
    var  uM, uA,uS,uX,mu;
//    var vmasa,valtura,vsegmento,vx,kx,mu;
//    kx=parseFloat(document.getElementById("txk").value);
//    vmasa = parseFloat(document.getElementById("txmasa").value);
//    valtura= parseFloat(document.getElementById("txaltura").value);
//    vsegmento  = parseFloat(document.getElementById("txsegmento").value);
//    vx =parseFloat( document.getElementById("txx").value);
	var unidmasa = document.getElementById("uniMasa").value;
	
    uM=convertirUnidades(vmasa,"unidmasa");
    uA=convertirUnidades(valtura,"metro");
    uS=convertirUnidades(vsegmento,"metro");
    uX=convertirUnidades(vx,"metro");

	alert(unidmasa);
    alert("valores ingresados:" +"Masa: "+vmasa+"  Altura:  "+valtura+"  X:" +vx+" K"+ kx+"  Segmento: "+ vsegmento);
    
    mu = ((uM * 9.8 * uA ) - ( 0.5 * kx * (uX ^ 2))) / ( uM * 9.8 * uS);

    alert("el coeficiente de rozamiento es:  "+mu);
	
	document.getElementById("txRes").value =mu;
    inciar_animacion();
}

function iniciar_animacion()
{
	
}

function CalculoCoeRozamiento (masa,altura,x,segmento ) {
    alert (masa, altura,segmento,x);
    var mu = ((masa * 9.8 * altura ) - ( 0.5 * k * (x ^2))) / ( masa * 9.8 * segmento);
    alert (" el coeficiente de rozamiento es ");
    return mu;

}
function CalculoDesplazamiento ( masa,segmento,altura,mu,k) {
    alert (masa,segmento,mu,k);
    var x = sqrt( ((masa *9.8*altura)-(mu*masa*9.8*segmento))*(2/k));
    return x;
}
/*
function CalculoConstanteResorte (masa,mu,segmento,x,altura) {
    alert (masa,mu,segmento,x,altura);
    var k= ( ( (masa*9.8*altura)-(mu*masa*9.8*segmento)) * ( 2/ x^2));
    return k;
}
function CalculoSegmentoRugozo () {
    alert (masa,mu,segmento,x,altura);
    var k= ( ( (masa*9.8*altura)-(mu*masa*9.8*segmento)) * ( 2/ x^2));
    return k;
}
function CalculoFuerzaDisipada () {
    alert (masa,mu,segmento,x,altura);
    var k= ( ( (masa*9.8*altura)-(mu*masa*9.8*segmento)) * ( 2/ x^2));
    return k;
}
function CalculoAltura () {
    alert (masa,mu,segmento,x,altura);
    var k= ( ( (masa*9.8*altura)-(mu*masa*9.8*segmento)) * ( 2/ x^2));
    return k;
}
*/
function dibujarCanvas(){
    var canvas = document.getElementById('miCanvas');
    var contexto = canvas.getContext('2d');
    // b. Forma cerrada con  relleno
    contexto.beginPath();
    contexto.moveTo(720,330);
    contexto.lineTo(720,260);
    contexto.lineTo(790,260);
    contexto.lineTo(790,330);
    contexto.fillStyle = '#009933'
    contexto.fill();
    contexto.beginPath();
    contexto.moveTo(230,40);
    contexto.lineTo(230,300);
    contexto.strokeStyle = '#0000CC'
    contexto.linewidth = 15;
    contexto.stroke();
    contexto.beginPath();
    contexto.moveTo(230,300);
    contexto.lineTo(250,340);
    contexto.lineTo(290,340);
    contexto.strokeStyle = '#0000CC'
    contexto.linewidth = 15;
    contexto.stroke();
    contexto.beginPath();
    contexto.moveTo(290,340);
    contexto.lineTo(700,340);
    contexto.strokeStyle = '#0000CC'
    contexto.linewidth = 15;
    contexto.stroke();
    contexto.beginPath();
    contexto.moveTo(700,340);
    contexto.lineTo(715,335);
    contexto.lineTo(720,340);
    contexto.lineTo(730,335);
    contexto.lineTo(740,340);
    contexto.lineTo(758,335);
    contexto.lineTo(760,340);
    contexto.lineTo(778,335);
    contexto.lineTo(788,340);
    contexto.lineTo(800,335);
    contexto.lineTo(810,340);
    contexto.lineTo(820,335);
    contexto.lineTo(830,340);
    contexto.lineTo(840,335);
    contexto.lineTo(850,340);
    contexto.strokeStyle = '#FF0033'
    contexto.stroke();
    contexto.beginPath();
    contexto.moveTo(850,340);
    contexto.lineTo(1000,340);
    contexto.moveTo(1000,340);
    contexto.lineTo(1000,250);
    contexto.strokeStyle = '#0000CC'
    contexto.linewidth = 15;
    contexto.stroke();
    contexto.beginPath();
    contexto.moveTo(1000,290);
    contexto.lineTo(990,290);
    contexto.lineTo(980,300);
    contexto.lineTo(970,290);
    contexto.lineTo(960,300);
    contexto.lineTo(950,290);
    contexto.lineTo(940,300);
    contexto.lineTo(930,290);
    contexto.lineTo(920,300);
    contexto.strokeStyle = '#0000CC'
    contexto.stroke();
}
