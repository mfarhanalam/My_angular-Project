import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PostmethodService } from '../../config/postmethod.service';

import { Observable, Subject } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { DomSanitizer, SafeUrl, } from '@angular/platform-browser';
import imageCompression from 'browser-image-compression';
import * as faceapi from 'face-api.js';
import { Kyc } from '../../apppojo/models/Kyc';
@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrl: './kyc.component.scss'
})
export class KycComponent implements OnInit, AfterViewInit {
  language: any;
  currentStepIndex = 0;
  selectedUserDocument: string | null = null;
  kycRequest: Kyc = new Kyc();
  faceTrigger = new Subject<void>();
  faceCaptureTrigger$: Observable<void> = this.faceTrigger.asObservable();
  faceImage: string | null = null;
  isProcessing = false;

  // Webcam variables
  public showWebcam = true;
  private trigger: Subject<void> = new Subject<void>();
  public webcamImage: WebcamImage | null = null;

  // Cropping variables
  public imageBase64: string = '';  // Holds captured image as Base64
  public croppedImage: string = '';

  imageUrl: string = ''; // The URL of the image to be processed
  detectedFace: any = null; // Store the detected face bounding box



  @ViewChild('overlayCanvas') overlayCanvas!: ElementRef<HTMLCanvasElement>;

  // Webcam trigger


  // private trigger: Subject<void> = new Subject<void>();
  // public imageChangedEvent: any = null;
  // public croppedImage: string | null = null;

  constructor(private postService: PostmethodService, private router: Router, private translateService: TranslateService,
    private sanitizer: DomSanitizer
  ) {

  }

  async ngOnInit() {
    this.language = await this.postService.getLanguageTemp();
  }

  async ngAfterViewInit() {
    await faceapi.nets.tinyFaceDetector.loadFromUri('/assets/models'); // Load face model
  }
  selectDocument(document: string) {
    this.selectedUserDocument = this.selectedUserDocument === document ? null : document;
  }


  authenticateDocumentAndMoveNext() {
    // if (!this.selectedUserDocument || this.selectedUserDocument.trim() === '') {
    //   this.postService.notifyUser(this.translateService.instant('Please Select Any Document'), 'error');
    // } else {
    //   this.nextStep();
    // }
    this.nextStep();
  }


  validateAddressAndMoveNext(kycPrm: Kyc) {
    // console.log('Function called with:', kycPrm);

    // if (!kycPrm.streetAddress || kycPrm.streetAddress.trim() === '') {
    //   console.log('Missing streetAddress');
    //   this.postService.focusAndScrollToElement('streetAddress');
    //   this.postService.notifyUser(this.translateService.instant('streetAddressIsRequired'), 'error');
    // } else if (!kycPrm.apartment || kycPrm.apartment.trim() === '') {
    //   console.log('Missing apartment');
    //   this.postService.focusAndScrollToElement('apartment');
    //   this.postService.notifyUser(this.translateService.instant('apartmentIsRequired'), 'error');
    // } else if (!kycPrm.buildingName || kycPrm.buildingName.trim() === '') {
    //   console.log('Missing buildingName');
    //   this.postService.focusAndScrollToElement('buildingName');
    //   this.postService.notifyUser(this.translateService.instant('buildingNameIsRequired'), 'error');
    // } else if (!kycPrm.city || kycPrm.city.trim() === '') {
    //   console.log('Missing city');
    //   this.postService.focusAndScrollToElement('city');
    //   this.postService.notifyUser(this.translateService.instant('cityIsRequired'), 'error');
    // } else if (!kycPrm.postalCode || kycPrm.postalCode == null) {
    //   console.log('Missing postalCode');
    //   this.postService.focusAndScrollToElement('postalCode');
    //   this.postService.notifyUser(this.translateService.instant('postalCodeIsRequired'), 'error');
    // } else {
    //   console.log('✅ All fields filled, moving to next step');
    //   this.nextStep();
    // }
    this.nextStep();
  }



  validateDocumentAndMoveNext() {

    this.nextStep();
  }


  facingMode: string = 'user';
  nextStep() {
    // ✅ Ensure front camera is set
    this.facingMode = 'user'; // Always open front camera

    if (this.currentStepIndex < this.steps.length - 1) {
      this.steps[this.currentStepIndex].status = 'completed';
      this.currentStepIndex++;
      this.steps[this.currentStepIndex].status = 'active';
      this.postService.focusAndScrollToElement(this.steps[this.currentStepIndex].label);
    }
  }


  previousStep() {
    if (this.currentStepIndex > 0) {
      this.steps[this.currentStepIndex].status = 'upcoming';
      this.currentStepIndex--;
      this.steps[this.currentStepIndex].status = 'active';
      this.postService.focusAndScrollToElement(this.steps[this.currentStepIndex].label);
    }
  }

  onBack() {
    const hasData = Object.values(this.kycRequest).some(value => value && value.trim && value.trim() !== '');
    if (hasData) {
      const confirmation = confirm("You have unsaved changes. Are you sure you want to go back?");
      if (confirmation) {
        this.router.navigateByUrl('/home');
      }
    } else {
      this.router.navigateByUrl('/home');
    }
  }



  navigateTo(pagename: string) {
    if (!!pagename) {
      this.router.navigateByUrl(pagename);
    }
  }



  // Trigger snapshot
  public triggerSnapshot(): void {
    this.trigger.next();
  }

  // Handle the webcam image capture
  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.imageBase64 = webcamImage.imageAsDataUrl; // Convert to Base64 for cropper
    this.showWebcam = false; // Hide webcam after capturing
  }

  // Observable for capturing the snapshot
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  // Handle cropped image
  public imageCropped(event: any) {
    this.croppedImage = event.base64;
  }

  // Retake Picture
  public retakePicture() {
    this.webcamImage = null;
    this.imageBase64 = '';
    this.croppedImage = '';
    this.showWebcam = true;
  }

  // Download Cropped Image
  public downloadCroppedImage() {
    const link = document.createElement('a');
    link.href = this.croppedImage;
    link.download = 'cropped-document.png';
    link.click();
  }




  triggerCapture(): void {
    this.isProcessing = true;
    setTimeout(() => {
      this.faceTrigger.next(); // Capture after delay
      this.nextStep();
    }, 2000);
  }

  async captureFace(image: WebcamImage) {
    const img = new Image();
    img.src = image.imageAsDataUrl;
    img.onload = async () => {
      const detections = await faceapi.detectSingleFace(img, new faceapi.TinyFaceDetectorOptions());
      if (detections) {
        this.cropFace(image.imageAsDataUrl, detections.box);
      } else {
        alert('No face detected! Please try again.');
        this.isProcessing = false;
      }
    };
  }

  cropFace(imageDataUrl: string, box: faceapi.Box) {
    const canvas = this.overlayCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = imageDataUrl;

    img.onload = () => {
      canvas.width = box.width;
      canvas.height = box.height;
      ctx?.drawImage(img, box.x, box.y, box.width, box.height, 0, 0, box.width, box.height);
      this.faceImage = canvas.toDataURL(); // Save cropped face
      this.isProcessing = false;
    };
  }

  steps = [
    { label: 'document', displayName: 'Document', status: 'active' },
    { label: 'address', displayName: 'Address', status: 'upcoming' },
    { label: 'scandocument', displayName: 'Scan Document', status: 'upcoming' },
    { label: 'scanface', displayName: 'Scan Face', status: 'upcoming' },
    { label: 'success', displayName: 'Success', status: 'upcoming' },
  ];

  documents = [
    'Smart Card ID',
    'ID Booklet',
    'domestic assport',
    'Foreign Passport'
  ];
}


