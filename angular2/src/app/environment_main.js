System.register(["angular2/platform/browser", "./environment_app.component", "./components/navbar.component", "./components/jumbotron.component", "./components/introduction.component", "./components/playGuide.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, environment_app_component_1, navbar_component_1, jumbotron_component_1, introduction_component_1, playGuide_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (environment_app_component_1_1) {
                environment_app_component_1 = environment_app_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (jumbotron_component_1_1) {
                jumbotron_component_1 = jumbotron_component_1_1;
            },
            function (introduction_component_1_1) {
                introduction_component_1 = introduction_component_1_1;
            },
            function (playGuide_component_1_1) {
                playGuide_component_1 = playGuide_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(environment_app_component_1.AppComponent);
            browser_1.bootstrap(navbar_component_1.NavbarComponent);
            browser_1.bootstrap(jumbotron_component_1.JumbotronComponent);
            browser_1.bootstrap(introduction_component_1.IntroductionComponent);
            browser_1.bootstrap(playGuide_component_1.PlayGuideComponent);
        }
    }
});
//# sourceMappingURL=environment_main.js.map