import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {NzTableModule} from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { tr_TR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import tr from '@angular/common/locales/tr';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzTimelineModule} from 'ng-zorro-antd/timeline';
import {AccordionModule} from 'primeng/accordion';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {FileUploadModule} from 'primeng/fileupload';
import {ButtonModule} from 'primeng/button';


registerLocaleData(tr);

@NgModule({

  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    ReactiveFormsModule,
    NzFormModule,
    NzDropDownModule,
    NzTableModule,
    NzTimelineModule,
    AccordionModule,
    MessageModule,
    MessagesModule,
    FileUploadModule,
    ButtonModule
  ],
  providers: [{ provide: NZ_I18N, useValue: tr_TR }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
