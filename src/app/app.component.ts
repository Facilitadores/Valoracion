import { Component } from '@angular/core';
import { FacilitadorService } from './services/facilitador.service';
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

  celulas: any[] = [  ];

  selectioncelula() {
    return this.facilitadorService.getFacilitadores(this.selectioncelulas). 
    subscribe(
      (data:any)=>
      {
       // console.log(data.facilitador);
        this.facilitador = data.facilitador
        //this.ngOnInit();
//          location.reload();

      });
    }
    
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

  respuesta1:any =
  {
    facilitador:null, usuario:null,observaP1: null, pre1Pi1: null, 
    pre2Pi1: null,  pre3Pi1: null,promedioP1:null
  } 

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

  constructor(private facilitadorService:FacilitadorService)
  {   }
    ngOnInit() {
      this.facilitadorService.getCelulas().subscribe((data) => 
    {
      this.celulas = data;
      //console.log(this.celulas)
      //console.log(this.selectioncelulas)
    })
   /* this.facilitadorService.getPreguntas().subscribe((data) => 
    {
      this.celulas = data;
    })*/
  }

  guardarP1(){
//   console.log(this.respuesta1);

   var pre1Pi1 = this.respuesta1.pre1Pi1
   var pre2Pi1 = this.respuesta1.pre2Pi1 
   var pre3Pi1 = this.respuesta1.pre3Pi1
   var promedio = ((parseInt(pre1Pi1) + parseInt(pre2Pi1) + parseInt(pre3Pi1))/3).toFixed(2)
   
   this.respuesta1.promedioP1 = promedio
   this.respuesta1.celula = this.selectioncelulas
   this.respuesta1.facilitador = this.facilitador
   this.facilitadorService.guardar(this.respuesta1).subscribe((data) => 
    {
      this.showR1=true;

      if (this.respuesta1.promedioP1 == 1) {
        this.valoracion1 = "Novato"
     } else if(this.respuesta1.promedioP1 > 1 && this.respuesta1.promedioP1 <= 2){
        this.valoracion1 = "Competente"
     }else if(this.respuesta1.promedioP1 > 2 && this.respuesta1.promedioP1 <= 3){
      this.valoracion1 = "Experto"
    }else if(this.respuesta1.promedioP1 > 3 ){
      this.valoracion1 = "Maestro"
    }
console.log(this.respuesta1);
console.log(this.valoracion1);
  })
}

  guardarP2(){
  //  console.log(this.respuesta2);

    var pre1Pi2 = this.respuesta2.pre1Pi2
    var pre2Pi2 = this.respuesta2.pre2Pi2 
    var pre3Pi2 = this.respuesta2.pre3Pi2
    var promedio = ((parseInt(pre1Pi2) + parseInt(pre2Pi2) + parseInt(pre3Pi2))/3).toFixed(2)
    
    this.respuesta2.promedioP2 = promedio
    this.respuesta2.usuario = this.respuesta1.usuario
    this.respuesta2.celula = this.selectioncelulas

    this.facilitadorService.guardarP2(this.respuesta2).subscribe((data) => 
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
    this.respuesta3.celula = this.respuesta1.celula
    this.respuesta3.usuario = this.respuesta1.usuario


    this.facilitadorService.guardarP3(this.respuesta3).subscribe((data) => 
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
    this.respuesta4.celula = this.respuesta1.celula
    this.respuesta4.usuario = this.respuesta1.usuario


    this.facilitadorService.guardarP4(this.respuesta4).subscribe((data) => 
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
    this.respuesta5.celula = this.respuesta1.celula
    this.respuesta5.usuario = this.respuesta1.usuario


    this.facilitadorService.guardarP5(this.respuesta5).subscribe((data) => 
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
    this.respuesta6.celula = this.respuesta1.celula
    this.respuesta6.usuario = this.respuesta1.usuario


    this.facilitadorService.guardarP6(this.respuesta6).subscribe((data) => 
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
    this.respuestageneral.suma = (parseFloat(this.respuesta1.promedioP1) + parseFloat(this.respuesta2.promedioP2) + parseFloat(this.respuesta3.promedioP3)+ parseFloat(this.respuesta4.promedioP4)+ parseFloat(this.respuesta5.promedioP5)+ parseFloat(this.respuesta6.promedioP6))
    console.log(this.respuesta1.promedioP1+"-"+this.respuesta2.promedioP2+"-"+this.respuesta3.promedioP3+"-"+this.respuesta4.promedioP4+"-"+this.respuesta5.promedioP5+"-"+this.respuesta6.promedioP6);
    console.log(this.respuestageneral.suma);
   this.respuestageneral.promedio_general = (parseFloat(this.respuestageneral.suma)/6).toFixed(2);;
   console.log(this.respuestageneral.promedio_general);
    // var promedio_general = (parseInt(suma)/6).toFixed(2);
   // this.respuestageneral.promedio_general = promedio_general;
   // console.log("Suma es: "+ suma +" y este "+ promedio_general);
   // this.respuestageneral.promedio_general = promedio
    this.respuestageneral.celula = this.respuesta1.celula
    this.respuestageneral.usuario = this.respuesta1.usuario
    
    
    this.facilitadorService.guardarGeneral(this.respuestageneral).subscribe((data) => 
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
   
   
}
