import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignaturePadComponent } from './signature-pad/signature-pad.component';


const routes: Routes = [
  {path: '', component: SignaturePadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
