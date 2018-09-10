import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesModule } from 'angular-datatables';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { ExperiencesComponent, NgbdModalContent } from './experiences/experiences.component';

@NgModule({
  imports: [NgbModule, 
    CommonModule,
    DataTablesModule
  ],
  declarations: [ExperiencesComponent, NgbdModalContent],
  entryComponents: [NgbdModalContent],
  exports: [ExperiencesComponent]
})
export class ExperiencesModule { }
