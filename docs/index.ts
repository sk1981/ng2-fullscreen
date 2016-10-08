import { platformBrowserDynamic  } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullScreenModule } from '../src/index';
import { BasicComponent } from './demo_basic/BasicComponent';

@NgModule({
  imports:      [ BrowserModule, FullScreenModule ],
  declarations: [ BasicComponent ],
  bootstrap:    [ BasicComponent ]
})
class AppModule { }

const platform = platformBrowserDynamic();
//noinspection TypeScriptValidateTypes
platform.bootstrapModule(AppModule);