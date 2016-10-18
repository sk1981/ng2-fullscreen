import { platformBrowserDynamic  } from '@angular/platform-browser-dynamic';
import {RouterModule, Route}   from '@angular/router';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullScreenModule } from '../src/index';
import { FullScreenIfDemoComponent } from './demo_if/FullScreenIfDemoComponent';
import { BasicComponent } from './demo_basic/BasicComponent';
import { DemoOverviewComponent } from './DemoOverviewComponent';
import { DemoMainComponent } from './DemoMainComponent';
import { FullScreenTargetDemoComponent } from './demo_target/FullScreenTargetDemoComponent';

const DemoAppRoutes = [
  { path: '', component: DemoOverviewComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'targetdemo', component: FullScreenTargetDemoComponent },
  { path: 'ifdemo', component: FullScreenIfDemoComponent }
];

@NgModule({
  imports:      [
    BrowserModule,
    FullScreenModule,
    RouterModule.forRoot(DemoAppRoutes)
  ],
  declarations: [ DemoMainComponent, DemoOverviewComponent, BasicComponent, FullScreenIfDemoComponent , FullScreenTargetDemoComponent],
  bootstrap:    [ DemoMainComponent  ]
})
class AppModule { }

const platform = platformBrowserDynamic();
//noinspection TypeScriptValidateTypes
platform.bootstrapModule(AppModule);

