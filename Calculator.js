let display=document.getElementById("inputbox");
let btns=document.querySelectorAll("button");
let string='';
console.log(btns);//protype is NodeList and convert into Array from() method and then to variable so that work on every btn and  we can save time from each btn call

let btnsArrays= Array.from(btns);
console.log(btnsArrays);// convert into Array from() method





btnsArrays.forEach((btn) => {
    console.log(btn);//then to variable so that work on every btn and  we can save time from each btn call

    btn.addEventListener("click",(evnt) =>{
console.log(evnt.target);//show on which evnt we target

if(evnt.target.innerHTML == 'DEL'){
string =string.substring(0,string.length-1);
display.value=string;
}

else if(evnt.target.innerHTML == 'AC')
    {
        string='';
        display.value=string;
    }
    else if(evnt.target.innerHTML == '=')
        {
            string=eval(string)
            display.value=string;//eval convert string into number and also do calculations of the code
        }

else{
    string +=evnt.target.innerHTML;//show on which evnt we target dispaly on input screen + show to continueity of numbers or operationss
display.value=string;
}

    })

});

