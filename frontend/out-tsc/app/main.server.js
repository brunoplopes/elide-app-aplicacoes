import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { serverAppConfig } from './app/app.config.server';
const bootstrap = (context) => bootstrapApplication(AppComponent, serverAppConfig, context);
export default bootstrap;
//# sourceMappingURL=main.server.js.map