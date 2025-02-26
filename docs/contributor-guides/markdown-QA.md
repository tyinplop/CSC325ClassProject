# Markdown Quality Assurance

To maintain high-quality Markdown files in this repository, contributors must use **Vale** and **markdownlint-cli** before pushing changes to the default branch. These tools enforce consistent style and formatting.

## Prerequisites

This repository already has `Vale` and `markdownlint-cli` installed. The `.gitignore` file includes the `styles/` directory, so no additional setup is required.

## Running Vale

Vale is a linter that checks for grammar, style, and readability issues. Run it with the following command:

```sh
vale .
```

This will check all Markdown files in the repository and display any issues found. Fix any reported issues before committing your changes.

## Running markdownlint-cli

`markdownlint-cli` enforces Markdown best practices and helps maintain consistency. To lint your Markdown files, use:

```sh
markdownlint .
```

or specify a file:

```sh
markdownlint path/to/file.md
```

Fix any errors before pushing your changes.

## Automation

You can automate linting by running both tools together:

```sh
vale . && markdownlint .
```

This ensures your Markdown files meet quality standards before committing.

## Additional Guidelines

- Always resolve all warnings and errors before pushing changes.
- If a rule needs to be bypassed, provide a clear reason in a comment.
- Keep the `styles/` directory ignored in `.gitignore` to prevent unnecessary files from being committed.

Following these guidelines ensures high-quality Markdown documentation across the repository.


