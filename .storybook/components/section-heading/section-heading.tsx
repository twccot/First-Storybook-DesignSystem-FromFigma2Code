import React from 'react';
import styles from './section-heading.module.css';

interface SectionHeadingProps {
  children: React.ReactNode;
}

export const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className={styles.heading}>
      {children}
    </h2>
  );
};

