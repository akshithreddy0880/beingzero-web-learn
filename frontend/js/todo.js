let adtodobtn=document.getElementById('addtodo');
let todocont=document.getElementById('todocontainer');
let inpfield=document.getElementById('inputfield');

adtodobtn.addEventListener('click',function(){
    var para=document.createElement('p')
    para.classList.add('para-styling');
    para.innerText=inpfield.value;
    todocont.appendChild(para);
  
    para.style.marginLeft="80px";
    inpfield.value="";
    para.addEventListener('click',function(){
        para.style.textDecoration="line-through";
    })
    para.addEventListener('dblclick',function(){
        todocont.removeChild(para);
       
    })
});