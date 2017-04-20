System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PlayGuideComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let PlayGuideComponent = class PlayGuideComponent {
            };
            PlayGuideComponent = __decorate([
                core_1.Component({
                    selector: 'my-playguide'
                }),
                core_1.View({
                    template: `<div class="intro row" id="howtoplay">
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
                }), 
                __metadata('design:paramtypes', [])
            ], PlayGuideComponent);
            exports_1("PlayGuideComponent", PlayGuideComponent);
        }
    }
});
//# sourceMappingURL=playGuide.component.js.map