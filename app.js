function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinLength = pin + '';
    if(pinLength.length<4){
        console.log('Now find 3 digit pin');
        return getPin();
    }
    return pin;
}
function generatePin(){
    const pin = getPin();
    const displayPin = document.getElementById('display-pin');displayPin.value = pin;
}
document.getElementById('key-pad').addEventListener('click',function(event){
      const number = event.target.innerText;
      const clacInput = document.getElementById('typed-numbers');
      if(isNaN(number)){
      clacInput.value = '';
      }
      else{
        const previousNumber = clacInput.value;
        const newNumber = previousNumber + number;
        clacInput.value = newNumber;
      }
})
function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failNotification = document.getElementById('notify-fail');
    if(pin==typedNumbers){
       successMessage.style.display = 'block';
       failNotification.style.display = 'none';
    }
    else{
        failNotification.style.display = 'block';
        successMessage.style.display = 'none';
    }
}