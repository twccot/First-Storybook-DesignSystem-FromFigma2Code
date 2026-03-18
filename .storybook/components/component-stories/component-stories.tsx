import React, { useContext } from 'react';
import { Anchor, DocsContext, Subheading, Canvas } from '@storybook/addon-docs/blocks';
import { ComponentDescription } from '../component-description/component-description';
import { StyledStoryToolbar } from '../styled-story-toolbar/styled-story-toolbar';

export const ComponentStories = () => {
  const context = useContext(DocsContext);
  
  if (!context) return null;

  const componentStories = context.componentStories();

  const stories = componentStories
    .filter((story) => !story.parameters?.['docs']?.disable)
    .slice(1);

  if (!stories || stories.length === 0) {
    return null;
  }

  return (
    <div>
      {stories.map((story) => {
        if (story) {
          return (
            <Anchor key={story.id} storyId={story.id}>
              <Subheading>{story.name}</Subheading>
              <ComponentDescription of={story.moduleExport} />
              <StyledStoryToolbar>
                <Canvas
                  of={story.moduleExport}
                  withToolbar
                  story={{ __forceInitialArgs: true, __primary: false }}
                  source={{ __forceInitialArgs: true }}
                />
              </StyledStoryToolbar>
            </Anchor>
          );
        }
        return null;
      })}
    </div>
  );
};

