import { existsSync } from 'fs';

export const findPackageManagerType = (path = '.', defaultPackageManager = 'unknown') => {
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
    return defaultPm
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
        case 'unknown':
            return 'unknown';
        default:
            return 'install';
    }
}

export const findPackageManagerRuuner = (path = '.', defaultPackageManagerRunner = 'npx') => {
    const bunPath = `${path}/bun.lockb`;
    const pnpmPath = `${path}/pnpm-lock.yaml`;
    const yarnPath = `${path}/yarn.lock`;
    const npmPath = `${path}/package-lock.json`;
    if (existsSync(bunPath)) {
        return 'bunx'
    }
    if (existsSync(pnpmPath)) {
        return 'pnpm exec'
    }
    if (existsSync(yarnPath)) {
        return 'yarn dlx'
    }
    if (existsSync(npmPath)) {
        return 'npx'
    }
    return defaultPackageManagerRunner
}
// console.log('findPackageManagerType', findPackageManagerType())
