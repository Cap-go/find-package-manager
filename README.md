# Find Package Manager Type
  <a href="https://capgo.app/"><img src='https://raw.githubusercontent.com/Cap-go/capgo/main/assets/capgo_banner.png' alt='Capgo - Instant updates for capacitor'/></a>

Find what package manager is used in the provided path.

```typescript
import { findPackageManagerType } from '@capgo/find-package-manager'

console.log(findPackageManagerType()) // npm | yarn | pnpm | bun | unknown
// Provide a path
console.log(findPackageManagerType('../.')) // npm | yarn | pnpm | bun | unknown
// Provide a default manager
console.log(findPackageManagerType('.', 'npm')) // npm | yarn | pnpm | bun
```

Find the install command for the package manager.

```typescript
import {  findInstallCommand } from '@capgo/find-package-manager'

console.log(findInstallCommand()) // install | add | unknown
// Provide the manager instead of read it with default folder '.'
console.log(findInstallCommand(findPackageManagerType())) // install | add | unknown
// Provide the manager and ask to return it prefixed
console.log(findInstallCommand(findPackageManagerType(), true)) // npm install | yarn add | pnpm add | bun add | unknown unknown
```

Find the package runner command.

```typescript
import { findPackageManagerRunner } from '@capgo/find-package-manager'

console.log(findPackageManagerRunner()) // 'yarn dlx' | 'npx' | 'bunx' | 'pnpm exec'
// Provide the path to search for
console.log(findPackageManagerRunner('../.')) // 'yarn dlx' | 'npx' | 'bunx' | 'pnpm exec'
// Provide a default manager
console.log(findPackageManagerRunner('.', 'yarn')) // 'yarn dlx' | 'npx' | 'bunx' | 'pnpm exec'
```
