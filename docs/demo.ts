import { platformBrowserDynamic  } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullScreenModule } from '../src/index';
import { FullScreenIfDemoComponent } from './demo_if/FullScreenIfDemoComponent';
import { BasicComponent } from './demo_basic/BasicComponent';
import { FullScreenTargetDemoComponent } from './demo_target/FullScreenTargetDemoComponent';


@NgModule({
  imports:      [ BrowserModule, FullScreenModule ],
  declarations: [ BasicComponent, FullScreenIfDemoComponent , FullScreenTargetDemoComponent],
  bootstrap:    [ BasicComponent  ]
})
class AppModule { }

const platform = platformBrowserDynamic();
//noinspection TypeScriptValidateTypes
platform.bootstrapModule(AppModule);
