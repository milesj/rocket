# Pro Tips

Some useful tips on utilizing Beemo like a pro!

## Local Beemo Setup

Beemo requires an external Node module (the configuration module) to run correctly, but technically,
it can be setup locally to not require an external module. This is perfect for large applications,
monorepos, or for testing your configuration module itself!

In your `package.json` Beemo config, use `@local` instead of the name of your configuration module.
This will use the current working directory (`process.cwd()`) instead of the Node module path.

```json
{
  "beemo": {
    "module": "@local"
  }
}
```

## Editor Integration

By default, Beemo generates local config files at runtime before execution, and some editors utilize
those files for in-editor functionality (like ESLint and Prettier). However, these files clutter
your repository and should not be committed, so let's hide them!

Add file names to `dotfiles/gitignore` (or another VCS) for each driver you have installed in your
configuration module (be sure to sync afterwards). Also, be sure `config.cleanup` is disabled in
your `beemo` config (is `false` by default).

```
// dotfiles/gitignore
.eslintrc
.prettierrc
```

With these changes, the local config files will persist after executing a driver, but will also be
ignored in your VCS. Pretty nice huh?

## Glob Expansion

Most scripts require [Bash filename expansion](http://tldp.org/LDP/abs/html/globbingref.html) to
glob multiple filesystem paths, but this isn't entirely efficient, as Bash only supports a subset of
the RE specification, nor does it support wildcards like `**` (recursive search).

To work around this limitation, Beemo implements its own version of filename expansion using the
[glob package](https://www.npmjs.com/package/glob). Simply wrap your command line argument in quotes
to use it!

```
// Before
beemo eslint ./packages/*/{src,tests}

// After
beemo eslint "./packages/*/{src,tests}"
```

> This approach has an additional benefit of not cluttering `stdout`.