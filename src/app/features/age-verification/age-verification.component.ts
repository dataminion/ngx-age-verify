import { Component, Inject } from '@angular/core';
import {MatBottomSheetConfig, MatBottomSheetRef, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS} from '@angular/material';
import { SessionService , StorageModel, LocalService} from '@dm/storage';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'feature-age-verification',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Welcome</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <span>By clicking Submit you verify that you are 21 years of age or older</span>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button (click)="openLink($event)" type="submit">SUBMIT</button>
        <mat-checkbox [(ngModel)]="remember">Remember Choice</mat-checkbox>
      </mat-card-actions>
    </mat-card>
  `,
  styleUrls: ['./age-verification.component.scss'],
})
export class AgeVerificationComponent {
  private data: StorageModel;
  public remember = false;
  constructor(
      private bottomSheetRef: MatBottomSheetRef<AgeVerificationComponent>
    , @Inject(MAT_BOTTOM_SHEET_DEFAULT_OPTIONS) public sheetConfig: MatBottomSheetConfig
    , private session: SessionService
    , private local: LocalService) {
          this.data = new StorageModel();
          sheetConfig.ariaLabel = 'age verification dialog';
  }
  openLink(event: MouseEvent): void {
    console.log(this.remember);
    this.data.agree = true;
    if (this.remember) {
      this.local.state(this.data);
    }
    this.session.state(this.data);
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
