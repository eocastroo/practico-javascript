


function CalcularbonoPrecioConDescuento(precio, bono){

const PrecioBonoConDescuento = 100 - bono;
const BonoPrecio = (PrecioBonoConDescuento * precio ) / 100 ;

return BonoPrecio;

}

const coupons = [
    "Empresa",
    "Trabajo",
    "Estudiante"
];


function OnclickButonPrecioBono(){

const inputPrice = document.getElementById("inputPrice");
const priceValue = inputPrice.value;

const inputCoupon = document.getElementById("inputCoupon");
const couponValue = inputCoupon.value;

let descuento;

switch(couponValue) {
    case coupons[0]:
        descuento = 15;
    break;
    case coupons[1]:
        descuento = 30;
     break;
     case coupons[2]:
         descuento = 35;
     break;    

}

const precioConDescuento = CalcularbonoPrecioConDescuento(priceValue, descuento );

    const resultP = document.getElementById( "ResultP");
    resultP.innerText = "El precio con descuento es : $" + precioConDescuento;


}



