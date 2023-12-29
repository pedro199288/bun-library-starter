import { execSync } from 'child_process';

function updateVersion(versionType: 'patch' | 'minor' | 'major'): void {
  try {
    execSync(`npm version ${versionType}`, { stdio: 'inherit' });
    console.log(`Version updated to ${versionType}`);
  } catch (error) {
    console.error('Failed to update version:', error);
    process.exit(1);
  }
}

// TODO: You can modify this to take command line arguments or integrate with CI/CD variables
updateVersion('patch');