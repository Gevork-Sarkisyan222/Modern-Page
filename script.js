const button = document.querySelector(".login-button").addEventListener("click", clicked)

function clicked(){
    if (5 > 4) {
        alert("Вы успешно зашли в аккаунт gev@gmail.com")
    }else{
        alert('Вы ввели не верный пароль') && alert('Вы ввели не верную почту')
    }
}

const regestracion = document.querySelector(".register-label").addEventListener("click", reg)


function reg(){
    prompt("Ваше имя")
    prompt("Ваше фамилия")
    prompt("город проживания")
    prompt("электронная почта")
    prompt("придумайте пароль")
    prompt("провторите пароль")
    alert("аккаунт успешно создан")
}



const menuText = document.querySelector('.menu-navigatoion');
const menuList = document.getElementById('menuList');

menuText.addEventListener('click', function() {
  if (menuList.style.display === 'none') {
    menuList.style.display = 'block';
  } else {
    menuList.style.display = 'none';
  }
});



