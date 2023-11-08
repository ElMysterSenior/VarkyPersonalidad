import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-vark',
  templateUrl: './test-vark.component.html',
  styleUrls: ['./test-vark.component.less']
})
export class TestVarkComponent implements OnInit {


  
  preguntas: any[] = [
    {
      texto: 'Usted cocinará algo especial para su familia. Usted haría:',
      opciones: [
        'Preguntar a amigos por sugerencias.',
        'Dar una vista al recetario por ideas de las fotos.',
        'Usar un libro de cocina donde usted sabe hay una buena receta.',
        'Cocinar algo que usted sabe sin la necesidad de instrucciones.'
      ]
    },
    {
      texto: 'Cuando usted está planeando un viaje, usted:',
      opciones: [
        'Hace una lista de lugares y actividades que quiere experimentar.',
        'Busca en la web los mejores destinos y ofertas.',
        'Piensa en los destinos donde amigos y familiares han disfrutado.',
        'Prefiere ir a lugares que ya conoce y ama.'
      ]
    },
    {
      texto: 'Si tuviera que elegir un nuevo hobby, usted:',
      opciones: [
        'Escogería algo que ha visto que otros disfrutan.',
        'Investigaría varias opciones antes de elegir una.',
        'Se uniría a un club o grupo para obtener ideas y apoyo.',
        'Reanudaría un hobby que le ha gustado en el pasado.'
      ]
    },
    {
      texto: 'Usted ha terminado una competencia o un examen y le gustaría tener alguna retroalimentación. Te gustaría retroalimentarte',
      opciones: [
        'Usando descripciones escritas de los resultados.',
        'Usando ejemplos de lo que usted ha hecho.',
        'Usando gráficos que muestran lo que usted ha logrado.',
        'De alguienque habla por usted.'
      ]
    },
    {
      texto: 'Usted tiene un problema con la rodilla. Usted preferiría que el doctor:',
      opciones: [
        'Use un modelo de plástico y te enseñe lo que está mal.',
        'Te de una página de internet o algo para leer.',
        'Te describa lo qué está mal.',
        'Te enseñe un diagrama de lo que está mal.'
      ]
    },
    {
      texto: 'Usted está a punto de comprar una cámara digital o teléfono móvil. ¿Aparte del precio qué más influirá en tomar tu decisión?',
      opciones: [
        'Probándolo.',
        'Es un diseño moderno y se mira bien.',
        'Leer los detalles acerca de sus características.',
        'El vendedor me informa acerca de sus características.'
      ]
    },
    {
      texto: 'Usted no está seguro cómo se deletrea trascendente o tracendente. ¿Ud. qué haría?',
      opciones: [
        'Escribir ambas palabras en un papel y escojo una.',
        'Pienso cómo suena cada palabra y escojo una.',
        'Busco la palabra en el diccionario.',
        'Veo la palabra en mi mente y escojo según como la veo.'
      ]
    },
    {
      texto: 'Me gustan páginas de Internet que tienen:',
      opciones: [
        'Interesantes descripciones escritas, listas y explicaciones.',
        'Diseño interesante y características visuales.',
        'Cosas que con un click pueda cambiar o examinar.',
        'Canales donde puedo oír música, programas de radio o entrevistas.'
      ]
    },
    {
      texto: 'Usted está planeando unas vacaciones para un grupo. Usted quiere alguna observación de ellos acerca del plan. Usted qué haría:',
      opciones: [
        'Usar un mapa o página de Internet para mostrarles los lugares.',
        'Describir algunos de los puntos sobresalientes.',
        'Darles una copia del itinerario impreso.',
        'Llamarles por teléfono o mandar mensaje por correo electrónico.'
      ]
    },
    {
      texto: 'Usted está usando un libro, disco compacto o página de Internet para aprender a tomar fotos con su cámara digital nueva. Usted le gustaría tener:',
      opciones: [
        'Una oportunidad de hacer preguntas acerca de la cámara y sus características.',
        'Esquemas o diagramas que muestran la cámara y la función de cada parte.',
        'Ejemplos de buenas y malas fotos y cómo mejorarlas.',
        'Aclarar las instrucciones escritas con listas y puntos sobre qué hacer.'
      ]
    },
    {
      texto: 'Usted quiere aprender un programa nuevo, habilidad o juego en una computadora. Usted qué hace:',
      opciones: [
        'Hablar con gente que sabe acerca del programa.',
        'Leer las instrucciones que vienen en el programa.',
        'Seguir los esquemas en el libro que acompaña el programa.',
        'Usar los controles o el teclado.'
      ]
    },
    {
      texto: 'Estás ayudando a alguien que quiere ir al aeropuerto, al centro del pueblo o la estación del ferrocarril. Usted hace:',
      opciones: [
        'Va con la persona.',
        'Anote las direcciones en un papel (sin mapa).',
        'Les dice las direcciones.',
        'Les dibuja un croquis o les da un mapa.'
      ]
    },
    {
      texto: 'Recuerde un momento en su vida en que Ud. aprendió a hacer algo nuevo. Trate de evitar escoger una destreza física, como andar en bicicleta. Ud. Aprendió mejor:',
      opciones: [
        'Viendo una demostración.',
        'Con las instrucciones escritas, en un manual o libro de texto.',
        'Escuchando a alguien explicarlo o haciendo preguntas.',
        'Con esquemas y diagramas o pistas visuales.'
      ]
    },
    {
      texto: 'Ud. prefiere un maestro o conferencista que use:',
      opciones: [
        'Demostraciones, modelos o sesiones prácticas.',
        'Folletos, libros o lecturas.',
        'Diagramas, esquemas o gráficos.',
        'Preguntas y respuestas, pláticas y oradores invitados.'
      ]
    },
    {
      texto: 'Un grupo de turistas quiere aprender acerca de parques o reservas naturales en su área. Usted:',
      opciones: [
        'Los acompaña a un parque o reserva natural.',
        'Les da un libro o folleto acerca de parques o reservas naturales.',
        'Les da una plática acerca de parques o reservas naturales.',
        'Les muestra imágenes de Internet, fotos o libros con dibujos.'
      ]
    },
    {
      texto: 'Usted tiene que hacer un discurso para una conferencia u ocasión especial. Usted hace:',
      opciones: [
        'Escribir un discurso y aprendérselo leyéndolo varias veces.',
        'Reunir muchos ejemplos e historias para hacer el discurso verdadero y práctico.',
        'Escribir algunas palabras claves y practicar el discurso repetidas veces.',
        'Hacer diagramas o esquemas que te ayudan a explicar las cosas.'
      ]
    }
  ];


  respuestas: { [key: string]: boolean[] } = {};


  
  getLetra(index: number): string {
    return String.fromCharCode(97 + index);
  }


  constructor() {
    this.inicializarRespuestas();
  }

  inicializarRespuestas() {
    for (let i = 1; i <= this.preguntas.length; i++) {
      this.respuestas[`pregunta${i}`] = [false, false, false, false];
    }
  }

  onCheckboxChange(event: Event, numeroPregunta: number, letra: string) {
    const inputElement = event.target as HTMLInputElement;
    const letraIndex = letra.charCodeAt(0) - 97; // Convertir letra a índice (0-3)
    this.respuestas[`pregunta${numeroPregunta}`][letraIndex] = inputElement.checked;
  }

  // Método para enviar las respuestas
  enviarRespuestas() {
    let respuestasParaEnviar: { [key: number]: string[] | null } = {};
  
    // Iterar sobre cada pregunta
    for (let i = 0; i < this.preguntas.length; i++) {
      // Clave es simplemente el número de la pregunta (1-indexed)
      const preguntaKey = i + 1;
      // Inicializar un arreglo para almacenar las respuestas seleccionadas
      const seleccionadas: string[] = [];
  
      // Verificar cada opción para la pregunta actual
      for (let j = 0; j < this.respuestas[`pregunta${preguntaKey}`].length; j++) {
        // Si la opción está seleccionada, agregar la letra correspondiente al arreglo
        if (this.respuestas[`pregunta${preguntaKey}`][j]) {
          seleccionadas.push(this.getLetra(j));
        }
      }
  
      // Asignar el arreglo de respuestas seleccionadas o null si está vacío
      respuestasParaEnviar[preguntaKey] = seleccionadas.length > 0 ? seleccionadas : null;
    }
  
    // Convertir el objeto a una cadena JSON
    const respuestasJSON = JSON.stringify(respuestasParaEnviar);
    console.log(respuestasJSON);
  
    // Aquí puedes hacer algo con el JSON, como enviarlo a un servidor
  }
  
  
  

  ngOnInit(): void {
  }

}
