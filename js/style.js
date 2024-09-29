document.getElementById('Donation').addEventListener('click',function(){
    Button("main");
    bgColor('Do')
   
})

document.getElementById('History').addEventListener('click',function(){
    Button('history');
    bgColor('dp');
})

document.getElementById('blog').addEventListener('click',function(){
    window.location.href='https://diponkor99.github.io/Assignment-5/home.html'
  })


  document.getElementById('card-button').addEventListener('click',function(){
    const btn=document.getElementById('my_modal_1');
    btn.classList.add('hidden')
  })

  

  
