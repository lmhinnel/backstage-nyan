import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { catGoPlugin, CatGoPage } from '../src/plugin';

createDevApp()
  .registerPlugin(catGoPlugin)
  .addPage({
    element: <CatGoPage />,
    title: 'Root Page',
    path: '/backstage-nyan',
  })
  .render();
