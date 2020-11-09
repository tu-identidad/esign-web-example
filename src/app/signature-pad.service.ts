import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignaturePadService {

  constructor() { }

  axios = require('axios');
   sendSignature(identifier,name,firstName,lastName,rfc,email,showSignature,document,imageSignature){
    this.axios({
      headers: {"ApiKey": "XXXXXX"},
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
