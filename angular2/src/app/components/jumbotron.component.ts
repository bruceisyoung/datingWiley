import { Component, View } from "angular2/core"

@Component({
  selector: 'my-jumbotron'
})

@View({
  template: 
  `<div class="jumbotron">
	  <div class="container">
	    <h1>Dating Wiley</h1> 
	    <p>Dating Wiley and support Wiley for a good cause</p> 
	  </div>
	</div>`
})

export class JumbotronComponent {
}