import { platformBrowserDynamic  } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullScreen } from './fullscreen/FullScreen';
import { FullScreenIf } from './fullscreen/FullScreenIf';
import { DemoComponent } from './demo/DemoComponent';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ FullScreen, FullScreenIf, DemoComponent ],
  bootstrap:    [ DemoComponent ]
})
class AppModule { }

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
