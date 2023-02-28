exports.findPackageManagerType = (path = '.') => {
    const pnpmPath = `${path}/pnpm-lock.yaml`;
    const yarnPath = `${path}/yarn.lock`;
    const npmPath = `${path}/package-lock.json`;
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
