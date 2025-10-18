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

function mostrarProyectos() {
  proyectos.forEach((proyecto) => {
    const contTarjeta = document.createElement('div');
    contTarjeta.classList.add('card', 'tarjeta');
    contTarjeta.style.width = '18rem';

    const contFoto = document.createElement('div');
    contFoto.classList.add('cont-foto');

    const img = document.createElement('img');
    img.src = proyecto.imagen;
    img.setAttribute('alt', proyecto.titulo)

    const cuerpoTarjeta = document.createElement('div');
    cuerpoTarjeta.classList.add('card-body', 'cont-info');

    const titulo = document.createElement('h5');
    titulo.classList.add('card-title');
    titulo.textContent = proyecto.titulo;

    const tecnologias = document.createElement('p');
    tecnologias.classList.add('card-text');
    tecnologias.textContent = 'Tecnologías usadas: ' + proyecto.tecnologias;

    const btnRedireccion = document.createElement('a');
    btnRedireccion.setAttribute('href', proyecto.url);
    btnRedireccion.setAttribute('target', '_blank');
    btnRedireccion.classList.add('btn', 'button');
    btnRedireccion.textContent = 'Visitar proyecto';

    contProyectos.appendChild(contTarjeta);
    contTarjeta.appendChild(contFoto);
    contTarjeta.appendChild(cuerpoTarjeta);
    contFoto.appendChild(img);
    cuerpoTarjeta.appendChild(titulo);
    cuerpoTarjeta.appendChild(tecnologias);
    cuerpoTarjeta.appendChild(btnRedireccion);
  })
}

// ESTO ES PARA ASEGURAR QUE CARGUEN LAS IMÁGENES PRIMERO ANTES QUE EL SLICK PARA QUE EL CARRUSEL FUNCIONE CORRECTAMENTE
setTimeout(() => {
  if ($('.slider-proyectos').hasClass('slick-initialized')) {
    $('.slider-proyectos').slick('unslick');
  }

  $('.slider-proyectos').slick({
    slidesToShow: 2,
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
          infinite: true
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