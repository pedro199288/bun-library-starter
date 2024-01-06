# bun-library-starter

bun-library-starter is a starter template for creating javascript libraries with bun.

## Features
- [x] Bun
- [x] Typescript
- [x] ESLint
- [x] Prettier
- [x] NPM publishing
- [x] Github Releases

## Usage

### Install
- Install Bunhttps://bun.sh/docs/installation
- Clone this repository and install dependencies
```bash
$ git clone git@github.com:pedro199288/bun-library-starter.git
$ cd bun-library-starter
$ bun install
```

### Set library details
To set the library name, description, author, repository and license, run the following command:
``` 
$ bun run scripts/set-library-details.ts
```

### Development
To start developing your library, run the following command:
```bash
$ bun run dev
```

### Build
To build your library, run the following command:
```bash
$ bun run build
```

### Create a release
To create a release, run the following npm command:
```bash
$ bun release <release-type>
```
Where `<release-type>` can be `major`, `minor` or `patch`.

This will update the version in `package.json`, create a git tag and commit the changes.

## License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.