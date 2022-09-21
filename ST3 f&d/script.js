//Take mass
    let Weight=document.getElementById('mass')
    

function Sun(){
    let weight=Number(Weight.value)
    let weightonsun=weight*27.01;
    document.getElementById('sunWeight').innerText=weightonsun;
}
function Mercury(){
    let weight=Number(Weight.value)
    let finalweight=weight*0.38;
    document.getElementById('merWeight').innerText=finalweight;
}
function Venus(){
    let weight=Number(Weight.value)
    let finalweight=weight*0.91;
    document.getElementById('VenWeight').innerText=finalweight;
}
function Earth(){
    let weight=Number(Weight.value)
    let finalweight=weight*1;
    document.getElementById('earthWeight').innerText=finalweight;
}
function Mars(){
    let weight=Number(Weight.value)
    let finalweight=weight*0.38;
    document.getElementById('marsWeight').innerText=finalweight;
}
function Jupiter(){
    let weight=Number(Weight.value)
    let finalweight=weight*2.34;
    document.getElementById('jupiterWeight').innerText=finalweight;
}
function Saturn(){
    let weight=Number(Weight.value)
    let finalweight=weight*1.06;
    document.getElementById('saturnWeight').innerText=finalweight;
}
function Uranus(){
    let weight=Number(Weight.value)
    let finalweight=weight*0.92;
    document.getElementById('uranusWeight').innerText=finalweight;
}
function Neptune(){
    let weight=Number(Weight.value)
    let finalweight=weight*1.19;
    document.getElementById('neptuneWeight').innerText=finalweight;
}
function Pluto(){
    let weight=Number(Weight.value)
    let finalweight=weight*0.06;
    document.getElementById('plutoWeight').innerText=finalweight;
}