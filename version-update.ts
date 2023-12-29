import { execSync } from 'child_process';

const args = process.argv.slice(2);
const versionType = args[0];

function isValidVersionType(versionType: string): versionType is 'patch' | 'minor' | 'major' {
  return ['patch', 'minor', 'major'].some(v => v === versionType)
}

if (!isValidVersionType(versionType)) {
  console.error(`Invalid version type: "${versionType}", use any of "patch", "minor" or "major"`);
  process.exit(1);
}

function updateVersion(versionType: 'patch' | 'minor' | 'major'): void {
  try {
    execSync(`npm version ${versionType}`, { stdio: 'inherit' });
    console.log(`Version updated to ${versionType}`);
  } catch (error) {
    console.error('Failed to update version:', error);
    process.exit(1);
  }
}

updateVersion(versionType);