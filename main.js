import { existsSync } from 'fs';

export const findPackageManagerType = (path = '.') => {
    const bunPath = `${path}/bun.lockb`;
    const pnpmPath = `${path}/pnpm-lock.yaml`;
    const yarnPath = `${path}/yarn.lock`;
    const npmPath = `${path}/package-lock.json`;
    if (existsSync(bunPath)) {
        return 'bun'
    }
    if (existsSync(pnpmPath)) {
        return 'pnpm'
    }
    if (existsSync(yarnPath)) {
        return 'yarn'
    }
    if (existsSync(npmPath)) {
        return 'npm'
    }
    return 'unknown'
}

export const findInstallCommand = (packageManagerType = findPackageManagerType()) => {
    switch (packageManagerType) {
        case 'bun':
            return 'install';
        case 'pnpm':
            return 'install';
        case 'yarn':
            return 'add';
        case 'npm':
            return 'install';
        default:
            return 'install';
    }
}
// console.log('findPackageManagerType', findPackageManagerType())
