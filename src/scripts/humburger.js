document.addEventListener('click', function(e) {
  
  var header = document.querySelector('#header');
  var user = document.querySelector('.user');
  
  console.log(event.target)
  header.classList.toggle('header_fullmenu');
  user.classList.toggle('user_fullmenu');
});

// document.querySelector('#humburger').addEventListener('click', function(event) {
//   var header = document.querySelector('#header');
//   console.log(event.target)

//   header.classList.toggle('header_fullmenu');
  
// });
