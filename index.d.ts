export type PackageManagerType = 'yarn' | 'npm' | 'bun' | 'pnpm' | 'unknown';
export type InstallCommand = 'install' | 'add';
export function findPackageManagerType (path?: string, defaultPackageManager?: string): PackageManagerType;
export function findInstallCommand (packageManagerType?: PackageManagerType): InstallCommand;
