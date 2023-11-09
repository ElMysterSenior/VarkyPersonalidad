import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

function notDefaultOptionValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = control.value === '' || control.value == null || control.value === undefined;
    return forbidden ? { 'defaultOption': { value: control.value } } : null;
  };
}

@Component({
  selector: 'app-test-personalidad',
  templateUrl: './test-personalidad.component.html',
  styleUrls: ['./test-personalidad.component.less']
})
export class TestPersonalidadComponent implements OnInit {
  testForm!: FormGroup;
  items: any[] = [
    { extrovertido: 'Emprendedor y entusiasta', introvertido: 'Reservado' },
    { extrovertido: 'Actúa y luego piensa ', introvertido: 'Piensa y luego actúa ' },
    { extrovertido: 'Piensa en voz alta', introvertido: 'Piensa en voz baja' },
    { extrovertido: 'Tiene mucha energía', introvertido: 'Energía tranquila' },
    { extrovertido: 'Prefiere hacer varias cosas a la vez', introvertido: 'Prefiere concentrarse en una cosa' },
    { extrovertido: 'Habla más que escucha', introvertido: 'Escucha más que habla' },
    { extrovertido: 'Es fácil de conocer', introvertido: ' Lleva una vida muy privada' },
    { extrovertido: 'Puede distraerse con facilidad', introvertido: 'Gran capacidad de concentración' },
    { extrovertido: 'Le gusta rodearse de gente', introvertido: 'Se siente a gusto a solas' },

  ];
  itemsSensorialIntuitivo: any[] =[ 
    { sensorial: 'Confía en la experiencia propia', intuitivo: 'Confía en sus instintos' },
    { sensorial: 'Realista, ve lo que es', intuitivo: 'Imaginativo, ve lo que podría ser' },
    { sensorial: 'Utiliza destrezas ya aprendidas', intuitivo: 'Prefiere desarrollar nuevas destrezas' },
    { sensorial: 'Prefiere instrucciones detalladas', intuitivo: 'Gusta descubrir las cosas por sí mismo' },
    { sensorial: 'Ve detalles y recuerda hechos', intuitivo: 'Percibe cualquier cosa nueva o diferente' },
    { sensorial: 'Admira soluciones prácticas', intuitivo: 'Admira ideas creativas' },
    { sensorial: 'Se concentra en hechos específicos', intuitivo: 'Tiene ideas y visión de conjunto' },
    { sensorial: 'Trabaja a un ritmo uniforme', intuitivo: 'Trabaja en ráfagas de energía' },
    { sensorial: 'Vive en el aquí y el ahora', intuitivo: 'Piensa en las implicaciones futuras' },
  ];
  itemsRacionalEmocional: any[] = [
    { racional: 'Tiende a ver defectos ajenos', emocional: 'Tiende a ver cualidades ajenas' },
    { racional: 'Se convence con la lógica', emocional: 'Se convence por sus sensaciones' },
    { racional: 'Aparenta ser frío y reservado', emocional: 'Aparenta ser cálido y amistoso' },
    { racional: 'Toma decisiones objetivamente', emocional: 'Decide por sus valores y sensaciones' },
    { racional: 'No toma las cosas personalmente', emocional: 'Toma muchas cosas personalmente' },
    { racional: 'Es motivado por la metas', emocional: 'Es motivado por el reconocimiento' },
    { racional: 'Honesto y directo', emocional: ' Diplomático y con mucho tacto' },
    { racional: 'Valora la honestidad y la justicia', emocional: 'Valora la armonía y la compasión' },
    { racional: 'Argumenta o debate por diversión', emocional: 'Evita discusiones y confiictos' },

  ];
  itemsCalificadorPerceptivo: any[] = [
    { calificador: 'Trabajar primero, jugar después', perceptivo: 'Jugar primero, trabajar después' },
    { calificador: 'Prefiere terminar proyectos', perceptivo: 'Prefiere empezar proyectos' },
    { calificador: 'Se siente a gusto llevando sus agendas', perceptivo: 'Desea la libertad de la espontaneidad' },
    { calificador: 'Le gusta tomar decisiones', perceptivo: 'Pospone algunas decisiones, si puede' },
    { calificador: 'Presta atención al tiempo, puntualidad', perceptivo: 'Menos consciente del tiempo, impuntual' },
    { calificador: 'Le gusta hacer y atenerse a planes', perceptivo: 'Le gusta la fexibilidad en los planes' },
    { calificador: 'Quiere que las cosas se decidan', perceptivo: 'Quiere tener opciones abiertas' },
    { calificador: 'Serio y convencional', perceptivo: 'Relajado y poco convencional' },
    { calificador: 'Justifica la mayoría de las reglas', perceptivo: 'Cuestiona muchas reglas' },
  ];
  
  
  
 
  puntos: number[] = [0,1, 2, 3, 4, 6, 7, 8, 9, 10]; // Agrega la lista de puntos del 1 al 10
  totalExtrovertidos = 0;
  totalIntrovertidos = 0;
  totalSensorial = 0;
  totalIntuitivo = 0;
  totalRacional = 0;
  totalEmocional = 0;
  totalCalificador = 0;
  totalPerceptivo = 0;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    let group: { [key: string]: FormControl } = {};
  
    // Extrovertidos e Introvertidos
    this.items.forEach((item, index) => {
      group[`extrovertidoPuntos${index}`] = new FormControl('', [Validators.required, notDefaultOptionValidator()]);
      group[`introvertidoPuntos${index}`] = new FormControl('', [Validators.required, notDefaultOptionValidator()]);
    });
  
    // Sensorial y Intuitivo
    this.itemsSensorialIntuitivo.forEach((item, index) => {
      group[`sensorialPuntos${index}`] = new FormControl('', [Validators.required, notDefaultOptionValidator()]);
      group[`intuitivoPuntos${index}`] = new FormControl('', [Validators.required, notDefaultOptionValidator()]);
    });
  
    // Racional y Emocional
    this.itemsRacionalEmocional.forEach((item, index) => {
      group[`racionalPuntos${index}`] = new FormControl('', [Validators.required, notDefaultOptionValidator()]);
      group[`emocionalPuntos${index}`] = new FormControl('',[Validators.required, notDefaultOptionValidator()]);
    });
  
    // Calificador y Perceptivo
    this.itemsCalificadorPerceptivo.forEach((item, index) => {
      group[`calificadorPuntos${index}`] = new FormControl('', [Validators.required, notDefaultOptionValidator()]);
      group[`perceptivoPuntos${index}`] = new FormControl('',  [Validators.required, notDefaultOptionValidator()]);
    });
  
    
    this.testForm = this.fb.group(group);

    // Observar cambios en el formulario
    this.testForm.valueChanges.subscribe(val => {
      this.calcularResultados();
      
    
    });
  }

  calcularResultados() {
    this.totalExtrovertidos = this.items
      .map((item, index) => this.testForm.get(`extrovertidoPuntos${index}`)?.value || 0)
      .reduce((acc, current) => acc + Number(current), 0);

    this.totalIntrovertidos = this.items
      .map((item, index) => this.testForm.get(`introvertidoPuntos${index}`)?.value || 0)
      .reduce((acc, current) => acc + Number(current), 0);


      this.totalSensorial = this.items
      .map((item, index) => this.testForm.get(`sensorialPuntos${index}`)?.value || 0)
      .reduce((acc, current) => acc + Number(current), 0);

    this.totalIntuitivo = this.items
      .map((item, index) => this.testForm.get(`intuitivoPuntos${index}`)?.value || 0)
      .reduce((acc, current) => acc + Number(current), 0);

      this.totalRacional = this.items
      .map((item, index) => this.testForm.get(`racionalPuntos${index}`)?.value || 0)
      .reduce((acc, current) => acc + Number(current), 0);

    this.totalEmocional = this.items
      .map((item, index) => this.testForm.get(`emocionalPuntos${index}`)?.value || 0)
      .reduce((acc, current) => acc + Number(current), 0);

      this.totalCalificador = this.items
      .map((item, index) => this.testForm.get(`calificadorPuntos${index}`)?.value || 0)
      .reduce((acc, current) => acc + Number(current), 0);

    this.totalPerceptivo = this.items
      .map((item, index) => this.testForm.get(`perceptivoPuntos${index}`)?.value || 0)
      .reduce((acc, current) => acc + Number(current), 0);
  }

  obtenerResultados() {
    const resultados = {
      extrovertidoIntrovertido: this.totalExtrovertidos !== this.totalIntrovertidos ? (this.totalExtrovertidos > this.totalIntrovertidos ? 'E' : 'I') : (Math.random() < 0.5 ? 'E' : 'I'),
      sensorialIntuitivo: this.totalSensorial !== this.totalIntuitivo ? (this.totalSensorial > this.totalIntuitivo ? 'S' : 'N') : (Math.random() < 0.5 ? 'S' : 'N'),
      racionalEmocional: this.totalRacional !== this.totalEmocional ? (this.totalRacional > this.totalEmocional ? 'T' : 'F') : (Math.random() < 0.5 ? 'T' : 'F'),
      calificadorPerceptivo: this.totalCalificador !== this.totalPerceptivo ? (this.totalCalificador > this.totalPerceptivo ? 'J' : 'P') : (Math.random() < 0.5 ? 'J' : 'P'),
    };
  
    // Resto del código se mantiene igual
    console.log(resultados); // Muestra el objeto en la consola
  
    // Convierte el objeto de resultados en un array de iniciales
    const inicialesResultados = Object.values(resultados);
    console.log(inicialesResultados); // Muestra el array en la consola
  
    // Si necesitas el array como JSON
    const jsonResultados = JSON.stringify(inicialesResultados);
    console.log(jsonResultados); // Muestra el string JSON en la consola
  
    // Devuelve el JSON si es necesario
    return jsonResultados;
  }
  

  actualizarPuntosExtrovertidoIntrovertido(index: number, esExtrovertido: boolean) {
    const puntosExtrovertidoControl = this.testForm.get(`extrovertidoPuntos${index}`);
    const puntosIntrovertidoControl = this.testForm.get(`introvertidoPuntos${index}`);
    const puntosExtrovertido = puntosExtrovertidoControl?.value;
    const puntosIntrovertido = puntosIntrovertidoControl?.value;
    
    if (esExtrovertido) {
      const puntosComplementarios = 10 - puntosExtrovertido;
      if (puntosComplementarios !== 5) {
        puntosIntrovertidoControl?.setValue(puntosComplementarios);
      } else {
        puntosExtrovertidoControl?.setValue('');
        alert('No se permite usar el número 5. Por favor, elige otro valor.');
      }
    } else {
      const puntosComplementarios = 10 - puntosIntrovertido;
      if (puntosComplementarios !== 5) {
        puntosExtrovertidoControl?.setValue(puntosComplementarios);
      } else {
        puntosIntrovertidoControl?.setValue('');
        alert('No se permite usar el número 5. Por favor, elige otro valor.');
      }
    }
  }

  actualizarPuntosSensorialIntuitivo(index: number, esSensorial: boolean) {
    const puntosSensorialControl = this.testForm.get(`sensorialPuntos${index}`);
    const puntosIntuitivoControl = this.testForm.get(`intuitivoPuntos${index}`);
    const puntosSensorial = puntosSensorialControl?.value;
    const puntosIntuitivo = puntosIntuitivoControl?.value;
  
    if (esSensorial) {
      const puntosComplementarios = 10 - puntosSensorial;
      if (puntosComplementarios !== 5) {
        puntosIntuitivoControl?.setValue(puntosComplementarios);
      } else {
        puntosSensorialControl?.setValue('');
        alert('No se permite usar el número 5. Por favor, elige otro valor.');
      }
    } else {
      const puntosComplementarios = 10 - puntosIntuitivo;
      if (puntosComplementarios !== 5) {
        puntosSensorialControl?.setValue(puntosComplementarios);
      } else {
        puntosIntuitivoControl?.setValue('');
        alert('No se permite usar el número 5. Por favor, elige otro valor.');
      }
    }
  }
  
  actualizarPuntosRacionalEmocional(index: number, esRacional: boolean) {
    const puntosRacionalControl = this.testForm.get(`racionalPuntos${index}`);
    const puntosEmocionalControl = this.testForm.get(`emocionalPuntos${index}`);
    const puntosRacional = puntosRacionalControl?.value;
  
    if (esRacional) {
      const puntosComplementarios = 10 - puntosRacional;
      if (puntosComplementarios !== 5) {
        puntosEmocionalControl?.setValue(puntosComplementarios);
      } else {
        puntosRacionalControl?.setValue('');
        alert('No se permite usar el número 5. Por favor, elige otro valor.');
      }
    } else {
      const puntosComplementarios = 10 - puntosEmocionalControl?.value;
      if (puntosComplementarios !== 5) {
        puntosRacionalControl?.setValue(puntosComplementarios);
      } else {
        puntosEmocionalControl?.setValue('');
        alert('No se permite usar el número 5. Por favor, elige otro valor.');
      }
    }
  }
  
  actualizarPuntosCalificadorPerceptivo(index: number, esCalificador: boolean) {
    const puntosCalificadorControl = this.testForm.get(`calificadorPuntos${index}`);
    const puntosPerceptivoControl = this.testForm.get(`perceptivoPuntos${index}`);
    const puntosCalificador = puntosCalificadorControl?.value;
  
    if (esCalificador) {
      const puntosComplementarios = 10 - puntosCalificador;
      if (puntosComplementarios !== 5) {
        puntosPerceptivoControl?.setValue(puntosComplementarios);
      } else {
        puntosCalificadorControl?.setValue('');
        alert('No se permite usar el número 5. Por favor, elige otro valor.');
      }
    } else {
      const puntosComplementarios = 10 - puntosPerceptivoControl?.value;
      if (puntosComplementarios !== 5) {
        puntosCalificadorControl?.setValue(puntosComplementarios);
      } else {
        puntosPerceptivoControl?.setValue('');
        alert('No se permite usar el número 5. Por favor, elige otro valor.');
      }
    }
  }

  
  onSubmit() {
    if (this.testForm.valid) {
      
      console.log('Respuestas:', this.testForm.value);
      this.obtenerResultados();
    } else {
      // El formulario no es válido, mostrar errores
      Object.keys(this.testForm.controls).forEach(field => {
        const control = this.testForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }
}