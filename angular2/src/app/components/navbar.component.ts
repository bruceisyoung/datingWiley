import { Component, View } from "angular2/core"

@Component({
  selector: 'my-navbar'
})

@View({
  template: 
  `<nav class="navbar navbar-inverse">
	  <div class="container-fluid">
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span> 
	      </button>
	      <a class="navbar-brand" href="#">Dating Wiley</a>
	    </div>
	    <div class="collapse navbar-collapse" id="myNavbar">
	      <ul class="nav navbar-nav">
	        <li><a href="#">Home</a></li>
	        <li><a href="#">Wiley's Story</a></li>
	        <li><a href="#">How To Play?</a></li>
	        <li><a href="#">Auctions</a></li> 
	      </ul>
	    </div>
	  </div>
	</nav>`
})

export class NavbarComponent {
}