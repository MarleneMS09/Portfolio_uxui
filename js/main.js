/* ==================MENU =========================  */



const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle');

/* Menu Show - hidden */

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('animate-toggle')
});


/* =============================  SERVICES SWIPER  ===========================================*/

var servicesSwiper = new Swiper('.services-swiper', {
  spaceBetween: 32,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1208: {
      slidesPerView: 3,
    },
  }
});




/* ===================== STYLE SWITCHER ====================== */
const styleSwitcher = document.getElementById('style-switcher'),
switcherToggle = document.getElementById('switcher-toggle'),
switcherClose = document.getElementById('switcher-close');

/* ===================== Switcher Show ====================== */
switcherToggle.addEventListener('click', () => {
 styleSwitcher.classList.add('show-switcher');
})

/* ===================== Switcher Hidden ====================== */
switcherClose.addEventListener('click', () => {
 styleSwitcher.classList.remove('show-switcher');
})

/* ===================== Theme Colors ====================== */
const colors = document.querySelectorAll('.style-switcher-color');
colors.forEach((color) => {
    color.onclick = () => {
        const activeColor = color.style.getPropertyValue('--hue');
        colors.forEach((c) => c.classList.remove('active-color'));
        color.classList.add('active-color');

        document.documentElement.style.setProperty('--hue', activeColor);
    };
})

/* ===================== LIGHT/DARK MODE ====================== */
let currentTheme = 'light';
document.body.className = currentTheme;

document.querySelectorAll('input[name="body-theme"]').forEach((input) => {
    input.addEventListener('change', () => {
        if (input.value === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    });
});


/* ====================== Saved theme ======================== */

const savedTheme = localStorage.getItem('selected-theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  document.getElementById('dark-theme').checked = true;
} else {
  document.body.classList.remove('dark');
  document.getElementById('light-theme').checked = true;
}


/* ====================  Manually theme ======================== */
document.querySelectorAll('input[name="body-theme"]').forEach((input) => {
  input.addEventListener('change', () => {
    if (input.value === 'dark') {
      document.body.classList.add('dark');
      localStorage.setItem('selected-theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('selected-theme', 'light');
    }
  });
});


/* --=============================FILTER PORTFOLIO ======================--- */
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".work-item");
  const projectCards = document.querySelectorAll(".mix");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Actualiza la clase activa
      filterButtons.forEach((btn) => btn.classList.remove("active-work"));
      button.classList.add("active-work");

      const filter = button.getAttribute("data-filter");

      projectCards.forEach((card) => {
        if (filter === "all" || card.classList.contains(filter.replace(".", ""))) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Mostrar todos los proyectos al cargar
  projectCards.forEach((card) => {
    card.style.display = "block";
  });
});

