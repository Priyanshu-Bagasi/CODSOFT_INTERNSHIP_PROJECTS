let input=document.getElementById('input');
let buttons=document.querySelectorAll('button');
let str="";
let ar=Array.from(buttons);
ar.forEach(button => {button.addEventListener('click', (f) =>{
    if(f.target.innerHTML== '='){
        str=eval(str);
        input.value=str;
    }

    else if(f.target.innerHTML== 'AC'){
        str="";
        input.value=str;
    }

    else if(f.target.innerHTML== 'DEL'){
        str=str.substring(0,str.length-1);
        input.value=str;
    }

    else{
        str=str+f.target.innerHTML;
        input.value=str;
    }


})})