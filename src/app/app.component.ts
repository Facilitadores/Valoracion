import { Component } from '@angular/core';
import { EquiposService } from './services/equipos.service';
import { FunctionCall, MethodCall } from '@angular/compiler';
import { Compiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core/src/linker/compiler';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'my-dream-app';
  selectioncelulas: string;
  facilitador : string = null;
  madurez: string = null;
  selectiondireccion: string = null;
  selectioncompoMayor: string= null;
  selectioncompoMenor: string= null;
  selectionfullstack: string= null;
  tipoValoracion: string= null;
  celula : string = null;
  compoMayor: string = null;
  compoMenor: string = null;
  fullstack: string = null;
  direccion: string = null;


  selectiondirecciones() {
    return this.EquiposService.getcompomayor(this.selectiondireccion). 
    subscribe(
      (data:any)=>
      {
       console.log(data);
        this.compoMayor = data
        //this.ngOnInit();
//          location.reload();

      });
    }

    selectioncomponenteMayor() {
      return this.EquiposService.getcompomenor(this.selectioncompoMayor). 
      subscribe(
        (data:any)=>
        {
         console.log(data);
          this.compoMenor = data
          //this.ngOnInit();
  //          location.reload();
  
        });
      }

      selectioncomponenteMenor() {
        return this.EquiposService.getfullstack(this.selectioncompoMenor). 
        subscribe(
          (data:any)=>
          {
           console.log(data);
            this.fullstack = data
          });
        }

        selecfullstack() {
          return this.EquiposService.getcelula(this.selectionfullstack). 
          subscribe(
            (data:any)=>
            {
             console.log(data);
             this.celula = data
            });
          }

          seleccelula() {
            return this.EquiposService.getfacilitador(this.selectioncelulas). 
            subscribe(
              (data:any)=>
              {
               console.log(data);
               this.facilitador = data[0][0]
               this.madurez = data[0][1]
              });
            }
          
  
            showPilar1:boolean = false;
            showPilar2:boolean = false;
            showPilar3:boolean = false;
            showPilar4:boolean = false;
            showFinalizar:boolean = false;

            Pilar1Comportamiento:any ={} 
            Pilar2Tecnico:any ={} 
            Pilar3Procesos:any ={} 
            Pilar4Agilismo:any ={}

            Pilar1() {
            if (this.Pilar1Comportamiento.comportamientonum == 1) {
                this.Pilar1Comportamiento.comportamiento = "*Generalmente los miembros del equipo se comportan de manera independiente, pueden ser motivados, pero en la mayoría de los casos están mal informados sobre temas y los objetivos del equipo. *Con frecuencia los miembros del equipo pueden exhibir muestras de incertidumbre y ansiedad.";
              } else if (this.Pilar1Comportamiento.comportamientonum == 2) {
                this.Pilar1Comportamiento.comportamiento = "*Generalmente los miembros del equipo muestran sus propias personalidades mientras enfrentan ideas y perspectivas de cada uno de los otros miembros. *La frustración o los desacuerdos sobre metas, expectativas, papeles y responsabilidades se expresan abiertamente.";
              }else if (this.Pilar1Comportamiento.comportamientonum == 3) {
                this.Pilar1Comportamiento.comportamiento = "*Frecuentemente los miembros del equipo ajustan su comportamiento el uno al del otro mientras que desarrollan acuerdos de hacer el trabajo de forma más natural y fluida. *Generalmente los miembros del equipo hacen esfuerzo consciente de resolver los problemas y de lograr armonía en el grupo. Los niveles de motivación han aumentado.";
              }else {
                this.Pilar1Comportamiento.comportamiento = "*Los miembros del equipo tienen una comprensión clara sobre lo que se requiere de ellos a nivel de tarea. Ellos son ahora competentes, autónomos y manejan la toma de decisiones sin necesidad de supervisión. *La actitud 'Yo puedo hacerlo' es visible. *Se hacen ofertas para ayudar a otros.";
              }
              this.Pilar1Comportamiento.celula = this.selectioncelulas
              this.EquiposService.guardarPilar1(this.Pilar1Comportamiento).subscribe((data) => 
                  {  })
              this.showPilar2=true;
            }

            Pilar2() {
            //  console.log(this.Pilar2Tecnico);
              if (this.Pilar2Tecnico.tecniconumeDevops == 1) {
                this.Pilar2Tecnico.tecnicoDevops = "El equipo implementa prácticas de DevOps sobre el pilar CM 'Configuration Management'.";
              } else if (this.Pilar2Tecnico.tecniconumeDevops == 2) {
                this.Pilar2Tecnico.tecnicoDevops = "El equipo implementa prácticas de DevOps sobre el pilar CI.";
              }else if (this.Pilar2Tecnico.tecniconumeDevops == 3) {
                this.Pilar2Tecnico.tecnicoDevops = "El equipo despliega continuamente sus artefactos (Pipeline CD).";
              }else if (this.Pilar2Tecnico.tecniconumeDevops == 4) {
                this.Pilar2Tecnico.tecnicoDevops = "El equipo hace RM (Release Management) de pruebas independiente al pipeline del proyecto.";
              }else {
                this.Pilar2Tecnico.tecnicoDevops = "El equipo ejecuta pruebas automatizadas integradas al pipeline del proyecto.";
              }
              if (this.Pilar2Tecnico.arquitectnumeDevops == 1) {
                this.Pilar2Tecnico.arquitectDevops = "El equipo tiene un conocimiento general de las capas de la arquitectura de la solución.";
              } else if (this.Pilar2Tecnico.arquitectnumeDevops == 2) {
                this.Pilar2Tecnico.arquitectDevops = "El equipo integra lineamientos de arquitectura de la solución con los diseños y desarrollos.";
              }else if (this.Pilar2Tecnico.arquitectnumeDevops == 3) {
                this.Pilar2Tecnico.arquitectDevops = "El equipo entiende y comprende los diseños de arquitectura de la solución.";
              }else if (this.Pilar2Tecnico.arquitectnumeDevops == 4) {
                this.Pilar2Tecnico.arquitectDevops = "El equipo tiene un Nivel medio alto, conocimientos de arquitectura de la solución. *El equipo desarrolla conocimiento en la arquitectura aplicativa del ecosistema.";
              }else {
                this.Pilar2Tecnico.arquitectDevops = "El equipo tiene un Nivel alto en conocimientos de arquitectura de la solución. *El equipo tiene conocimiento alto en escalabilidad, mantenimiento de las aplicaciones.";
              }
              if (this.Pilar2Tecnico.estandaresnume == 1) {
                this.Pilar2Tecnico.estandares = "El equipo tiene un conocimiento general de las capas de la arquitectura de la solución.";
              } else if (this.Pilar2Tecnico.estandaresnume == 2) {
                this.Pilar2Tecnico.estandares = "El equipo integra lineamientos de arquitectura de la solución con los diseños y desarrollos.";
              }else if (this.Pilar2Tecnico.estandaresnume == 3) {
                this.Pilar2Tecnico.estandares = "El equipo entiende y comprende los diseños de arquitectura de la solución.";
              }else if (this.Pilar2Tecnico.estandaresnume == 4) {
                this.Pilar2Tecnico.estandares = "El equipo tiene un Nivel medio alto, conocimientos de arquitectura de la solución. *El equipo desarrolla conocimiento en la arquitectura aplicativa del ecosistema.";
              }else {
                this.Pilar2Tecnico.estandares = "El equipo tiene un Nivel alto en conocimientos de arquitectura de la solución. *El equipo tiene conocimiento alto en escalabilidad, mantenimiento de las aplicaciones.";
              }
              if (this.Pilar2Tecnico.aplicacionesnume == 1) {
                this.Pilar2Tecnico.aplicaciones = "El equipo tiene un conocimiento mínimo (Bajo) de las aplicaciones con que se interactúa en la célula.";
              } else if (this.Pilar2Tecnico.aplicacionesnume == 2) {
                this.Pilar2Tecnico.aplicaciones = "El equipo tiene un conocimiento Medio de las aplicaciones con que se interactúa en la célula.";
              }else if (this.Pilar2Tecnico.aplicacionesnume == 3) {
                this.Pilar2Tecnico.aplicaciones = "El equipo tiene un conocimiento Medio - Alto de las aplicaciones con que se interactúa en la célula. Conoce la aplicacion y su entorno pero requiere de acompañamiento para identificar o detectar impactos con componentes externos.";
              }else if (this.Pilar2Tecnico.aplicacionesnume == 4) {
                this.Pilar2Tecnico.aplicaciones = "El equipo tiene un Nivel Alto de las aplicaciones con que se interactúa en la célula. Reconoce y domina los componentes con que se relaciona su aplicacion; puede identificar facilmente un impacto en estos componentes.";
              }else {
                this.Pilar2Tecnico.aplicaciones = "El equipo tiene un Nivel Avanzado de las aplicaciones con que se interactúa en la célula. Conocimiento alto en lenguajes de Desarrollo.  El equipo propone y lidera modificaciones o analiza  impactos que se requieran de la aplicacion propia como de temas transversales. ";
              }
              
              this.Pilar2Tecnico.celula = this.selectioncelulas
             this.EquiposService.guardarPilar2(this.Pilar2Tecnico).subscribe((data) => 
                  {  })
              this.showPilar3=true;
            }

            Pilar3() {
              console.log(this.Pilar3Procesos);
              if (this.Pilar3Procesos.proceso_hy_mnume == 1) {
                this.Pilar3Procesos.proceso_hym = "El equipo requiere interiorizar el proceso de habilitar soluciones.";
              } else if (this.Pilar3Procesos.proceso_hy_mnume == 2) {
                this.Pilar3Procesos.proceso_hym = "El equipo desarrolla mayor experticia en la ejecución del proceso habilitar soluciones, realizando pasos a producción más Ágiles.";
              }else if (this.Pilar3Procesos.proceso_hy_mnume == 3) {
                this.Pilar3Procesos.proceso_hym = "Los equipos tienen una ruta clara  sobre los procesos, son impecables y dominan los procesos que intervienen en su dia a dia para el cumplimiento de los controles Sox.";
              }else {
                this.Pilar3Procesos.proceso_hym = "Se tienen implementadas prácticas de mejora en programación y adopción de nuevas tendencias para trabajar procesos y metodología de forma más eficiente.";
              }
              if (this.Pilar3Procesos.usd_usmnume == 1) {
                this.Pilar3Procesos.usd_usm = "Tiene los accesos a las herramientas de USD y USM para buscar y gestionar ordenes de cambio.";
              } else if (this.Pilar3Procesos.usd_usmnume == 2) {
                this.Pilar3Procesos.usd_usm = "El equipo incorpora skills de proactividad en la autogestión de OC y negocia de forma fluida con los responsables de los pedidos.";
              }else if (this.Pilar3Procesos.usd_usmnume == 3) {
                this.Pilar3Procesos.usd_usm = "El equipo desarrolla mayor experticia en la gestión de pedidos USD y USM, realizando pasos a producción más Ágiles.";
              }else {
                this.Pilar3Procesos.usd_usm = "El equipo es proactivo en la autogestión de OC y negocia de forma fluida con los responsables de los pedidos USD y USM para obtener la ejecución de las mismas.";
              }
              if (this.Pilar3Procesos.practicasnume == 1) {
                this.Pilar3Procesos.practicas = "El equipo carece de una planeación conjunta con otros equipos donde tienen dependencias y tareas criticas.";
              } else if (this.Pilar3Procesos.practicasnume == 2) {
                this.Pilar3Procesos.practicas = "El equipo  trabaja con estándares y fomentan las buenas practicas de documentación de soluciones y procesos.";
              }else if (this.Pilar3Procesos.practicasnume == 3) {
                this.Pilar3Procesos.practicas = "Las entregas a ambientes productivos son impecables y en tiempo corto.Las órdenes de cambio se planean y gestionan de forma adecuada para no generar impactos en las áreas ejecutoras.";
              }else {
                this.Pilar3Procesos.practicas = "La colaboración, mejora continua, adaptación y entrega se exterioriza y los equipos empiezan a ser reconocidos por sus prácticas desde PMT y otros equipos.  Los equipos lideran espacios de formación para exponer mejores prácticas en la organización.";
              }
              if (this.Pilar3Procesos.negocionume == 1) {
                this.Pilar3Procesos.negocio = "Al equipo le interesa tener clara la trazabilidad del proceso de negocio que impacta con las soluciones desarrolladas desde su día a día.";
              } else if (this.Pilar3Procesos.negocionume == 2) {
                this.Pilar3Procesos.negocio = "El equipo identifica y propone mejoras a las necesidades del negocio, para obtener soluciones más efectivas.";
              }else if (this.Pilar3Procesos.negocionume == 3) {
                this.Pilar3Procesos.negocio = "Se tiene una visual más amplia de la solución en que se trabaja y se comienza a pensar mas allá del producto.";
              }else {
                this.Pilar3Procesos.negocio = "El equipo tiene gran conocimiento del negocio y puede aportar en la identificación de nuevas entregas de valor o la evolución de las existentes.";
              }
              this.Pilar3Procesos.celula = this.selectioncelulas
              this.EquiposService.guardarPilar3(this.Pilar3Procesos).subscribe((data) => 
                   {  })
              this.showPilar4=true;
            }

            Pilar4() {
              console.log(this.Pilar4Agilismo);
              if (this.Pilar4Agilismo.agilismonum == 1) {
                this.Pilar4Agilismo.agilismo = "El equipo: Conoce los conceptos básicos del marco de trabajo, pero no entiende el propósito.* Necesita indicaciones precisas de un líder/jefe para ejecutar tareas. ";
              } else if (this.Pilar4Agilismo.agilismonum == 2) {
                this.Pilar4Agilismo.agilismo = "El equipo:* Ejecuta las ceremonias de forma adecuada y autónoma.* Adquiere y cumplen los compromisos.* Nivel de auto-organización medio. Aun requieren de instrucciones y acompañamiento para el logro de objetivos.";
              }else if (this.Pilar4Agilismo.agilismonum == 3) {
                this.Pilar4Agilismo.agilismo = "El equipo: * Tiene claro el propósito de cada ceremonia. * Están orientado a la generación de valor para la organización. * El equipo es auto-organizado y orientado al logro. * Fácil adaptación al cambio ( ingreso de nuevas historias, entre otros).";
              }else {
                this.Pilar4Agilismo.agilismo = "* El nivel de madurez Ejecutor ya está adoptado totalmente por todos los integrantes del equipo. * Equipo inspirador. * Movilizador del cambio en la organización. *Promotor de la agilidad con otros equipos. * La auto-organización es natural al interior del equipo. * El equipo impacta positivamente a todo el ecosistema con el que interactúan.";
              }
              this.Pilar4Agilismo.celula = this.selectioncelulas
             this.EquiposService.guardarPilar4(this.Pilar4Agilismo).subscribe((data) => 
                  {  })
              this.showFinalizar=true;
            }
          
            
            informacion:any =
            {
              celula:null, facilitador:null,madurez: null, nuevamadurez: null, tipovaloracion:null, madurezNum:null
            } 



            constructor(private EquiposService:EquiposService)
            {   }
              ngOnInit() {
                this.EquiposService.getDireccion().subscribe((data) => 
              {
                this.direccion = data;
                //console.log(this.direccion)
                //console.log(this.selectioncelulas)
              })
             /* this.EquiposService.getPreguntas().subscribe((data) => 
              {
                this.celulas = data;
              })*/
            }
            
            Informacion() {

              this.informacion.celula = this.selectioncelulas
              this.informacion.facilitador = this.facilitador
              this.informacion.madurez = this.madurez
              this.informacion.tipo_valoracion = this.tipoValoracion
          
              if (this.informacion.madurez == "Novato") {
                this.informacion.madurezNum = 1
                } else if (this.informacion.madurez == "Ejecutor") {
                    this.informacion.madurezNum = 4
                } else if (this.informacion.madurez == "Gestionador") {
                  this.informacion.madurezNum = 2
                } else if (this.informacion.madurez == "Técnico") {
                  this.informacion.madurezNum = 3
                } else if (this.informacion.madurez == "Ágil") {
                  this.informacion.madurezNum = 5
                } else{
                  this.informacion.madurezNum = 0
                }
                this.showPilar1=true;  
          this.EquiposService.guardarInformacion(this.informacion).subscribe((data) => 
               {
                         
             })
             //console.log(this.informacion);
            }
    /*
  showR1:boolean = false;      
  showR2:boolean = false;
  showR3:boolean = false;
  showR4:boolean = false;
  showR5:boolean = false;
  showR6:boolean = false;
  showGeneral:boolean = false;

  valoracion1:string = null;
  valoracion2:string = null;
  valoracion3:string = null;
  valoracion4:string = null;
  valoracion5:string = null;
  valoracion6:string = null;
  valoracionGeneral:string = null;

 

  respuesta2:any =
  {
    observaP2: null, pre1Pi2: null, pre2Pi2: null, pre3Pi2: null, promedioP2:null
  } 

   respuesta3:any =
  {
    observaP3: null, pre1Pi3: null, pre2Pi3: null
  } 

  respuesta4:any =
  {
    observaP4: null, pre1Pi4: null, pre2Pi4: null, pre3Pi4: null, promedioP4:null
  } 

  respuesta5:any =
  {
    observaP5: null, pre1Pi5: null, pre2Pi5: null, pre3Pi5: null, promedioP5:null
  } 

  respuesta6:any =
  {
    observaP6: null, pre1Pi6: null, pre2Pi6: null, pre3Pi6: null, promedioP6:null
  } 

  respuestageneral:any =
  {
    fortalezas: null, oportunidades: null, promedio_general:null
  } 

 
    guardarP2(){
  //  console.log(this.respuesta2);

    var pre1Pi2 = this.respuesta2.pre1Pi2
    var pre2Pi2 = this.respuesta2.pre2Pi2 
    var pre3Pi2 = this.respuesta2.pre3Pi2
    var promedio = ((parseInt(pre1Pi2) + parseInt(pre2Pi2) + parseInt(pre3Pi2))/3).toFixed(2)
    
    this.respuesta2.promedioP2 = promedio
    this.respuesta2.celula = this.selectioncelulas

    this.EquiposService.guardarP2(this.respuesta2).subscribe((data) => 
     {
      this.showR2=true;
      if (this.respuesta2.promedioP2 == 1) {
        this.valoracion2 = "Novato"
     } else if(this.respuesta2.promedioP2 > 1 && this.respuesta2.promedioP2 <= 2){
        this.valoracion2 = "Competente"
     }else if(this.respuesta2.promedioP2 > 2 && this.respuesta2.promedioP2 <= 3){
      this.valoracion2 = "Experto"
    }else if(this.respuesta2.promedioP2 > 3 ){
      this.valoracion2 = "Maestro"
    }
    console.log(this.respuesta2);
    console.log(this.valoracion2);
     })
   }

   guardarP3(){
  //  console.log(this.respuesta3);
    
    var pre1Pi3 = this.respuesta3.pre1Pi3
    var pre2Pi3 = this.respuesta3.pre2Pi3 
    var promedio = ((parseInt(pre1Pi3) + parseInt(pre2Pi3))/2).toFixed(2)
    
    this.respuesta3.promedioP3 = promedio


    this.EquiposService.guardarP3(this.respuesta3).subscribe((data) => 
     {
      this.showR3=true;
      if (this.respuesta3.promedioP3 == 1) {
        this.valoracion3 = "Novato"
     } else if(this.respuesta3.promedioP3 > 1 && this.respuesta3.promedioP3 <= 2){
        this.valoracion3 = "Competente"
     }else if(this.respuesta3.promedioP3 > 2 && this.respuesta3.promedioP3 <= 3){
      this.valoracion3 = "Experto"
    }else if(this.respuesta3.promedioP3 > 3 ){
      this.valoracion3 = "Maestro"
    }
    console.log(this.respuesta3);
console.log(this.valoracion3);
     })
   }

   guardarP4(){
  //  console.log(this.respuesta4);
    
    var pre1Pi4 = this.respuesta4.pre1Pi4
    var pre2Pi4 = this.respuesta4.pre2Pi4 
    var pre3Pi4 = this.respuesta4.pre3Pi4
    var promedio = ((parseInt(pre1Pi4) + parseInt(pre2Pi4) + parseInt(pre3Pi4))/3).toFixed(2)
    
    this.respuesta4.promedioP4 = promedio


    this.EquiposService.guardarP4(this.respuesta4).subscribe((data) => 
     {
      this.showR4=true;
     // console.log(this.showR4);
      if (this.respuesta4.promedioP4 == 1) {
        this.valoracion4 = "Novato"
     } else if(this.respuesta4.promedioP4 > 1 && this.respuesta4.promedioP4 <= 2){
        this.valoracion4 = "Competente"
     }else if(this.respuesta4.promedioP4 > 2 && this.respuesta4.promedioP4 <= 3){
      this.valoracion4 = "Experto"
    }else if(this.respuesta4.promedioP4 > 3 ){
      this.valoracion4 = "Maestro"
    }
    console.log(this.respuesta4);
    console.log(this.valoracion4);
     })
   }

   guardarP5(){
  //  console.log(this.respuesta5);
    
    var pre1Pi5 = this.respuesta5.pre1Pi5
    var pre2Pi5 = this.respuesta5.pre2Pi5 
    var pre3Pi5 = this.respuesta5.pre3Pi5
    var promedio = ((parseInt(pre1Pi5) + parseInt(pre2Pi5) + parseInt(pre3Pi5))/3).toFixed(2)
    
    this.respuesta5.promedioP5 = promedio


    this.EquiposService.guardarP5(this.respuesta5).subscribe((data) => 
     {
      this.showR5=true;
      if (this.respuesta5.promedioP5 == 1) {
        this.valoracion5 = "Novato"
     } else if(this.respuesta5.promedioP5 > 1 && this.respuesta5.promedioP5 <= 2){
        this.valoracion5 = "Competente"
     }else if(this.respuesta5.promedioP5 > 2 && this.respuesta5.promedioP5 <= 3){
      this.valoracion5 = "Experto"
    }else if(this.respuesta5.promedioP5 > 3 ){
      this.valoracion5 = "Maestro"
    }
    console.log(this.respuesta5);
    console.log(this.valoracion5);
     })
   }

   guardarP6(){
   // console.log(this.respuesta6);
    
    var pre1Pi6 = this.respuesta6.pre1Pi6
    var pre2Pi6 = this.respuesta6.pre2Pi6 
    var pre3Pi6 = this.respuesta6.pre3Pi6
    var promedio = ((parseInt(pre1Pi6) + parseInt(pre2Pi6) + parseInt(pre3Pi6))/3).toFixed(2)
    
    this.respuesta6.promedioP6 = promedio


    this.EquiposService.guardarP6(this.respuesta6).subscribe((data) => 
     {
      this.showR6=true;
      if (this.respuesta6.promedioP6 == 1) {
        this.valoracion6 = "Novato"
     } else if(this.respuesta6.promedioP6 > 1 && this.respuesta6.promedioP6 <= 2){
        this.valoracion6 = "Competente"
     }else if(this.respuesta6.promedioP6 > 2 && this.respuesta6.promedioP6 <= 3){
      this.valoracion6 = "Experto"
    }else if(this.respuesta6.promedioP6 > 3 ){
      this.valoracion6 = "Maestro"
    }
    console.log(this.respuesta5);
    console.log(this.valoracion5);
     })
   }

   guardaGeneral(){
   // console.log(this.respuestageneral);
    this.showGeneral=true; 
   // this.respuestageneral.suma = (parseFloat(this.respuesta1.promedioP1) + parseFloat(this.respuesta2.promedioP2) + parseFloat(this.respuesta3.promedioP3)+ parseFloat(this.respuesta4.promedioP4)+ parseFloat(this.respuesta5.promedioP5)+ parseFloat(this.respuesta6.promedioP6))
  //  console.log(this.respuesta1.promedioP1+"-"+this.respuesta2.promedioP2+"-"+this.respuesta3.promedioP3+"-"+this.respuesta4.promedioP4+"-"+this.respuesta5.promedioP5+"-"+this.respuesta6.promedioP6);
    console.log(this.respuestageneral.suma);
   this.respuestageneral.promedio_general = (parseFloat(this.respuestageneral.suma)/6).toFixed(2);;
   console.log(this.respuestageneral.promedio_general);
    // var promedio_general = (parseInt(suma)/6).toFixed(2);
   // this.respuestageneral.promedio_general = promedio_general;
   // console.log("Suma es: "+ suma +" y este "+ promedio_general);
   // this.respuestageneral.promedio_general = promedio
    
    
    this.EquiposService.guardarGeneral(this.respuestageneral).subscribe((data) => 
     {
      this.showGeneral=true;

      if (this.respuestageneral.promedio_general == 1) {
        this.valoracionGeneral = "Novato"
     } else if(this.respuestageneral.promedio_general > 1 && this.respuestageneral.promedio_general <= 2){
        this.valoracionGeneral = "Competente"
     }else if(this.respuestageneral.promedio_general > 2 && this.respuestageneral.promedio_general <= 3){
      this.valoracionGeneral = "Experto"
    }else if(this.respuestageneral.promedio_general > 3 ){
      this.valoracionGeneral = "Maestro"
    }
     })
   }
   */
   
}
