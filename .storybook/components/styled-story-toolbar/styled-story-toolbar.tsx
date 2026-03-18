import React from 'react';
import styles from './styled-story-toolbar.module.css';

interface StyledStoryToolbarProps {
  children: React.ReactNode;
}

export const StyledStoryToolbar = ({ children }: StyledStoryToolbarProps) => {
  return (
    <div className={styles.storyToolbar}>
      {children}
    </div>
  );
};

