import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgeVerificationComponent } from './age-verification.component';
import { MatBottomSheetModule, MatButtonModule, MatCardModule, MatCheckboxModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { StorageModule } from '@dm/storage';

@NgModule({
  declarations: [AgeVerificationComponent],
  imports: [
    CommonModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
    StorageModule
  ],
  entryComponents: [ AgeVerificationComponent ],
  exports: [ AgeVerificationComponent ]
})
export class AgeVerificationModule { }
