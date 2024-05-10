export function findPackageManagerType (path?: string, defaultPackageManager?: string): 'yarn' | 'npm' | 'bun' | 'pnpm' | 'unknown';
export function findInstallCommand (packageManagerType?: 'yarn' | 'npm' | 'bun' | 'pnpm' | 'unknown'): 'install' | 'add';
