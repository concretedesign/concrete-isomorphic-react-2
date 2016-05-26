import React from 'react';
import * as components from 'components/index';

export function loadModules(acf) {
  console.log('these are the acf\'s:');
  console.log(acf);
  console.log('these are the component\'s:');
  console.log(components);

  const modules = [];

  acf.forEach(function loopModules(fieldset) {
    const moduleName = fieldset.acf_fc_layout;

    // TODO: Check if there's a module for this (check ../components/index.js?)
    if (components[moduleName]) {
      const Component = components[moduleName];
      modules.push(<Component data={fieldset} />);
    } else {
      // Otherwise show a warning
      modules.push(
        <div className="module-not-found">
          <h2>Module not found</h2>
          <h4>The module { moduleName } could not be loaded.  Heres the data:</h4>
          <pre>{ JSON.stringify(fieldset) }</pre>
        </div>
      );
    }
  });

  if (!modules.length) {
    modules.push(
      <div className="no-modules">
        <h1>This page has no custom modules</h1>
      </div>
    );
  }

  return modules;
}
