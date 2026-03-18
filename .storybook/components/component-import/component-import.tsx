import React from 'react';
import { Source, useOf } from '@storybook/addon-docs/blocks';
import { NamedExoticComponent } from 'react';
import styles from './component-import.module.css';

export const ComponentImport = () => {
  const resolved = useOf<'component'>('component');
  const component = resolved.component as NamedExoticComponent;
  const componentName = component.displayName === 'GroupHeader.IconSticker' ? 'IconSticker' : component.displayName;

  return (
    <div className={styles.storySource}>
      <Source
        code={`import { ${componentName} } from 'super-design-system';`}
        language="tsx"
      />
    </div>
  );
};

