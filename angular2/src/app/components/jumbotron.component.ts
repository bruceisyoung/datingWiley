import { Component, View } from "angular2/core"

@Component({
  selector: 'my-jumbotron'
})

@View({
  template: 
  `<div class="bg jumbotron">
	  <div class="container">
	  	<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 row">
	    <h1>Date Wiley and support him in this good cause!</h1> 
	    <p>June 4th - June 10th, over 3,000 Cyclists, Roadies and Virtual 
	    Cyclists will be participating in AIDS/LifeCycle, a 545-mile bike 
	    ride from San Francisco to Los Angeles to raise funds for the 
	    life-saving services offered by San Francisco AIDS Foundation and 
	    the Los Angeles LGBT Center.  This year, I’ll be one of them!</p> 
	  	</div>
	  </div>
	</div>`
})

export class JumbotronComponent {
}