// /src/services/sitemapservice.ts
import fs from 'fs';
import path from 'path';

interface RouteInfo {
  route: string;
  level: number;
}

export const getFolderRoutes = async (): Promise<RouteInfo[]> => {
  const appDirectory = path.join(process.cwd(), 'src/app');

  const getDirectoriesRecursively = (dir: string, basePath: string, level: number): RouteInfo[] => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    const directories: RouteInfo[] = [];

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        const route = path.join(basePath, entry.name);
        directories.push({ route, level });

        // Recursively get directories within the current directory
        directories.push(...getDirectoriesRecursively(fullPath, route, level + 1));
      }
    }

    return directories;
  };

  // Get root-level pages and then subdirectories
  const rootRoutes: RouteInfo[] = [{ route: '', level: 0 }]; // Adding root level
  const subRoutes = getDirectoriesRecursively(appDirectory, '', 1); // Start subdirectories from level 1

  return rootRoutes.concat(subRoutes);
};
