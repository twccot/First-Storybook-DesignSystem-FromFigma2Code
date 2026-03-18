import React from 'react';
import { useOf } from '@storybook/addon-docs/blocks';
import styles from './component-links.module.css';

export const ComponentLinks = () => {
  const resolvedOf = useOf<'component'>('component');

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

  const extractLinks = (markdownText: string) => {
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let matches;

    const basicLinks = [
      {
        title: 'Figma Design',
        href: '#',
        disabled: true,
      },
      {
        title: 'Github',
        href: '#',
        disabled: true,
      },
    ];

    const commonGuidLinesLink = {
      title: 'Guidelines',
      href: '#',
      disabled: true,
    };

    const links: { title: string; href: string; disabled?: boolean }[] = [];

    while ((matches = regex.exec(markdownText)) !== null) {
      links.push({ title: matches[1], href: matches[2] });
    }

    if (links.length < 1) {
      // Add the common guidelines link to the end of the array
      return basicLinks.concat(commonGuidLinesLink);
    }

    // Check if Guidelines link already exists in extracted links
    const hasGuidelines = links.some(link => link.title.toLowerCase() === 'guidelines');
    
    // Only add default Guidelines link if none was found in the markdown
    return hasGuidelines ? links : links.concat(commonGuidLinesLink);
  };

  const arrayOfLinks = extractLinks(markdown ?? '');

  return (
    <div className={styles.linksContainer}>
      {arrayOfLinks.map((link, index) => (
        <React.Fragment key={index}>
          <a
            href={link.href}
            className={`${styles.link} ${link?.disabled ? styles.disabled : ''}`}
          >
            {link.title}
          </a>
          {/* Render the VerticalDivider only if it's not the last item */}
          {index < arrayOfLinks.length - 1 && (
            <div className={styles.verticalDivider} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

