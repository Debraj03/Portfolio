document.querySelector('.menu').onclick=function(){
    document.querySelector('.sidenavber').style.display="inline-block";

}
document.querySelector('.fa-xmark').onclick=function(){
    
    document.querySelector('.sidenavber').style.display="none"; 
}
document.querySelector('.Submit').onclick=function(){
   let resultName=document.querySelector('#name');
   let resultEmail=document.querySelector('#email');
   let resultMessage=document.querySelector('#message');
   if(resultName.value)
  
   if(resultEmail.value)
  
   if(resultMessage.value)
   
   if(resultName.value&&resultEmail&&resultMessage.value){
    console.log("Mr/Ms ",resultName.value, "has given a response.\nHis/Her emial id is",resultEmail.value, " .\nHe/She has also send a message for you it is:\n",resultMessage.value);
    window.alert("Message sent successfully")
   }
   resultName.value='';
   resultEmail.value='';
   resultMessage.value='';
}
document.querySelector('.Reset').onclick=function(){
    let resultName=document.querySelector('#name');
    let resultEmail=document.querySelector('#email');
    let resultMessage=document.querySelector('#message');
    resultName.value='';
    resultEmail.value='';
    resultMessage.value='';
}


