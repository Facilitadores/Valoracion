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
  tipo_celula: string = null;
  devops1: string = null;
  devops2: string = null;
  devops3: string = null;
  devops4: string = null;
  devops5: string = null;
  arquitect1: string = null;
  arquitect2: string = null;
  arquitect3: string = null;
  arquitect4: string = null;
  arquitect5: string = null;
  estandar1: string = null;
  estandar2: string = null;
  estandar3: string = null;
  estandar4: string = null;
  aplicaciones1: string = null;
  aplicaciones2: string = null;
  aplicaciones3: string = null;
  aplicaciones4: string = null;
  aplicaciones5: string = null;
  hymsoluciones1 : string = null;
  hymsoluciones2 : string = null;
  hymsoluciones3 : string = null;
  hymsoluciones4 : string = null;
  usd_usm1 : string = null;
  usd_usm2 : string = null;
  usd_usm3 : string = null;
  usd_usm4 : string = null;
  mejores_precticas1 : string = null;
  mejores_precticas2 : string = null;
  mejores_precticas3 : string = null;
  mejores_precticas4 : string = null;
  orienta_negocio1 : string = null;
  orienta_negocio2 : string = null;
  orienta_negocio3 : string = null;
  orienta_negocio4 : string = null;

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
              (preguntas:any)=>
              {
               console.log(preguntas);
               this.facilitador = preguntas[0][2]
               this.madurez = preguntas[0][1]
               this.tipo_celula = preguntas[0][4]
               this.devops1 = preguntas[0][5]
               this.devops2 = preguntas[0][6]
               this.devops3 = preguntas[0][7]
               this.devops4 = preguntas[0][8]
               this.devops5 = preguntas[0][9]
               this.arquitect1 = preguntas[0][10]
               this.arquitect2 = preguntas[0][11]
               this.arquitect3 = preguntas[0][12]
               this.arquitect4 = preguntas[0][13]
               this.arquitect5 = preguntas[0][14]
               this.estandar1 = preguntas[0][15]
               this.estandar2 = preguntas[0][16]
               this.estandar3 = preguntas[0][17]
               this.estandar4 = preguntas[0][18]
               this.aplicaciones1 = preguntas[0][19]
               this.aplicaciones2 = preguntas[0][20]
               this.aplicaciones3 = preguntas[0][21]
               this.aplicaciones4 = preguntas[0][22]
               this.aplicaciones5 = preguntas[0][23]

               this.hymsoluciones1 = preguntas[0][24]
               this.hymsoluciones2 = preguntas[0][25]
               this.hymsoluciones3 = preguntas[0][26]
               this.hymsoluciones4 = preguntas[0][27]
               this.usd_usm1 = preguntas[0][28]
               this.usd_usm2 = preguntas[0][29]
               this.usd_usm3 = preguntas[0][30]
               this.usd_usm4 = preguntas[0][31]
               this.mejores_precticas1 = preguntas[0][32]
               this.mejores_precticas2 = preguntas[0][33]
               this.mejores_precticas3 = preguntas[0][34]
               this.mejores_precticas4 = preguntas[0][35]
               this.orienta_negocio1 = preguntas[0][36]
               this.orienta_negocio2 = preguntas[0][37]
               this.orienta_negocio3 = preguntas[0][38]
               this.orienta_negocio4 = preguntas[0][39]

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

            resultpilar1: string = null;
            resultpilar4: string = null;
            resultFinalpilar2: string = null;
            resultFinalpilar3: string = null;
            resultadoFinal: string = null;
            resultadovaloracion: string = null;
            min: number = null;

     
            Pilar1() {
            if (this.Pilar1Comportamiento.comportamientonum == 1) {
               this.resultpilar1 = "Novato"
                this.Pilar1Comportamiento.comportamiento = "*Generalmente los miembros del equipo se comportan de manera independiente, pueden ser motivados, pero en la mayoría de los casos están mal informados sobre temas y los objetivos del equipo. *Con frecuencia los miembros del equipo pueden exhibir muestras de incertidumbre y ansiedad.";
              } else if (this.Pilar1Comportamiento.comportamientonum == 3) {
                this.resultpilar1 = "Técnico"
                this.Pilar1Comportamiento.comportamiento = "*Generalmente los miembros del equipo muestran sus propias personalidades mientras enfrentan ideas y perspectivas de cada uno de los otros miembros. *La frustración o los desacuerdos sobre metas, expectativas, papeles y responsabilidades se expresan abiertamente.";
              }else if (this.Pilar1Comportamiento.comportamientonum == 4) {
                this.resultpilar1 = "Ejecutor"
                this.Pilar1Comportamiento.comportamiento = "*Frecuentemente los miembros del equipo ajustan su comportamiento el uno al del otro mientras que desarrollan acuerdos de hacer el trabajo de forma más natural y fluida. *Generalmente los miembros del equipo hacen esfuerzo consciente de resolver los problemas y de lograr armonía en el grupo. Los niveles de motivación han aumentado.";
              }else if (this.Pilar1Comportamiento.comportamientonum == 5) {
                this.resultpilar1 = "Ágil"
                this.Pilar1Comportamiento.comportamiento = "*Los miembros del equipo tienen una comprensión clara sobre lo que se requiere de ellos a nivel de tarea. Ellos son ahora competentes, autónomos y manejan la toma de decisiones sin necesidad de supervisión. *La actitud 'Yo puedo hacerlo' es visible. *Se hacen ofertas para ayudar a otros.";
              }
              this.Pilar1Comportamiento.celula = this.selectioncelulas
              this.EquiposService.guardarPilar1(this.Pilar1Comportamiento).subscribe((data) => 
                  {  })
              this.showPilar2=true;
            }

            Pilar2() {
             console.log(this.Pilar2Tecnico);
              if (this.Pilar2Tecnico.tecniconumeDevops == 20) {
                this.Pilar2Tecnico.tecnicoDevops = this.devops1;
              } else if (this.Pilar2Tecnico.tecniconumeDevops == 40) {
                this.Pilar2Tecnico.tecnicoDevops = this.devops2;
              }else if (this.Pilar2Tecnico.tecniconumeDevops == 60) {
                this.Pilar2Tecnico.tecnicoDevops = this.devops3;
              }else if (this.Pilar2Tecnico.tecniconumeDevops == 80) {
                this.Pilar2Tecnico.tecnicoDevops = this.devops4;
              }else {
                this.Pilar2Tecnico.tecnicoDevops = this.devops5;
              }
          //    this.Pilar2Tecnico.resultpilar2 = (parseFloat(this.Pilar2Tecnico.tecniconumeDevops)*0.5).toFixed(2);
              this.Pilar2Tecnico.tecniconumeDevops = (parseFloat(this.Pilar2Tecnico.tecniconumeDevops)*0.5).toFixed(2);
              if (this.Pilar2Tecnico.arquitectnumeDevops == 20) {
                this.Pilar2Tecnico.arquitectDevops = this.arquitect1;
              } else if (this.Pilar2Tecnico.arquitectnumeDevops == 40) {
                this.Pilar2Tecnico.arquitectDevops =  this.arquitect2;
              }else if (this.Pilar2Tecnico.arquitectnumeDevops == 60) {
                this.Pilar2Tecnico.arquitectDevops =  this.arquitect3;
              }else if (this.Pilar2Tecnico.arquitectnumeDevops == 80) {
                this.Pilar2Tecnico.arquitectDevops =  this.arquitect4;
              }else {
                this.Pilar2Tecnico.arquitectDevops = this.arquitect5;
              }
            //  this.Pilar2Tecnico.resultpilar2 = parseFloat(this.Pilar2Tecnico.resultpilar2) + (parseFloat(this.Pilar2Tecnico.arquitectnumeDevops)*0.17).toFixed(2);
              this.Pilar2Tecnico.arquitectnumeDevops = (parseFloat(this.Pilar2Tecnico.arquitectnumeDevops)*0.17).toFixed(2);
              if (this.Pilar2Tecnico.estandaresnume == 25) {
                this.Pilar2Tecnico.estandares = this.estandar1;
              } else if (this.Pilar2Tecnico.estandaresnume == 50) {
                this.Pilar2Tecnico.estandares = this.estandar2;
              }else if (this.Pilar2Tecnico.estandaresnume == 75) {
                this.Pilar2Tecnico.estandares = this.estandar3;
              }else {
                this.Pilar2Tecnico.estandares = this.estandar4;
              }
          //    this.Pilar2Tecnico.resultpilar2 = parseFloat(this.Pilar2Tecnico.resultpilar2)  + (parseFloat(this.Pilar2Tecnico.estandaresnume)*0.17).toFixed(2);
              this.Pilar2Tecnico.estandaresnume = (parseFloat(this.Pilar2Tecnico.estandaresnume)*0.17).toFixed(2);
              if (this.Pilar2Tecnico.aplicacionesnume == 20) {
                this.Pilar2Tecnico.aplicaciones = this.aplicaciones1;
              } else if (this.Pilar2Tecnico.aplicacionesnume == 40) {
                this.Pilar2Tecnico.aplicaciones = this.aplicaciones2;
              }else if (this.Pilar2Tecnico.aplicacionesnume == 60) {
                this.Pilar2Tecnico.aplicaciones = this.aplicaciones3;
              }else if (this.Pilar2Tecnico.aplicacionesnume == 80) {
                this.Pilar2Tecnico.aplicaciones = this.aplicaciones4;
              }else {
                this.Pilar2Tecnico.aplicaciones = this.aplicaciones5;
              }
            //  this.Pilar2Tecnico.resultpilar2 = parseFloat(this.Pilar2Tecnico.resultpilar2) + (parseFloat(this.Pilar2Tecnico.aplicacionesnume)*0.16).toFixed(2);
              
              this.Pilar2Tecnico.aplicacionesnume = (parseFloat(this.Pilar2Tecnico.aplicacionesnume)*0.16).toFixed(2);

              this.Pilar2Tecnico.resultpilar2 = (parseFloat(this.Pilar2Tecnico.aplicacionesnume) + parseFloat(this.Pilar2Tecnico.estandaresnume) + parseFloat(this.Pilar2Tecnico.arquitectnumeDevops) + parseFloat(this.Pilar2Tecnico.tecniconumeDevops));
              
      
            if (this.Pilar2Tecnico.resultpilar2 <= 25) {
                this.Pilar2Tecnico.resultpilar2 = 1
                this.resultFinalpilar2 = "Novato"
            } else if(this.Pilar2Tecnico.resultpilar2 > 25 && this.Pilar2Tecnico.resultpilar2 <= 40){
              this.Pilar2Tecnico.resultpilar2 = 2
              this.resultFinalpilar2 = "Gestionador"
            }else if(this.Pilar2Tecnico.resultpilar2 > 40 && this.Pilar2Tecnico.resultpilar2 <= 60){
              this.Pilar2Tecnico.resultpilar2 = 3
              this.resultFinalpilar2 = "Técnico"
            }else if(this.Pilar2Tecnico.resultpilar2 > 60 && this.Pilar2Tecnico.resultpilar2 <= 80){
              this.Pilar2Tecnico.resultpilar2 = 4
              this.resultFinalpilar2 = "Ejecutor"
            }else if (this.Pilar2Tecnico.resultpilar2 > 80){
                  this.Pilar2Tecnico.resultpilar2 = 5
                  this.resultFinalpilar2 = "Ágil"
            }     
              this.Pilar2Tecnico.celula = this.selectioncelulas
             this.EquiposService.guardarPilar2(this.Pilar2Tecnico).subscribe((data) => 
                  {  })
              this.showPilar3=true;
            }

            Pilar3() {
              console.log(this.Pilar3Procesos);
              if (this.Pilar3Procesos.proceso_hy_mnume == 25) {
                this.Pilar3Procesos.proceso_hym = this.hymsoluciones1;
              } else if (this.Pilar3Procesos.proceso_hy_mnume == 50) {
                this.Pilar3Procesos.proceso_hym = this.hymsoluciones2;
              }else if (this.Pilar3Procesos.proceso_hy_mnume == 75) {
                this.Pilar3Procesos.proceso_hym = this.hymsoluciones3;
              }else {
                this.Pilar3Procesos.proceso_hym = this.hymsoluciones4;
              }
              this.Pilar3Procesos.proceso_hy_mnume = (parseFloat(this.Pilar3Procesos.proceso_hy_mnume)*0.25).toFixed(2);
              if (this.Pilar3Procesos.usd_usmnume == 25) {
                this.Pilar3Procesos.usd_usm = this.usd_usm1;
              } else if (this.Pilar3Procesos.usd_usmnume == 50) {
                this.Pilar3Procesos.usd_usm = this.usd_usm2;
              }else if (this.Pilar3Procesos.usd_usmnume == 75) {
                this.Pilar3Procesos.usd_usm = this.usd_usm3;
              }else {
                this.Pilar3Procesos.usd_usm = this.usd_usm4;
              }
              this.Pilar3Procesos.usd_usmnume = (parseFloat(this.Pilar3Procesos.usd_usmnume)*0.25).toFixed(2);
              if (this.Pilar3Procesos.practicasnume == 25) {
                this.Pilar3Procesos.practicas = this.mejores_precticas1;
              } else if (this.Pilar3Procesos.practicasnume == 50) {
                this.Pilar3Procesos.practicas = this.mejores_precticas2;
              }else if (this.Pilar3Procesos.practicasnume == 75) {
                this.Pilar3Procesos.practicas = this.mejores_precticas3;
              }else {
                this.Pilar3Procesos.practicas = this.mejores_precticas4;
              }
              this.Pilar3Procesos.practicasnume = (parseFloat(this.Pilar3Procesos.practicasnume)*0.25).toFixed(2);
              if (this.Pilar3Procesos.negocionume == 25) {
                this.Pilar3Procesos.negocio = this.orienta_negocio1;
              } else if (this.Pilar3Procesos.negocionume == 50) {
                this.Pilar3Procesos.negocio = this.orienta_negocio2;
              }else if (this.Pilar3Procesos.negocionume == 75) {
                this.Pilar3Procesos.negocio = this.orienta_negocio3;
              }else {
                this.Pilar3Procesos.negocio = this.orienta_negocio4;
              }
              this.Pilar3Procesos.negocionume = (parseFloat(this.Pilar3Procesos.negocionume)*0.25).toFixed(2);

              this.Pilar3Procesos.resultpilar3 = (parseFloat(this.Pilar3Procesos.negocionume) + parseFloat(this.Pilar3Procesos.practicasnume) + parseFloat(this.Pilar3Procesos.usd_usmnume) + parseFloat(this.Pilar3Procesos.proceso_hy_mnume));
              
           if (this.Pilar3Procesos.resultpilar3 <= 25) {
                this.Pilar3Procesos.resultpilar3 = 1
                this.resultFinalpilar3 = "Novato"
            } else if(this.Pilar3Procesos.resultpilar3 > 25 && this.Pilar3Procesos.resultpilar3 <= 40){
              this.Pilar3Procesos.resultpilar3 = 2
              this.resultFinalpilar3 = "Gestionador"
            }else if(this.Pilar3Procesos.resultpilar3 > 40 && this.Pilar3Procesos.resultpilar3 <= 60){
              this.Pilar3Procesos.resultpilar3 = 3
              this.resultFinalpilar3 = "Técnico"
            }else if(this.Pilar3Procesos.resultpilar3 > 60 && this.Pilar3Procesos.resultpilar3 <= 80){
              this.Pilar3Procesos.resultpilar3 = 4
              this.resultFinalpilar3 = "Ejecutor"
            }else if(this.Pilar3Procesos.resultpilar3 > 80){
              this.Pilar3Procesos.resultpilar3 = 5 
              this.resultFinalpilar3 = "Ágil"
          }
              this.Pilar3Procesos.celula = this.selectioncelulas
            this.EquiposService.guardarPilar3(this.Pilar3Procesos).subscribe((data) => 
                   {  })
              this.showPilar4=true;

            }

            Pilar4() {
              console.log(this.Pilar4Agilismo);
              if (this.Pilar4Agilismo.agilismonum == 1) {
                this.resultpilar4 = "Novato"
                this.Pilar4Agilismo.agilismo = "El equipo: Conoce los conceptos básicos del marco de trabajo, pero no entiende el propósito.* Necesita indicaciones precisas de un líder/jefe para ejecutar tareas. ";
              } else if (this.Pilar4Agilismo.agilismonum == 3) {
                this.resultpilar4 = "Técnico"
                this.Pilar4Agilismo.agilismo = "El equipo:* Ejecuta las ceremonias de forma adecuada y autónoma.* Adquiere y cumplen los compromisos.* Nivel de auto-organización medio. Aun requieren de instrucciones y acompañamiento para el logro de objetivos.";
              }else if (this.Pilar4Agilismo.agilismonum == 4) {
                this.resultpilar4 = "Ejecutor"
                this.Pilar4Agilismo.agilismo = "El equipo: * Tiene claro el propósito de cada ceremonia. * Están orientado a la generación de valor para la organización. * El equipo es auto-organizado y orientado al logro. * Fácil adaptación al cambio ( ingreso de nuevas historias, entre otros).";
              }else if (this.Pilar4Agilismo.agilismonum == 5)  {
                this.resultpilar4 = "Ágil"
                this.Pilar4Agilismo.agilismo = "* El nivel de madurez Ejecutor ya está adoptado totalmente por todos los integrantes del equipo. * Equipo inspirador. * Movilizador del cambio en la organización. *Promotor de la agilidad con otros equipos. * La auto-organización es natural al interior del equipo. * El equipo impacta positivamente a todo el ecosistema con el que interactúan.";
              }
              this.Pilar4Agilismo.celula = this.selectioncelulas
             this.EquiposService.guardarPilar4(this.Pilar4Agilismo).subscribe((data) => 
                  {  })
                    this.showFinalizar=true;
            }

            resultadofinal() {
            return this.EquiposService.resultadofinal(this.selectioncelulas). 
            subscribe(
              (data:any)=>
              {
               this.resultadoFinal = data

               var min=this.resultadoFinal[0][0]

               for(var i = 0; i < this.resultadoFinal[0].length; i++)
                      {
                        if(min>this.resultadoFinal[0][i])
                        {
                          min=this.resultadoFinal[0][i];
                        }
                      }
                      
                      this.min = parseInt(min);
                      if (this.min == 1) {
                        this.resultadovaloracion = "Novato"
                      } else if (this.min == 2) {
                        this.resultadovaloracion = "Gestionador"
                      } else if (this.min == 3) {
                        this.resultadovaloracion = "Técnico"
                      } else if (this.min == 4) {
                        this.resultadovaloracion = "Ejecutor"
                      } else 
                        this.resultadovaloracion = "Ágil"

                        console.log(this.min); 
                        console.log(this.resultpilar1);
                        console.log(this.resultFinalpilar2);
                        console.log(this.resultFinalpilar3);
                        console.log(this.resultpilar4);
                        console.log(this.resultadovaloracion);
                   });

              
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
    var promedio = ((parseFloat(pre1Pi2) + parseFloat(pre2Pi2) + parseFloat(pre3Pi2))/3).toFixed(2)
    
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
    var promedio = ((parseFloat(pre1Pi3) + parseFloat(pre2Pi3))/2).toFixed(2)
    
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
    var promedio = ((parseFloat(pre1Pi4) + parseFloat(pre2Pi4) + parseFloat(pre3Pi4))/3).toFixed(2)
    
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
    var promedio = ((parseFloat(pre1Pi5) + parseFloat(pre2Pi5) + parseFloat(pre3Pi5))/3).toFixed(2)
    
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
    var promedio = ((parseFloat(pre1Pi6) + parseFloat(pre2Pi6) + parseFloat(pre3Pi6))/3).toFixed(2)
    
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
    // var promedio_general = (parseFloat(suma)/6).toFixed(2);
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
