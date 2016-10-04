import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FullScreen} from "./fullscreen/FullScreen";
import {FullScreenIf} from "./fullscreen/FullScreenIf";

export * from "./fullscreen/FullScreen";
export * from "./fullscreen/FullScreenIf";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FullScreen,
    FullScreenIf
  ],
  exports: [
    FullScreen,
    FullScreenIf
  ]
})
export class FullScreenModule {

}