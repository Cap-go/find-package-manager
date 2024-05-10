export type PackageManagerType = 'yarn' | 'npm' | 'bun' | 'pnpm' | 'unknown';
export type InstallCommand = 'install' | 'add';
export type PackageManagerRunner = 'yarn dlx' | 'npx' | 'bunx' | 'pnpm exec';

export function findPackageManagerType (path?: string, defaultPackageManager?: PackageManagerType): PackageManagerType;
export function findInstallCommand (packageManagerType?: PackageManagerType): InstallCommand;
export function findPackageManagerRuuner (path?: string, defaultPackageManagerRunner?: PackageManagerRunner);
