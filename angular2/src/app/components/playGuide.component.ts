import { Component, View } from "angular2/core";

@Component({
   selector: 'my-playguide'
})

@View({
  template: 
  `<div class="intro row" id="howtoplay">
  	<div class="container">
	    <div class="media">
			  <div class="media-left">
		      <img src="./angular2/src/images/media2.jpg" class="media-object" style="width:166px">
		    </div>
			  <div class="media-body">
			    <h3 class="media-heading">How To Play?</h3>
			    <p>1. </p>
			    <p>2. </p>
			    <p>3. </p>
			    <p>4. </p>
			    <p>5. </p>
			  </div>
			</div>
  	</div>
  </div>`
})

export class PlayGuideComponent {
}