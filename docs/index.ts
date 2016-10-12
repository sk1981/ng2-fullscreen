import { platformBrowserDynamic  } from '@angular/platform-browser-dynamic';
import {RouterModule, Route}   from '@angular/router';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullScreenModule } from '../src/index';
import { FullScreenIfDemoComponent } from './demo_if/FullScreenIfDemoComponent';
import { BasicComponent } from './demo_basic/BasicComponent';
import { FullScreenTargetDemoComponent } from './demo_target/FullScreenTargetDemoComponent';

console.log("-----------------------------------------------");

const DemoAppRoutes = [
  { path: '', component: BasicComponent },
  { path: 'targetdemo', component: FullScreenTargetDemoComponent },
  { path: 'ifdemo', component: FullScreenIfDemoComponent }
];

@NgModule({
  imports:      [
    BrowserModule,
    FullScreenModule,
    RouterModule.forRoot(DemoAppRoutes)
  ],
  declarations: [ BasicComponent, FullScreenIfDemoComponent , FullScreenTargetDemoComponent],
  bootstrap:    [ BasicComponent  ]
})
class AppModule { }

const platform = platformBrowserDynamic();
//noinspection TypeScriptValidateTypes
platform.bootstrapModule(AppModule);
