import { bootstrap } from "angular2/platform/browser"
import { AppComponent } from "./environment_app.component"
import { NavbarComponent } from "./components/navbar.component";
import { JumbotronComponent } from "./components/jumbotron.component";
import { IntroductionComponent } from "./components/introduction.component";
import { PlayGuideComponent } from "./components/playGuide.component";

bootstrap(AppComponent);
bootstrap(NavbarComponent);
bootstrap(JumbotronComponent);
bootstrap(IntroductionComponent);
bootstrap(PlayGuideComponent);