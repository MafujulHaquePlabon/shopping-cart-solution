function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})


// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})

/* 
 //  same code above for begginers
 document.getElementById("phone-plus").addEventListener("click",function(){
    const phoneInput=document.getElementById("phone-number");
    let phoneNumber=phoneInput.value ;
    phoneNumber= parseInt(phoneNumber) + 1;
    phoneInput.value=phoneNumber;
     let phoneTotal=document.getElementById("phone-total");
     phoneTotal.innerText= 1219 * phoneNumber;
     calculateTotal()
     
});
document.getElementById("phone-minus").addEventListener("click",function(){
    const phoneInput=document.getElementById("phone-number");
    const phoneNumber= phoneInput.value;
    if(phoneNumber>0)
   {
    phoneInput.value= parseInt(phoneNumber) - 1;
   }
   let phoneTotal=document.getElementById("phone-total");
   phoneTotal.innerText= 1219 * phoneInput.value ;
   calculateTotal()
   
});

document.getElementById("case-plus").addEventListener("click",function(){
    const caseInput=document.getElementById("case-number");
    let caseNumber=caseInput.value ;
    caseNumber= parseInt(caseNumber) + 1;
    caseInput.value=caseNumber;
     let caseTotal=document.getElementById("case-total");
     caseTotal.innerText= 59 * caseNumber;
     calculateTotal()
     
});
document.getElementById("case-minus").addEventListener("click",function(){
    const caseInput=document.getElementById("case-number");
    const caseNumber= caseInput.value;
    if(caseNumber>0)
   {
    caseInput.value= parseInt(caseNumber) - 1;
   }
   let caseTotal=document.getElementById("case-total");
   caseTotal.innerText= 59 * caseInput.value ;
   calculateTotal()
   
});

  function getInputValue(product){
    const productInput= document.getElementById(product+"-number");
    const productNumber= parseInt(productInput.value);
    return productNumber;  
}

 function calculateTotal(){
    const phoneTotal= getInputValue('phone')* 1219;
    const caseTotal= getInputValue("case") * 59;
    const subtotal= phoneTotal+ caseTotal;
    const tax = subtotal / 10;
    const totalPrice=subtotal+tax;
    //update on the html
    document.getElementById("sub-total").innerText=subtotal;
    document.getElementById("tax-amount").innerText=tax;
    document.getElementById("total-price").innerText=totalPrice;
  
 } 
   */