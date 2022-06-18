

// Fucion con Arrays

function CalcularPreciocupon(precio, coupon){
  const calPrecioCupon = 100 - coupon;
  const couponPrecio = (calPrecioCupon * precio) / 100;

  return couponPrecio;

}

function OnclickButonPrecioBono(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    const coupons = [
        {
            name: "Empresarial",
            discount: 30, 
        },

        {
            name: "Trabajo",
            discount: 15 ,
        },

        {
            name: "Estudiante",
            discount: 10,

        },

    ];
  
    const isCouponValueValid = function(coupon){
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if(!userCoupon){

        alert("El cupon " + userCoupon + "no es valido"); 
    }else{
        const descuento = userCoupon.discount;
        const precioCondescuento = CalcularPreciocupon(priceValue, descuento);

        const resultP = document.getElementById("ResultP")
        resultP.innerText = "El precio con descuento es : $ " + precioCondescuento;
    }

}