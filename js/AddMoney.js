// card-1 start------1
document.getElementById('Donate-btn1').addEventListener('click',function(){
  
   const add_con= AddInputFile('input-filed1');
   const Sub_card=SubtractionCard('Main_maney');
   if(isNaN(add_con)){
    alert('Please try again');
      return;
   }

   if(Sub_card < add_con){
      alert('NOt Enought money');
        return;
     }
   const box1=AddCard('coya-Add1');
   const Add_Money=box1+add_con;
   document.getElementById('coya-Add1').innerText=Add_Money;
   
   const Sub_money=Sub_card - add_con;
   document.getElementById('Main_maney').innerText=Sub_money;
   const noakhali =document.getElementById('Noakhali').innerText;
   History(add_con, noakhali);
 
   
 }
 )
// card-1 End------1


// card-2----start------2-->
document.getElementById('Btn_2').addEventListener('click',function(){
   const add_con= AddInputFile('input_text_2');
   const Sub_card=SubtractionCard('Main_maney');
   if(isNaN(add_con)){
    alert('Please try again');
      return;
   }
   if(Sub_card < add_con){
      alert('NOt Enought money');
        return;
     }
   const box1=AddCard('Amount_box-2');
   const Add_Money=box1+add_con;
   document.getElementById('Amount_box-2').innerText=Add_Money;
    const Sub_money=Sub_card - add_con;
   document.getElementById('Main_maney').innerText=Sub_money;
   const name2=document.getElementById('Feni').innerText;
   History(add_con,name2);
 }
 )
// card-2----End------2


// card-3----start------3--->
document.getElementById('btn_3').addEventListener('click',function(){
   const add_con1= AddInputFile('input_text_3');
   const Sub_card=SubtractionCard('Main_maney');
   if(isNaN(add_con1)){
    alert('Please try again');
      return;
   }

   if(Sub_card < add_con1){
      alert('NOt Enought money');
        return;
     }
   const box1=AddCard('Box_card_3');
   const Add_Money3=box1 + add_con1;
   document.getElementById('Box_card_3').innerText=Add_Money3;
   const Sub_money=Sub_card - add_con1;
   document.getElementById('Main_maney').innerText=Sub_money;

   const quota=document.getElementById('Quota').innerText;
   History(add_con1,quota);
 
   
 }
 )
// card-3----End------3

document. getElementById('blog').addEventListener('click', function(){
     window.location.href='home/index.html';
})


