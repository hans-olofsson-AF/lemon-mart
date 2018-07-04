import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';

import { ArbetsgivareComponent } from './arbetsgivare.component';
import { ArbetsplatserComponent } from './arbetsplatser/arbetsplatser.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { ArbetsplatsComponent } from './arbetsplats/arbetsplats.component';
import { OrderComponent } from './order/order.component';
import { KontaktpersonerArbetsplatsComponent } from './kontaktpersoner-arbetsplats/kontaktpersoner-arbetsplats.component';
import { TjansteanteckningarComponent } from './tjansteanteckningar/tjansteanteckningar.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MaterialModule],
  declarations: [
    ArbetsgivareComponent,
    ArbetsplatserComponent,
    OrganisationComponent,
    ArbetsplatsComponent,
    OrderComponent,
    KontaktpersonerArbetsplatsComponent,
    TjansteanteckningarComponent
  ]
})
export class ArbetsgivareModule {}
