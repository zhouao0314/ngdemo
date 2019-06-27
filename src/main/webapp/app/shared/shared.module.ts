import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgdemoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [NgdemoSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [NgdemoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgdemoSharedModule {
  static forRoot() {
    return {
      ngModule: NgdemoSharedModule
    };
  }
}
