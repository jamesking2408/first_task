/* 
1.free trail
2.mail check
3.start free trail
4.start your free trail
5.view free demo
*/


//1.free trail

document.querySelector("#trail").addEventListener("click", function(){
    alert ('Free trail opening..');
})

//2.mail check

const validateEmail = (text) => {
    return text.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  
  const validate = () => {
    const $result = $('#result');
    const text = $('#text').val();
    $result.text('');
  
    if(validateEmail(text)){
      $result.text(text + ' is valid.');
      $result.css('color', 'green');
    } else{
      $result.text(text + ' is invalid.');
      $result.css('color', 'red');
    }
    return false;
  }
  
  $('#text').on('input', validate);

  //3.start free trail is using css styles

  //4.start your free trail

  document.querySelector("#btn1").addEventListener("click", function(){
    location.href ="demo.html";
  })

//   view free trail demo

 document.querySelector("#btn").addEventListener("click", function(){
    location.href ="https://youtu.be/kZPX4xBq7A0";
 }) 