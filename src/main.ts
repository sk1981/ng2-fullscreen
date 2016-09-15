import { platformBrowserDynamic  } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullScreen } from './fullscreen/fullscreen';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ FullScreen ],
  bootstrap:    [ FullScreen ]
})
class AppModule { }

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);