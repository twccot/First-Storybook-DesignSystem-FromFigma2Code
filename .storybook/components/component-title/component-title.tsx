import { useOf } from '@storybook/addon-docs/blocks';
import React, { NamedExoticComponent } from 'react';

import styles from './component-title.module.css';

export const ComponentTitle = () => {
  const resolved = useOf<'component'>('component');
  const component = resolved.component as NamedExoticComponent;
  const componentName = component.displayName === 'GroupHeader.IconSticker' ? 'IconSticker' : component.displayName;

  return <h1 className={styles.title}>{componentName}</h1>;
};