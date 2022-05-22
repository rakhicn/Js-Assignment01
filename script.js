let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue ='';
for(item of buttons){
  item.addEventListener('click', (e)=>{
    buttonText = e.target.innerText;
    if(buttonText=='x'){
        buttonText = '*';
      screenValue += buttonText;
      srceen.value = screenValue;
    }
    else if (buttonText =='AC'){
      screenValue = "";
      srceen.value = screenValue;
      }
    else if (buttonText =='='){
      srceen.value = eval(screenValue);
      }
    else{
      screenValue += buttonText;
      srceen.value = screenValue;
    }
  })
}
