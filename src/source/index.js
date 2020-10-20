// Core
import React from 'react';

// Styles
import './styles/index.scss';

// Components
import { Filter } from './bus/filter/index';
import { Days } from './bus/days/index';

export const Source = () => {
  return (
    <>
      <main>
        <Filter/>
        <Days/>
      </main>
    </>
  );
};
