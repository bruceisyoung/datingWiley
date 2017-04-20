import { Component, View } from "angular2/core";

@Component({
   selector: 'my-app'
})

@View({
  template: 
  `
    <my-navbar>Loading Navbar</my-navbar>
    <my-jumbotron>Loading Jumbotron</my-jumbotron>
    <my-introduction>to be built</my-introduction>
    <my-playguide>to be built</my-playguide>
    <my-itemList>to be built</my-itemList>
    <my-footer>to be built</my-footer>
  `
})

export class AppComponent {

}