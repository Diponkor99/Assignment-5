function Button(id){
    document.getElementById('main').classList.add('hidden');
    document.getElementById('history').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden');

}


// Button---color---Start--->   
document.getElementById("dp").style.backgroundColor = "transparent";
function bgColor(id){
    document.getElementById("Do").style.backgroundColor = "transparent";;
    document.getElementById("dp").style.backgroundColor = "transparent";;
    document.getElementById(id).style.backgroundColor='';
}
// Button---color---End

// Input---money---From--start--->
function AddInputFile(element){
    const input =document.getElementById(element).value;
    const input_float=parseFloat(input);
    return input_float;
}
// Input---money---From--End


// Add-----Money---card---Start--->
function AddCard(id){
    const Add_money=document.getElementById(id).innerText;
    const float_AddMoney=parseFloat(Add_money);
    return float_AddMoney;
}
// Add-----Money---card---End

// Subtraction-----Money---card--start----->
function SubtractionCard(id){
    const Sub=document.getElementById(id).innerText;
    const Float_Sub=parseFloat(Sub);
    return Float_Sub;
}
// Subtraction-----Money---card--End


// History---function--start
function History(Tk, NAME){
  const div= document.createElement('div');
  div.style.boxShadow='2xl';
  div.classList.add('bg-stone-300')
  div.style.padding='20px'
  div.style.marginBottom='20px'
  div.style.border="2px solid black"
  div.style.borderRadius='10px'
  const date=new Date();
  div.innerHTML=`
  <h1> ${Tk} Taka is ${NAME} </h1>
  <br>
  <p>Date:${date}</P>
  `
  
        
document.getElementById('history').appendChild(div);

}
// History---function--End