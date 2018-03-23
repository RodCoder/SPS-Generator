# generator-n8dspfx - Sample to demonstrate how to extend SPFx for custom requirements

This sample generator adds configuration for HandlebarJS and jQuery on top of @microsoft/generator-sharepoint to demonstrate the extensibility model.

## Installation

```sh
# Clone repository
git clone https://github.com/StfBauer/generator-n8dspfx.git

# Switch to the repositories directory
cd generatore-n8dspfx

# Create a global symlink to appear as a global npm package
npm link
```

The generator is not published on NPM. The only way to use and install it is through cloning the repository and link the local files in the global npm cache.
In general this generator should only be used to configure new projects after the configuration has once been provisioned `@microsoft/sharepoint` should be used.

## Usage

This generator is 100% based on @microsoft/generator-sharepoint and supports two different scenarios:

* SPFx pre-configured with jQuery
* SPFx pre-configured with HandlebarsJS

The basic usage is to start a new project through:

```sh
yo n8dspfx
```

![https://raw.githubusercontent.com/StfBauer/generator-n8dspfx/master/docassets/custom-spfx-yeoman.png](https://raw.githubusercontent.com/StfBauer/generator-n8dspfx/master/docassets/custom-spfx-yeoman.png)

**Start new jQuery project**

You can start jQuery projects directly through:

```sh
yo n8dspfx:jquery
```

**Start new HandlebarJS project**

You can start HandlebarJS projects directly through:

```sh
yo n8dspfx:hbs
```



