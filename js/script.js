const burger = document.querySelector('.header__burger-menu');
const menu = document.querySelector('.header__menu');
const body = document.body;

if (burger && menu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        body.classList.toggle('_lock');
    })
}


const filter = document.querySelector('.property__filter');

if (filter) {
    const items = filter.querySelectorAll('.property__filter-block');

    items.forEach(item => {
        item.addEventListener('click', event => {
            item.querySelector('.property__filter-dropdown').classList.toggle('_active');
            item.querySelector('.property__filter-block-icon').classList.toggle('_active');
    
            if (event.target.classList.contains('property__filter-dropdown-item')) {
                item.querySelector('.property__filter-block-value').textContent = event.target.textContent;
            }
        })
    })
}


const swiper1 = new Swiper('.featured-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 1500, 
      },

      breakpoints: {
        1200: {
            slidesPerView: 5, 
        },
        992: {
            slidesPerView: 4, 
        },
        660: {
            slidesPerView: 3, 
        },
        460: {
            slidesPerView: 2, 
        }

    }
  });


const swiper2 = new Swiper('.popular-slider', {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        992: {
            slidesPerView: 3, 
        },
        660: {
            slidesPerView: 2, 
        }
    }
  });