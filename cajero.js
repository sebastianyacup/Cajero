var imagenes = [];
imagenes["50"]= " 50k.png";
imagenes["20"]= " 20k.png";
imagenes["10"]= " 10k.png";

class Billete
{
    constructor(v , c)
    {
        this.valor= v
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor];
    }
}
function dineroTotal()
{
    suma= 0;
    for (var j of caja)
    {
        suma= suma + j.saldo;
    }
d.innerHTML = ("Dinero Total disponible en  el cajero:" + suma + "k");
dineroDisponible = suma ;
    
}
function dineroActual()
{
    if(dinero==0)
    {
        for(var s of caja)
        {
            if(s.cantidad >0 )
            {
                dinero += (s.cantidad * s.valor);
            }
        }
       
    }
    d.innerHTML = ("Dinero disponible  en el cajero "+ dinero + "k");
}

function limpiarPagina()
{
    r.innerHTML = 0;
    entregado.length = 0;
    dineroTotal();
}
function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero= parseInt(t.value);
    dineroActual();
    for(var bi of caja)
    {
        if ( dinero > 0)
        {
            div= Math.floor(dinero / bi.valor );
            if ( div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
            
            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero -(bi.valor * papeles);
            bi.cantidad = bi.cantidad - papeles;
        }
    }
    if(dinero > 0)
    {

        r.innerHTML = "No tengo dinero suficiente";
    }
    else
    {
        r.innerHTML= "Retiro: <br />";
        for(var e of entregado)
        {
            r.innerHTML +=  e.cantidad + " billetes de "+ e.valor + "<br><hr>"; 
            r.appendChild(e.imagen);
            r.innerHTML += "<br />";
        }
    }
    console.log(entregado);
    dineroActual();
}
var entregado = [];
var caja= [];
caja.push( new Billete(50, 3));
caja.push( new Billete(20, 2));
caja.push( new Billete(10, 2));

var dinero = 0;
var div = 0;
var papeles = 0;
var dineroDisponible;
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
var r= document.getElementById("resultado");
var d = document.getElementById("disponible");
var l = document.getElementById("limpiar");
l.addEventListener("click", limpiarPagina);