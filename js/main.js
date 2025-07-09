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
const currentHue = getComputedStyle(document.documentElement).getPropertyValue('--hue');

colors.forEach((color) => {
  const colorHue = color.style.getPropertyValue('--hue');

  if (colorHue === currentHue.trim()) {
    color.classList.add('active-color');
    color.innerHTML = '<i class="ri-check-line"></i>';
  } else {
    color.classList.remove('active-color');
    color.innerHTML = '';
  }
});

// Evento al hacer clic en un color
colors.forEach((color) => {
  color.addEventListener('click', () => {
    const selectedHue = color.style.getPropertyValue('--hue');

    document.documentElement.style.setProperty('--hue', selectedHue);
    localStorage.setItem('selected-color', selectedHue); // Guardar si lo quieres para después

    colors.forEach((c) => {
      c.classList.remove('active-color');
      c.innerHTML = '';
    });

    color.classList.add('active-color');
    color.innerHTML = '<i class="ri-check-line"></i>';
  });
});

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
  projectCards.forEach((card) => {
    card.style.display = "block";
  });
});

/* ===================================  RESUME ========================================== */
const accordionItems = document.querySelectorAll(".resume-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".resume-header"),
        content = item.querySelector(".resume-content"),
        icon = item.querySelector(".resume-icon i");

  header.addEventListener("click", () => {
    const isOpen = item.classList.toggle("accordion-open");

    // Expandir o colapsar el contenido
    content.style.height = isOpen ? content.scrollHeight + "px" : "0";

    // Cambiar el ícono
    icon.className = isOpen ? "ri-subtract-line" : "ri-add-line";

    // Cerrar los demás ítems abiertos
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains("accordion-open")) {
        otherItem.classList.remove("accordion-open");
        otherItem.querySelector(".resume-content").style.height = "0";
        otherItem.querySelector(".resume-icon i").className = "ri-add-line";
      }
    });
  });
});

/* ===================================  TESTIMONIALS ========================================== */

var servicesSwiper = new Swiper('.testimonials-swiper', {
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

/* ===================================  CONTACT ========================================== */
const form = document.getElementById("contact-form");
  const responseMessage = document.getElementById("form-response");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const res = await fetch("https://formsubmit.co/ajax/marlenemsanchez06@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      responseMessage.textContent = "¡Mensaje enviado correctamente!";
      responseMessage.classList.add("show");
      form.reset();
    } else {
      responseMessage.textContent = "Ups... hubo un error. Intenta de nuevo.";
      responseMessage.classList.add("show");
      responseMessage.style.color = "red";
    }

    setTimeout(() => {
      responseMessage.classList.remove("show");
    }, 4000);
  });
/* ===================================  change backgroud header ========================================== */

const scrollHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 20 ? header.classList.add('bg-header') 
  : header.classList.remove('bg-header');
}

window.addEventListener('scroll', scrollHeader);

/* =================================== Remove menu mobile ========================================== */
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    navToggle.classList.remove('animate-toggle');
  });
});




