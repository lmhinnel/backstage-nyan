import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const catGoPlugin = createPlugin({
  id: 'backstage-nyan',
  routes: {
    root: rootRouteRef,
  },
});

export const CatGoPage = catGoPlugin.provide(
  createRoutableExtension({
    name: 'CatGoPage',
    component: () =>
      import('./components/NyanComponent').then(m => m.NyanComponent),
    mountPoint: rootRouteRef,
  }),
);
