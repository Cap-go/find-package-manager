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

export const findInstallCommand = (packageManagerType = findPackageManagerType(), prefix = false) => {
    switch (packageManagerType) {
        case 'bun':
            return prefix ? 'bun install' : 'install';
        case 'pnpm':
            return prefix ? 'pnpm install' : 'install';
        case 'yarn':
            return prefix ? 'yarn install' : 'install';
        case 'npm':
            return prefix ? 'npm install' : 'install';
        case 'unknown':
            return prefix ? 'unknown unknown' : 'unknown';
        default:
            return prefix ? 'npm install' : 'install';
    }
}

export const findPackageManagerRunner = (path = '.', defaultPackageManagerRunner = 'npx') => {
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
