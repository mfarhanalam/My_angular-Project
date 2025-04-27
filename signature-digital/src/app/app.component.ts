import { Component, ViewChild , ElementRef,OnInit } from '@angular/core';
// import { SignaturePad } from 'ngx-signaturepad';
import SignaturePad from 'signature_pad'; // Example import from a different library
import { NotifyService } from '../services/toastr/notify.service';
import {gsap} from 'gsap' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'signatureDigital'; 
  @ViewChild('signatureCanvas') signatureCanvas!: ElementRef<HTMLCanvasElement>;
  private signaturePadInstance: SignaturePad | undefined;
constructor(private notifyService:NotifyService,private elementRef: ElementRef){
  
}

ngOnInit(): void {
  this.notify();
}
notify(){
  this.notifyService.toastMessage("Fill all information","error");
}

  // ngAfterViewInit() {
  //   this.signaturePadInstance = new SignaturePad(this.signatureCanvas.nativeElement);
  // }

  clear(): void {
    if (this.signaturePadInstance?.isEmpty()){
      this.notifyService.toastMessage("Please sign","info");
     
    }
    this.signaturePadInstance?.clear();
  }

  undo(): void {
    const data = this.signaturePadInstance?.toData();
    if (this.signaturePadInstance?.isEmpty()){
      this.notifyService.toastMessage("Please sign","info");
     
    }
    if (data) {
      data.pop();
      this.signaturePadInstance?.fromData(data);
    }
  }

  redo(): void {
    const data = this.signaturePadInstance?.toData();
    if (data) {
      data.push({} as any); // Push an empty object to 'redo'
      this.signaturePadInstance?.toData();
    }
  }
  save(): void {
    const signatureData = this.signaturePadInstance?.toDataURL();
    if (signatureData) {
      // Perform operations with signatureData, e.g., save to server, display, etc.
      console.log(signatureData);
    }
  }

  ngAfterViewInit() {
    this.signaturePadInstance = new SignaturePad(this.signatureCanvas.nativeElement);
    const text = this.elementRef.nativeElement.querySelector('#head');
    const letters = text.textContent.split('');

    text.textContent = '';

    const tl = gsap.timeline();

    letters.forEach((letter: string, index: number) => { // Explicitly defining types for letter and index
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.display = 'inline-block';
      span.style.opacity = '0';

      text.appendChild(span);

      tl.to(span, {
        opacity: 1,
        y: 50,
        ease: 'bounce.out',
        duration: 0.9,
        delay: index * 0.1
      });
      gsap.to(".box", { rotation: 27, x: 100, duration: 1 });
      // target the element with a class of "green" - rotate and move TO 100px to the left over the course of 1 second. 
      gsap.to(".green", {rotation: 360, x: 100, duration: 1});
  
      // target the element with a class of "purple" - rotate and move FROM 100px to the left over the course of 1 second. 
      gsap.from(".purple", {rotation: -360, x: -100, duration: 1});
  
      // target the element with a class of "blue" - rotate and move FROM 100px to the left, TO 100px to the right over the course of 1 second. 
      gsap.fromTo(".blue", {x: -100},{rotation: 360, x: 100, duration: 1});
    });
   
  }
  

}



  // isDrwan: boolean = false;
  // private history:PointGroup[]=[];
  // private future:PointGroup[]=[];

  // @ViewChild('signature' , { static: true })
  // public signaturePad!:SignaturePadComponent;

  // public signaturePadOptions :NgSignaturePadOptions={
  //   minWidth:1,
  //   canvasWidth:500,
  //   canvasHeight:300,
  //   penColor:'black',
  //   backgroundColor:'white',
  //   dotSize:1,
  //   maxWidth:1,
  //   velocityFilterWeight:1,

  // }


  // drawComplete(event: MouseEvent | Touch) {
  //   //will be notified of szimek/signature_pad's onEnd event
  //   console.log('Completed drawing', event);
  //   console.log(this.signaturePad.toDataURL());
  //   this.isDrwan=true;
  // }

  // drawStart(event: MouseEvent | Touch) {
  //   //will be notified of szimek/signature_pad's onBegin Event
  //   console.log('Start drawing', event);
  //   this.isDrwan= true;
  // }

  // // clear() {
  // //   console.log('Clearing signature pad...');
  // //   if (this.signaturePad) {
  // //     this.signaturePad.clear();
  // //     this.isDrwan = false;
  // //     console.log('Signature pad cleared successfully.');
  // //   } else {
  // //     console.log('Signature Pad is not available yet.');
  // //   }
  // // }
  // clear() {
  //   this.history=[];
  //   this.future=[];
  //   this.signaturePad.clear();
  // }

  // redo(){
  //   if(this.history.length>=0 && this.future.length>0) {
  //     var data = this.signaturePad.toData();
  //     if(data|| data==undefined){
  //       const adddata:any = this.future.pop();
  //       data.push(adddata);

  //     }
  //     this.signaturePad.fromData(data);
  //   }
  // }
  // undo(){

  //   var data =  this.signaturePad.toData();
  //   if(data|| data==undefined){
  //     const lastStrock:any = this.history.pop();
  //     const removedStrock:any = data.pop();
  //     this.future.push(removedStrock);
  //     this.signaturePad.fromData(data)
  //   }
  // }
  
  // SavePNG(){
  //   if (this.signaturePad.isEmpty()) {
  //     return alert('Please provide a signature first')
  //   }
  //   const data = this.signaturePad.toDataURL('image/png')
  //   const link= document.createElement('a');
  //   link.href=data;
  //   link.download='signature.png';
  //   link.click();
  // }

  // SaveJPEG(){
  //   if (this.signaturePad.isEmpty()) {
  //     return alert('Please provide a signature first')
  //   }
  //   const data = this.signaturePad.toDataURL('image/png')
  //   const link= document.createElement('a');
  //   link.href=data;
  //   link.download='signature.jpeg';
  //   link.click();
  // }

  // SaveSVG(){
  //   if (this.signaturePad.isEmpty()) {
  //     return alert('Please provide a signature first')
  //   }
  //   const data = this.signaturePad.toDataURL('image/png')
  //   const link= document.createElement('a');
  //   link.href=data;
  //   link.download='signature.svg';
  //   link.click();
  // }

  // preDefinedSignatureData:PointGroup[] = [];
  // ngAfterviewInit(){
  //   this.signaturePad.set('minwidth',5);
  //   this.signaturePad.fromData(this.preDefinedSignatureData);
  //   const canvas = this.signaturePad.getCanvas();
  //   if (canvas) {
  //     const ctx=canvas.getContext('2d');
  //     if(ctx) {
  //       const text="signature____________________________";
  //       const x=20;
  //       const y=canvas.height-40;
  //       ctx.font = "16px Arial";
  //       ctx.fillStyle="black";
  //       ctx.fillText(text,x,y);
  //     }
  //   }
  // }