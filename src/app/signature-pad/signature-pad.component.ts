import {AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';
import { SignaturePadService } from '../signature-pad.service';

@Component({
  selector: 'app-signature-pad',
  templateUrl: './signature-pad.component.html',
  styleUrls: ['./signature-pad.component.css']
})
export class SignaturePadComponent implements OnInit, AfterViewInit {
  @ViewChild('sPad', {static: true}) signaturePadElement;
  
  constructor(sendSign: SignaturePadService) { 
 

  }
  //Variables params
  signaturePad: any;
  identifier =  null;
  name = null;
  firstName = null;
  lastName = null;
  rfc = null;
  email = null;
  document = null;
  showSignature = null;
  imageSignature = null;


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
  }

  //Method Clean
  clear() {
    this.signaturePad.clear();
  }
  //Method Undo
  undo() {
    const data = this.signaturePad.toData();
    if (data) {
      data.pop(); // remove the last dot or line
      this.signaturePad.fromData(data);
    }
  }
  //Method Download Image
  download(dataURL, filename) {
    if (navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') === -1) {
      window.open(dataURL);
    } else {
      const blob = this.dataURLToBlob(dataURL);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;

      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
    }
  }

  dataURLToBlob(dataURL) {
    // Code taken from https://github.com/ebidel/filer.js
    const parts = dataURL.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
  }
  //Method to save image in format PNG
  savePNG() {
    if (this.signaturePad.isEmpty()) {
      alert('Please provide a signature first.');
    } else {
      const dataURL = this.signaturePad.toDataURL();
    //this.download(dataURL, 'signature.png');
  //Get base 64 image
      var imageBase64 = dataURL;
    }
  }
  //Method to save image in format JPG
  saveJPG() {
    if (this.signaturePad.isEmpty()) {
      alert('Please provide a signature first.');
    } else {
      const dataURL = this.signaturePad.toDataURL('image/jpeg');
      this.download(dataURL, 'signature.jpg');
    }
  }





}

