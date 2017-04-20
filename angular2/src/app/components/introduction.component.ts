import { Component, View } from "angular2/core";

@Component({
   selector: 'my-introduction'
})

@View({
  template: 
  `<div class="intro row" id="introduction">
  	<div class="container">
	    <div class="media">
			  <div class="media-body">
			    <h3 class="media-heading">Wiley's Story</h3>
			    <p>This year will be my 4th AIDS/Lifecycle after a 7 years break with 
			    the fantastic events. My life changed so much because of AIDS/Lifecycle, 
			    and many people benefited directly from their services, your support 
			    means the world to me. We’re working together to make HIV/AIDS a thing 
			    of the past. I'm donating $500 to the cause myself. Will you also support 
			    me by making a donation today?</p>
			    <p>Please follow my blog of this emotional journey. I will also post the 
			    same blog on Medium so it can contain pictures and videos. https://medium.
			    com/@wileywang</p>
			  </div>
			  <div class="media-right">
			    <img src="./angular2/src/images/media1.png" class="media-object" style="width:166px">
			  </div>				  
			</div>
  	</div>
  </div>`
})

export class IntroductionComponent {
}