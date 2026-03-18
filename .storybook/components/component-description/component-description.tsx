import React from 'react';
import { useOf } from '@storybook/addon-docs/blocks';
import { Markdown } from '@storybook/addon-docs/blocks';
import styles from './component-description.module.css';

export const ComponentDescription = ({
  of,
}: {
  of?: ReturnType<typeof useOf>;
}) => {
  const resolvedOf = useOf<'component'>(of || 'component');

  const getDescriptionFromResolvedOf = (
    resolvedOf: ReturnType<typeof useOf>
  ): string | null => {
    switch (resolvedOf.type) {
      case 'story': {
        return resolvedOf.story.parameters['docs']?.description?.story || null;
      }
      case 'meta': {
        const { parameters, component } = resolvedOf.preparedMeta;
        const metaDescription = parameters['docs']?.description?.component;
        if (metaDescription) {
          return metaDescription;
        }
        return (
          parameters['docs']?.extractComponentDescription?.(component, {
            component,
            parameters,
          }) || null
        );
      }
      case 'component': {
        const {
          component,
          projectAnnotations: { parameters },
        } = resolvedOf;
        return (
          parameters?.['docs']?.extractComponentDescription?.(component, {
            component,
            parameters,
          }) || null
        );
      }
      default: {
        throw new Error(
          `Unrecognized module type resolved from 'useOf', got: ${
            (resolvedOf as ReturnType<typeof useOf>).type
          }`
        );
      }
    }
  };

  const markdown = getDescriptionFromResolvedOf(resolvedOf);

  const removeMarkdownLinks = (markdownText: string) => {
    // Regular expression to match Markdown links [title](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

    // Replace Markdown links with an empty string
    return markdownText.replace(linkRegex, '');
  };

  const descriptionText = removeMarkdownLinks(markdown ?? '');

  if (!markdown) {
    return null;
  }

  return (
    <div className={styles.description}>
      <Markdown>{descriptionText}</Markdown>
    </div>
  );
};

