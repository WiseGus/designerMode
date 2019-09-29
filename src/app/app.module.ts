import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { DateComponent } from './date/date.component';
import { NumberComponent } from './number/number.component';
import { MemoComponent } from './memo/memo.component';
import { PageComponent } from './page/page.component';
import { ContainerComponent } from './container/container.component';
import { DesignDirective } from './design.directive';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    DateComponent,
    NumberComponent,
    MemoComponent,
    PageComponent,
    ContainerComponent,
    DesignDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
