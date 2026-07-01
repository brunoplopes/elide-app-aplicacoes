import { mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
const serverConfig = {
    providers: [provideServerRendering()]
};
export const serverAppConfig = mergeApplicationConfig(appConfig, serverConfig);
//# sourceMappingURL=app.config.server.js.map