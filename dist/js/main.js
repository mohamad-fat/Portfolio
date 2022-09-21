//In Home
const Menunav = document.querySelector('.menu-nav')
const MenuBtn = document.querySelector('.menu-btn')
const MenuList = document.querySelector('.menu-nav-list')
const MenuItem = document.querySelectorAll('.menu-nav-item')
const BtnX = document.querySelector('.menu-btn-burger')

MenuBtn.addEventListener('click', toogleMenu)
let menuOpen = false

function toogleMenu() {
  if (!menuOpen) {
    BtnX.classList.add('open')
    Menunav.classList.add('open')
    MenuList.classList.add('open')
    MenuItem.forEach((item) => item.classList.add('open'))
    menuOpen = true
  } else {
    BtnX.classList.remove('open')
    Menunav.classList.remove('open')
    MenuList.classList.remove('open')
    MenuItem.forEach((item) => item.classList.remove('open'))

    menuOpen = false
  }
}

// //In about
$(document).ready(function () {
  let showExtra = false;
  $('.about-table-container-extra').click(function () {
    if (!showExtra) {
      $(this).parent().children().first().addClass('toggle');
      $(this).children().first().addClass('animation');
      showExtra = true
    } else {
      $(this).parent().children().first().removeClass('toggle');
      $(this).children().first().removeClass('animation');
      showExtra = false
    }
  })
})

//In projects
$(document).ready(function () {
    $('.description').click(function() {
        $(this).parents('.projects-item').children().eq(1).children().eq(1).slideUp(function() {
            $(this).parents('.projects-item').children().eq(1).children().eq(2).slideUp(function() {
                $(this).parents('.projects-item').children().eq(1).children().eq(0).slideToggle();
            });
        });
    });

    $('.link').click(function() {
        $(this).parents('.projects-item').children().eq(1).children().eq(0).slideUp(function() {
            $(this).parents('.projects-item').children().eq(1).children().eq(2).slideUp(function() {
                $(this).parents('.projects-item').children().eq(1).children().eq(1).slideToggle();
            });
        });
    });

    $('.lang').click(function () {
        $(this).parents('.projects-item').children().eq(1).children().eq(0).slideUp(function() {
            $(this).parents('.projects-item').children().eq(1).children().eq(1).slideUp(function() {
                $(this).parents('.projects-item').children().eq(1).children().eq(2).slideToggle();
            });
        });
    });
});

