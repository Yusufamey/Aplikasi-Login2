/*@module Login-Script */
/**
*Membuat variabel Login loginFormElement untuk tampilan form.
*@constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');

/**
*Membuat variabel Login loginFormElement untuk tampilan email.
*@constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');

/**
*Membuat variabel Login loginFormElement untuk tampilan form.
*@constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/**
*Membuat variabel expectedEmail untuk menyimpan informasi email sementara.
* @constant{string}
*/
const expectedEmail = 'admin@dicoding.com';

/**
* Membuat variabel expectedPassword untuk menyimpan informasi password sementara.
*/
const expectedPassword = 'superpassword';

/* Comment : Menambahakn aksi klik pada button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
  *Mebuat variabel email untuk menyimpan nilai email yang didapatkan saat button ditekan.
  *constant {string}
  */
  const email = inputEmailElement.value;
  
  /**
*Membuat variabel password untuk menyimpan nilai password yang didapatkan saat button ditekan.
*constant {string}
*/
  const password = inputPasswordElement.value;


  /* comment: Memastikan bahwa nilai email dan passsword sesuai dengan nilai yang tersipan.  */
  if (email == expectedEmail && password == expectedPassword) {

    /* Comment : Jika sesuai maka program akan berpindah ke halaman home. */
    goToHome();
  } else {

    /* Comment : Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah. */
    showPopUp();
  }
});
