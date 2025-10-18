AOS.init();

const contHabilidades = document.getElementById('cont-habilidades');
const contProyectos = document.getElementById('cont-proyectos');
let habilidades = [];
let proyectos = [];

document.addEventListener('DOMContentLoaded', () => {
  fetch("assets/data/habilidades.json")

    .then(response => response.json())

    .then(data => {
      habilidades = data;

      mostrarHabilidades();
    })

    .catch(error => {
      console.error("No se cargó el archivo habilidades.json", error)
    })

  fetch("assets/data/proyectos.json")

    .then(response => response.json())

    .then(data => {
      proyectos = data;

      mostrarProyectos();
    })

    .catch(error => {
      console.error("No se cargó el archivo proyectos.json", error)
    })
})

function mostrarHabilidades() {
  habilidades.forEach((habilidad) => {
    const contHabilidad = document.createElement('div');
    contHabilidad.classList.add('habilidad');

    const img = document.createElement('img');
    img.src = habilidad.imagen;
    img.setAttribute('alt', 'HTML');

    const porcentaje = document.createElement('span');
    porcentaje.classList.add('nivel');
    porcentaje.textContent = habilidad.nivel;

    const nombreTec = document.createElement('p');
    nombreTec.textContent = habilidad.habilidad;

    contHabilidades.appendChild(contHabilidad);
    contHabilidad.appendChild(img);
    contHabilidad.appendChild(porcentaje);
    contHabilidad.appendChild(nombreTec);
  })
}

// ESTO ES PARA ASEGURAR QUE CARGUEN LAS IMÁGENES PRIMERO ANTES QUE EL SLICK PARA QUE EL CARRUSEL FUNCIONE CORRECTAMENTE
setTimeout(() => {
  if ($('.habilidades-slider').hasClass('slick-initialized')) {
    $('.habilidades-slider').slick('unslick');
  }

  $('.habilidades-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}, 200);


$('.slider-proyectos').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});