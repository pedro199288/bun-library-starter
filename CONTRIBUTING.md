# Contributing to bun-library-starter

Thank you for your interest in contributing to `bun-library-starter`! This document provides guidelines for contributions to this open-source JavaScript library. By participating in this project, you agree to abide by its terms.

## Setup for Development

1. **Install Bun**: Follow the instructions [here](https://bun.sh/docs/installation) to install Bun on your system.

2. **Clone the Repository**: 
   ```bash
   git clone git@github.com:pedro199288/bun-library-starter.git
   cd bun-library-starter
   bun install
   ```

3. **Set Library Details**: Run the following command to set library-specific details:
   ```bash
   bun run scripts/set-library-details.ts
   ```

## Making Contributions

1. **Fork and Clone**: Fork the repository and clone it to your local machine. This is your working copy.

2. **Create a New Branch**: For each new feature or fix, create a new branch from `main`.

3. **Develop**: Make your changes. Remember to adhere to the coding standards and guidelines outlined below.

4. **Build and Test**: Build your changes and ensure all tests pass.
   ```bash
   bun run build
   bun run test
   ```

5. **Commit Your Changes**: Use clear and meaningful commit messages. Follow the commit message conventions mentioned below.

6. **Push Your Changes**: Push your changes to your fork.

7. **Create a Pull Request**: Submit a pull request from your fork to the main `bun-library-starter` repository. Describe your changes and reference any related issue(s).

## Coding Standards

- **TypeScript**: Follow standard TypeScript conventions and make sure the typecheck passes. Run `bun run typecheck` to ensure your code compiles.
- **ESLint & Prettier**: Adhere to the ESLint and Prettier configurations provided in the repository. Run `bun run lint` and `bun run format` to ensure your code complies.

## Commit Message Conventions

- Write concise and descriptive commit messages.
- Begin the message with a capital letter.
- Use the imperative mood ("Add feature" not "Added feature").

## Pull Request Process

1. Include a clear description of the changes.
2. Ensure the PR adheres to the coding standards.
3. Link any related issues.
4. Request a review from one of the core team members.

## Reporting Bugs

- Use the GitHub Issues section to report bugs.
- Describe the bug clearly and include steps to reproduce.
- Include screenshots if applicable.

## Requesting Enhancements

- For feature requests, use the GitHub Issues section.
- Clearly describe the feature and its benefits.
- Discuss possible implementations if applicable.

## License

By contributing to `bun-library-starter`, you agree that your contributions will be licensed under the MIT License.