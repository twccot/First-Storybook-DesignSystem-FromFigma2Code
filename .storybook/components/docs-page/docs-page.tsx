import React from 'react';
import { ComponentDescription } from '../component-description/component-description';
import { ComponentImport } from '../component-import/component-import';
import { ComponentLinks } from '../component-links/component-links';
import { ComponentStories } from '../component-stories/component-stories';
import { ComponentTitle } from '../component-title/component-title';
import { SectionHeading } from '../section-heading/section-heading';
import { StyledArgTypes } from '../styled-arg-types/styled-arg-types';
import { StyledStoryToolbar } from '../styled-story-toolbar/styled-story-toolbar';

import { Subtitle, Primary } from '@storybook/addon-docs/blocks';

export const DocsPage = () => {
  return (
    <>
      <ComponentTitle />
      <ComponentLinks />
      <Subtitle />
      <SectionHeading>Overview</SectionHeading>
      <ComponentDescription />
      <ComponentImport />
      <StyledStoryToolbar>
        <Primary />
      </StyledStoryToolbar>
      <SectionHeading>Props</SectionHeading>
      <StyledArgTypes />
      <SectionHeading>Variants</SectionHeading>
      <ComponentStories />
    </>
  );
};

