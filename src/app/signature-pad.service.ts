import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignaturePadService {

  constructor() { }

  axios = require('axios');
   sendSignature(identifier,name,firstName,lastName,rfc,email,document,showSignature,imageSignature){
    this.axios({
      headers: {"ApiKey": "your apikey"},
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
       }}).then(function (response){
         console.log(response);
       })
       .catch(function (error){
         console.log(error)
       })
  }

}
