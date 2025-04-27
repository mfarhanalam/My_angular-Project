import { Injectable } from '@angular/core';
import crypto from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptdecryptService {

  constructor() { }
  public encryptData = async (data: any) => {
    var key = crypto.enc.Utf8.parse('Biz@123Bizm@bia1');
    var iv = crypto.enc.Utf8.parse('bizmobiabizmobia');
    var encrypted = crypto.AES.encrypt(crypto.enc.Utf8.parse(data), key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: crypto.mode.CBC,
        padding: crypto.pad.Pkcs7
      });
    return encrypted.toString();
  }

  public decryptData = async (data: any) => {
    // 
    const key = crypto.enc.Utf8.parse('Biz@123Bizm@bia1');
    const iv = crypto.enc.Utf8.parse('bizmobiabizmobia');
    const decrypted = crypto.AES.decrypt(data, key, {
      keySize: 128 / 8,
      iv: iv,
      mode: crypto.mode.CBC,
      padding: crypto.pad.Pkcs7
    });
    return decrypted.toString(crypto.enc.Utf8);
  }


}
