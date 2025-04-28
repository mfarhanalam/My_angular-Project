import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Html5Qrcode } from 'html5-qrcode';

@Component({
  selector: 'app-scanner',
  standalone: false,
  templateUrl: './scanner.component.html',
  styleUrl: './scanner.component.scss'
})

export class ScannerComponent implements OnInit {

  private html5QrcodeScanner: Html5Qrcode;
  private uploadedFile: File | null = null;
  scannedMessage: string | null = null;
  isTorchOn = false;
  stream: MediaStream | null = null;
  track: MediaStreamTrack | null = null;


  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.html5QrcodeScanner = new Html5Qrcode("qr-reader");
    this.startScanner();
    // this.startScanner();
  }

  // Start the camera scanner
  startScanner() {
    const qrCodeSuccessCallback = (decodedText: string, decodedResult: any) => {
      // console.log(`Code matched = ${decodedText}`, decodedResult);
      this.scannedMessage = decodedText; // Set the scanned message
      this.html5QrcodeScanner.stop();
    };

    const qrCodeErrorCallback = (errorMessage: string) => {
      // console.error(`QR Code scan error: ${errorMessage}`);
    };

    const config = { fps: 20, qrbox: { width: 250, height: 250 } };

    this.html5QrcodeScanner.start(
      { facingMode: "environment" }, // Use the rear camera
      config,
      qrCodeSuccessCallback,
      qrCodeErrorCallback
    ).catch((err: any) => {
      // console.error("Unable to start scanning", err);
    });
  }

  // Stop the camera scanner
  stopScanner() {
    this.html5QrcodeScanner.stop()
      .then(() => {
        console.log("QR Code scanning stopped.");
      })
      .catch((err: any) => {
        console.error("Unable to stop scanning", err);
      });
  }

  // Handle file upload
  handleFileUpload(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.uploadedFile = inputElement.files[0];
      this.scanUploadedImage();
    }
  }

  // Scan the uploaded image
  scanUploadedImage() {

    if (!this.uploadedFile) {
      alert("Please upload an image first.");
      return;
    }

    this.html5QrcodeScanner.scanFile(this.uploadedFile, false) // false = don't show scanned image
      .then((decodedText: string) => {
        console.log(`Scanned message: ${decodedText}`);
        this.scannedMessage = decodedText; // Set the scanned message
        // window.location.href(this.scannedMessage)
      })
      .catch((err: any) => {
        console.error("Error scanning file:", err);
        alert("Failed to scan the QR code. Please ensure the image contains a valid QR code.");
      });
  }

  async toggleTorch() {
    if (!navigator.mediaDevices || !('getUserMedia' in navigator.mediaDevices)) {
      alert("Torch not supported on this device.");
      return;
    }

    try {
      if (!this.isTorchOn) {
        // Request the back camera stream
        this.stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        this.track = this.stream.getVideoTracks()[0];

        // Check if the device supports torch
        const capabilities = this.track.getCapabilities() as any; // Override TypeScript type checking
        if ('torch' in capabilities) {
          await this.track.applyConstraints({ advanced: [{ torch: true }] } as any); // Override TypeScript type
          this.isTorchOn = true;
        } else {
          alert("Torch not supported on this device.");
        }
      } else {
        // Turn off the torch
        await this.track?.applyConstraints({ advanced: [{ torch: false }] } as any);
        this.stream?.getTracks().forEach(track => track.stop());
        this.isTorchOn = false;
      }
    } catch (error) {
      console.error("Error accessing the torch:", error);
    }
  }

  onBack() {
    this.router.navigateByUrl('home');
  }
}
