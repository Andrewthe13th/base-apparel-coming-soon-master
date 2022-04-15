function ValidateEmail(inputText)
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.value.match(mailformat)){
  console.log("Valid email address!");;
  return true;
  }
  else{
  console.log("You have entered an invalid email address!");
  return false;
  }
}

var emailButton = document.querySelector(".input-email button")

emailButton.addEventListener('click', (e) => {
  e.preventDefault();
  let emailText = document.getElementById("email");
  if(!ValidateEmail(emailText)){
    let warningMessage = document.querySelector('.email p')
    let warningImage = document.querySelector('.warning')
    warningMessage.style.display = 'block';
    warningImage.style.display = 'block';
  } 
  else{
    let warningMessage = document.querySelector('.email p')
    let warningImage = document.querySelector('.warning')
    warningMessage.style.display = 'none';
    warningImage.style.display = 'none';
  }
})

