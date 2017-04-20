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
    var IntroductionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let IntroductionComponent = class IntroductionComponent {
            };
            IntroductionComponent = __decorate([
                core_1.Component({
                    selector: 'my-introduction'
                }),
                core_1.View({
                    template: `<div class="intro row" id="introduction">
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
                }), 
                __metadata('design:paramtypes', [])
            ], IntroductionComponent);
            exports_1("IntroductionComponent", IntroductionComponent);
        }
    }
});
//# sourceMappingURL=introduction.component.js.map