import {AfterViewInit, Component} from '@angular/core';
import {MatBottomSheet} from '@angular/material';
import {AgeVerificationComponent} from './features/age-verification/age-verification.component';
import {SessionService} from './features/storage/session.service';
import {LocalService} from './features/storage/local.service';

@Component({
  selector: 'app-age-verify',
  template: `
    <div id="app" class="app"  >
    </div>
  `,
  styles: []
})
export class AppComponent implements AfterViewInit {

  constructor(private bottomSheet: MatBottomSheet
    ,         private session: SessionService
    ,         private local: LocalService) {

  }

  ngAfterViewInit() {
    this.local.object.subscribe(stored => {
      if (!stored || !stored.agree) {
        this.session.object.subscribe(data => {
          if (!data || !data.agree) {
            setTimeout(() => this.openBottomSheet());
          }
        });
      }
    });
  }

  openBottomSheet(): void {
    this.bottomSheet.open(AgeVerificationComponent, {ariaLabel: 'age verification dialog'});
  }
}
