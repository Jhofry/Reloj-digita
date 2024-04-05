function date_time (id)
{
    date= new Date;
    h= date.getHours();
    if(h<10)
    {
        h= "0"+ h;
    }
    m= date.getMinutes();
    if(m<10)
    {
        m= "0"+m;
    }
    s= date.getSeconds();
    if(s<10)
    {
        s= "0"+s;
    }
    // modulo de 12 hrs con una rotacion de 180
    let hRotation = ((h % 12 )* 180)/6
    // se multiplica el 180 y se divide entre 30
    let mRotation = (m *180)/30;
     // se multiplica el 180 y se divide entre 30
    let shRotation = (s * 180)/30;

    
    //reloj digital
    document.getElementById("s").innerHTML=''+s;
    document.getElementById("m").innerHTML=''+m;
    document.getElementById("h").innerHTML=''+h;
    setTimeout('date_time("'+"s"+'");','1000');

    //reloj rotativo analogico
    //Se tranforma los resultados que se hizo en la regla de tres y pasarlo a las variables al html
    document.querySelector('#hours').style.transform ="rotate(" + hRotation + "deg)";
    document.querySelector('#minutes').style.transform ="rotate(" + mRotation + "deg)";
    document.querySelector('#seconds').style.transform ="rotate(" + shRotation + "deg)";
    return true;
}
window.onload=date_time('s');