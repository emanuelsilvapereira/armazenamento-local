import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoveRoutingModule } from './love-routing-module';
import { LoveComponent } from './love.component';




@NgModule({
  declarations: [LoveComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoveRoutingModule
  ]
})
export class LoveModule {
}
