import sky from 'blackbaud-skyux';

import 'services/services';
import 'services/version-service';
import 'directives/directives';
import 'components/components.module';

import mainRoutes from 'components/main/main.routes';
angular.module('Sky-Webpack', ['ui.router', 'services', 'directives', 'version', sky, 'components'])
.config(mainRoutes);
