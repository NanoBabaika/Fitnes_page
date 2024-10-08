// Контакты отправлены
let modal = document.getElementById('modal__send');
let btn = document.getElementById('form__btn-submit');
let btnClose = document.getElementById('closeBtn');

btn.addEventListener('click', function(e){
    e.preventDefault();    
    modal.style.display = "block";

});

btnClose.addEventListener('click', function(e) {
    modal.style.display = "none";    
});

window.addEventListener('click', function(e) {
    if(e.target == modal) {
        modal.style.display = "none";    
    }
})

// __________________________________________

// При нажатии кнопки записаться
let modalRecord = document.getElementById('recordModal');
let recordBtn = document.getElementById('signupBtn');
let recordBtnClose = document.getElementById('signupBtnClose');

recordBtn.addEventListener('click', function(e){
    e.preventDefault();    
    modalRecord.style.display = "block";

});

recordBtnClose.addEventListener('click', function(e) {
    modalRecord.style.display = "none";    
});

window.addEventListener('click', function(e) {
    if(e.target == modalRecord) {
        modalRecord.style.display = "none";    
    }
})

// отправка данных из модалки
let sendFromModal = document.getElementById('submit_from_modal');

sendFromModal.addEventListener('click', function(e){
    e.preventDefault();
    modalRecord.style.display = "none";    
    modal.style.display = "block";
});

// модальное окно из секции тренировки
let modalTraining = document.getElementById('trainingID');
let training__btns = document.querySelectorAll('.projects__btn');
let submitBtnclose = document.getElementById('modalTainingClose')

// Цилк для секции проекты
for(let i = 0; i < training__btns.length; i++) {
        training__btns[i].addEventListener('click', function(e) {
            e.preventDefault();    
            modalTraining.style.display = "block";
        })
}


submitBtnclose.addEventListener('click', function(e){
    e.preventDefault();
    modalTraining.style.display = "none";    
    modal.style.display = "block";
});


window.addEventListener('click', function(e) {
    if(e.target == modalTraining) {
        modalTraining.style.display = "none";    
    }
})

// Меню из мобильной версии 
// Находим соотв переменные 
const burgerBtn = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

// Функция проверяет наличие активного класса и если класса нет вешает его. Если класс есть наоборот удаляет
function closeOpenMenu () {
    if(mobileMenu.classList.contains('header__menu--mobile-active')){
        mobileMenu.classList.remove('header__menu--mobile-active');
    }else {
        mobileMenu.classList.add('header__menu--mobile-active');
    }
}


// Обработчик события 
burgerBtn.addEventListener('click', function() {
    closeOpenMenu();
});

// Открытие окна в мобильной версии
let modalMobile = document.getElementById('mobileModal');

modalMobile.addEventListener('click', function(e){
    e.preventDefault();    
    modalRecord.style.display = "block";
    window.scrollTo({top: 0})
});