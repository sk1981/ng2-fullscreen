import { platformBrowserDynamic  } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullScreenModule } from '../index';
import { DemoComponent } from './DemoComponent';

@NgModule({
  imports:      [ BrowserModule, FullScreenModule ],
  declarations: [ DemoComponent ],
  bootstrap:    [ DemoComponent ]
})
class AppModule { }

const platform = platformBrowserDynamic();
//noinspection TypeScriptValidateTypes
platform.bootstrapModule(AppModule);
