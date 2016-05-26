import {_} from 'lodash';

export function loadModules(acf) {
  if (!acf) return;
  console.log(acf);

  _.forEach(acf, function iterate(value, key) {
    console.log(value, key);
  });
  // Group each module by its namespace

  // Return array of components that parent template will render
}
