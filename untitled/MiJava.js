/**
 * Created by usuario on 15/06/2016.
 */
/* FUNCIONES DE CONTROL*/
var valor;
var unidad;
var valorIngreso;

function comprobarNum(ide) {
    var dato = document.getElementById(ide).value;
    if (isNaN(dato)) {
        alert("Valor ingresado no numerico, ingresar de nuevo.")
        document.getElementById(ide).value="";
        document.getElementById(ide).focus();
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
        document.getElementById("cuadro").style.height=" 750px";
        document.getElementById("miCanvas").style.display='block';
        clic = clic + 1;
    } else {
        document.getElementById("Caja1").style.height = "0px";
        document.getElementById("Resultado1").style.display = 'none';
        document.getElementById("cuadro").style.height="150px";
        document.getElementById("miCanvas").style.display='none';

        clic = 1;
    }
}

/* FUNCIONES PARA CALCULOS */

function CCR(vmasa,valtura,vx,kx,vsegmento)
{
    var  uM, uA,uS,uX,mu;

	var unidmasa = document.getElementById("uniMasa").value;
	
    uM=convertirUnidades(vmasa,"unidmasa");
    uA=convertirUnidades(valtura,"metro");
    uS=convertirUnidades(vsegmento,"metro");
    uX=convertirUnidades(vx,"metro");


    alert("valores ingresados:" +"Masa: "+vmasa+"  Altura:  "+valtura+"  Compresion del resorte:" +vx+" Constante del resorte"+ kx+"  Segmento: "+ vsegmento);
    
    mu = ((uM * 9.8 * uA ) - ( 0.5 * kx * (uX ^ 2))) / ( uM * 9.8 * uS);

   
	
	document.getElementById("txRes").value =mu;
    dibujar();
}


var t =0;

var loopTimer;
function animar()
{
    var x=0;
    var y=0;

    if(t<=60)
    {
        y= (t*90)/60;
        x=50;

    }

    if(t>60 && t<=120)
    {
        y=Math.sin(Math.PI-(t-60)*Math.PI/120)*35;
        x=Math.cos(Math.PI-(t-60)*Math.PI/120)*35;
        x+=85;
        y+=90;
    }
    if(t>120 && t<=180)
    {
        y=195-70;
        x=(((t-120)*90)/60)+85;

    }
    if(t>180 && t<=400)
    {
        y=195-70;
        x=(((t-180)*205)/220)+175;
    }
    if(t>400 && t<=600)
    {
        y=195-70;
        x=380-(((t-400)*205)/220);
    }
    var canvas = document.getElementById('miCanvas');
    canvas.width = canvas.width;
    dibujarCanvas();
    var contexto = canvas.getContext('2d');
    contexto.save();
    contexto.fillStyle = "rgba(0,200,0,1)";
    contexto.fillRect(x,y,70,70);
    contexto.restore();

    t++;
    if(t>600)
        clearInterval(loopTimer);
}
function dibujar()
{
    t=0;
    loopTimer = setInterval(animar,1000/60);
}
function dibujarCanvas()
{
    var canvas = document.getElementById('miCanvas');
    var contexto = canvas.getContext('2d');
    // b. Forma cerrada con  relleno
    contexto.beginPath();
    contexto.moveTo(50,40);
    contexto.lineTo(50,140);
    contexto.strokeStyle = '#0000CC';
    contexto.linewidth = 15;
    contexto.stroke();
    contexto.beginPath();
    contexto.moveTo(50,140);
    contexto.lineTo(50,160);
    contexto.quadraticCurveTo(45,200,80,195);
    contexto.strokeStyle = '#0000CC';
    contexto.linewidth = 15;
    contexto.stroke();
    contexto.beginPath();
    contexto.moveTo(80,195);
    contexto.lineTo(230,195);
    contexto.strokeStyle = '#0000CC';
    contexto.linewidth = 15;
    contexto.stroke();
    contexto.beginPath();
    contexto.moveTo(230,195);
    contexto.lineTo(280,195);
    contexto.strokeStyle = '#0000CC';
    contexto.linewidth = 15;
    contexto.stroke();
    contexto.beginPath();
    contexto.moveTo(280,195);
    contexto.lineTo(290,190);
    contexto.lineTo(300,195);
    contexto.lineTo(310,190);
    contexto.lineTo(320,195);
    contexto.lineTo(330,190);
    contexto.lineTo(340,195);
    contexto.lineTo(350,190);
    contexto.lineTo(360,195);
    contexto.lineTo(370,190);
    contexto.lineTo(380,195);
    contexto.strokeStyle = '#ff0000';
    contexto.linewidth = 30;
    contexto.stroke();
    contexto.beginPath();
    contexto.moveTo(380,195);
    contexto.lineTo(520,195);
    contexto.strokeStyle = '#0000CC';
    contexto.linewidth = 15;
    contexto.stroke();
    contexto.beginPath();
    contexto.moveTo(520,195);
    contexto.lineTo(520,105);
    contexto.strokeStyle = '#0000CC';
    contexto.linewidth = 15;
    contexto.stroke();
    contexto.beginPath();
    contexto.moveTo(520,145);
    contexto.lineTo(510,140);
    contexto.lineTo(500,145);
    contexto.lineTo(490,140);
    contexto.lineTo(480,145);
    contexto.lineTo(470,140);
    contexto.lineTo(460,145);
    contexto.lineTo(450,140);
    contexto.lineTo(450,125);
    contexto.lineTo(450,155);
    contexto.strokeStyle = '#ff0000';
    contexto.linewidth = 15;
    contexto.stroke();

}
	