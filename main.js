import { existsSync } from 'fs';

export const findPackageManagerType = (path = '.', defaultPackageManager = 'unknown') => {
    // Bun lock files (binary and text)
    const bunBinaryPath = `${path}/bun.lockb`;
    const bunTextPath = `${path}/bun.lock`;
    
    // pnpm lock files (current and legacy)
    const pnpmPath = `${path}/pnpm-lock.yaml`;
    const pnpmLegacyPath = `${path}/shrinkwrap.yaml`;
    
    // Yarn lock file
    const yarnPath = `${path}/yarn.lock`;
    
    // npm lock files (standard and shrinkwrap)
    const npmPath = `${path}/package-lock.json`;
    const npmShrinkwrapPath = `${path}/npm-shrinkwrap.json`;
    
    if (existsSync(bunBinaryPath) || existsSync(bunTextPath)) {
        return 'bun'
    }
    if (existsSync(pnpmPath) || existsSync(pnpmLegacyPath)) {
        return 'pnpm'
    }
    if (existsSync(yarnPath)) {
        return 'yarn'
    }
    if (existsSync(npmPath) || existsSync(npmShrinkwrapPath)) {
        return 'npm'
    }
    return defaultPackageManager
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
    // Bun lock files (binary and text)
    const bunBinaryPath = `${path}/bun.lockb`;
    const bunTextPath = `${path}/bun.lock`;
    
    // pnpm lock files (current and legacy)
    const pnpmPath = `${path}/pnpm-lock.yaml`;
    const pnpmLegacyPath = `${path}/shrinkwrap.yaml`;
    
    // Yarn lock file
    const yarnPath = `${path}/yarn.lock`;
    
    // npm lock files (standard and shrinkwrap)
    const npmPath = `${path}/package-lock.json`;
    const npmShrinkwrapPath = `${path}/npm-shrinkwrap.json`;
    
    if (existsSync(bunBinaryPath) || existsSync(bunTextPath)) {
        return 'bunx'
    }
    if (existsSync(pnpmPath) || existsSync(pnpmLegacyPath)) {
        return 'pnpm exec'
    }
    if (existsSync(yarnPath)) {
        return 'yarn dlx'
    }
    if (existsSync(npmPath) || existsSync(npmShrinkwrapPath)) {
        return 'npx'
    }
    return defaultPackageManagerRunner
}
// console.log('findPackageManagerType', findPackageManagerType())
