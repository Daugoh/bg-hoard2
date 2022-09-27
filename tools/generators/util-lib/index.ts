import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

interface Schema {
  name: string;
  directory: 'store' | 'api' | 'shared';
}

export default async function (tree: Tree, schema: any) {
  const libName = 'util-' + schema.name;
  await libraryGenerator(tree, {
    name: libName,
    directory: schema.directory,
    tags: `scope:${schema.directory}`
  });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
