import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default () => (
  <h1 className="mx-auto my-auto text-5xl font-bold text-purple-500 bg-purple-100">
    Hello world!
    <FontAwesomeIcon icon={faBars} size="2x" />
  </h1>
);
