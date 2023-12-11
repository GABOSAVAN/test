// funcion para el manejo de los componente del menu
document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.btn a');
  
    function scrollToTarget(targetId) {
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
  
        // Remover la clase 'selected' de todos los elementos
        navItems.forEach(navItem => navItem.classList.remove('selected'));
        // Agregar la clase 'selected' al elemento correspondiente
        const selectedItem = document.querySelector(`.btn a[href="#${targetId}"]`);
        if (selectedItem) {
          selectedItem.classList.add('selected');
        }
  
        // Actualizar la URL en el historial
        history.pushState(null, null, `#${targetId}`);
      }
    }
  
    // Función para detectar la sección visible al cargar la página
    function detectVisibleSection() {
      const scrollPosition = window.scrollY;
  
      // Detectar la posición del scroll y actualizar la clase 'selected'
      navItems.forEach(item => {
        const targetId = item.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          const elementOffset = targetElement.offsetTop;
          const elementHeight = targetElement.offsetHeight;
          const buffer = 5; // Ajusta este valor según sea necesario
  
          if (scrollPosition >= elementOffset - buffer && scrollPosition < elementOffset + elementHeight - buffer) {
            // Remover la clase 'selected' de todos los elementos
            navItems.forEach(navItem => navItem.classList.remove('selected'));
            // Agregar la clase 'selected' al elemento correspondiente
            item.classList.add('selected');
          }
        }
      });
    }
  
    // Llamar a la función para detectar la sección visible al cargar la página
    detectVisibleSection();
  
    navItems.forEach(item => {
      item.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToTarget(targetId);
      });
    });
  
    window.addEventListener('scroll', function () {
      // Llamar a la función para detectar la sección visible durante el scroll
      detectVisibleSection();
    });
  
    // Manejar la navegación hacia secciones usando la URL actual
    window.addEventListener('popstate', function () {
      const targetId = window.location.hash.substring(1);
      scrollToTarget(targetId);
    });
  });

//   animacion de matrix

const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'GABRIEL NAVAS BACKEND DEVELOPER DATE ENGINEER DATA SCIENCE PAYTHON JAVASCRIPT$$%&{}[]';
const latin = 'GABRIEL NAVAS BACKEND DEVELOPER DATE ENGINEER DATA SCIENCE PAYTHON JAVASCRIPT';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 10;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 5;
}

const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.1)';
	context.fillRect(5, 5, canvas.width, canvas.height);
	
	context.fillStyle = '#0F0';
	context.font = fontSize + 'px monospace';

	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.99){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};

setInterval(draw, 60);

// efecto writting de la seccion about

var typed = new Typed('#element', {
    strings: ["Hello,^1500 I'm Gabriel Navas ^1500", "I'm a software developer ^1500", "and data engineer ^1000",
               "If you're looking to take your business ^2000"," to the next level ^1000", "do not hesitate to contact me ^2000",
               "Hola,^1500 Soy Gabriel Navas ^1500", "soy desarrollador de software ^1500", "e ingeniero de datos ^1000",
               "Si quieres llevar tu empresa ^700", "al siguiente nivel ^700", "no dudes en contactarme^2000" ],
    typeSpeed: 50,
    loop:true,
    smartBackspace: true,
    startDelay: 3000,
   
  });

// efecto writting en barra de menu
var typed1 = new Typed('#element1', {
  strings: ["Gabriel Navas" ],
  typeSpeed: 100,
  startDelay: 2000,
  // loop:true,
//   smartBackspace: true, 
});




