import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignaturePadService {

  constructor() { }

  axios = require('axios');
   sendSignature(identifier,name,firstName,lastName,rfc,email,document,showSignature,imageSignature,){
    this.axios({
      headers: {"ApiKey": "vh2Q0pO4"},
      method: 'post',
      url: '/api/ESign/addSignatory',
      data:{
        "identifier":identifier,
        "name":name,
        "firstName":firstName,
        "lastName":lastName,
        "rfc":rfc,
        "email":email,
        "document":document,
        "showSignature":showSignature,
        "imageSignature":imageSignature
       }})
  }

}
