import { bootstrap } from "angular2/platform/browser"
import { Component, View } from "angular2/core";

@Component({
   selector: 'my-app'
})

@View({
  template: 
  `
    <my-navbar>Loading Navbar</my-navbar>
    <my-jumbotron>Loading Jumbotron</my-jumbotron>
  `
})

export class AppComponent {

}