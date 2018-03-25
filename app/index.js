'use strict';
// base generator scaffolding
const Generator = require('yeoman-generator');

// Add Color Support to Higlight steps in this generator
const chalk = require('chalk');

// yosay
const yosay = require('yosay');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);
    }

    // Initialisation Generator + SPFx generator
    initializing() {
        
    }

    // Prompt for user input for Custom Generator
    prompting() { }

    configuring() {
        // Base configuration
        this.composeWith('spsspfx:baseconfig', {}, {
            local: require.resolve('../baseconfig')
        });
    }

    // not used because of the dependencies of the SPFx file
    // Code was moved to Install
    writing() { }

    install() { }

    // Run installer normally time to say goodbye
    // If yarn is installed yarn will be used
    end() { }

}