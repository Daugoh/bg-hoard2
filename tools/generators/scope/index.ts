import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/angular/generators';

export default async function (tree: Tree, schema: any) {
  const scope = schema.name;
  const utilLibName = 'util-' + scope;
  await libraryGenerator(tree, {
    name: utilLibName,
    directory: scope,
    tags: `scope:${scope},type:util`
  });
  const uiLibName = 'ui-' + scope;
  await libraryGenerator(tree, {
    name: uiLibName,
    directory: scope,
    tags: `scope:${scope},type:ui`
  });
  const featureLibName = 'feature-' + scope;
  await libraryGenerator(tree, {
    name: featureLibName,
    directory: scope,
    tags: `scope:${scope},type:feature`
  });
  const dataAccessLibName = 'data-access-' + scope;
  await libraryGenerator(tree, {
    name: dataAccessLibName,
    directory: scope,
    tags: `scope:${scope},type:data-access`
  });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
