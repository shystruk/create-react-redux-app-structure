#!/usr/bin/env node

require('shelljs/global');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const execSync = require('child_process').execSync;
const spawn = require('cross-spawn');

function shouldUseYarn() {
    try {
        execSync('yarnpkg --version', { stdio: 'ignore' });

        return true;
    } catch (error) {
        return false;
    }
}

const installPackages = () => {
    console.log(chalk.white.bold('Installing Packages'));
    console.log('----------------------------------------------------------');

    return new Promise((resolve, reject) => {
        let command = shouldUseYarn() ? 'yarn' : 'npm';
        let args = ['install'];

        const child = spawn(command, args, { stdio: 'inherit' });

        child.on('close', code => {
            if (code !== 0) {
                reject({
                  command: `${command} ${args.join(' ')}`
                });

                return;
            }

            resolve();
        });
    });
};

const build = (appName) => {
    cp('-r', __dirname + '/../.', appName);

    console.log('----------------------------------------------------------');
    console.log(chalk.white.bold('Welcome to Create React Redux App Structure'));
    console.log('----------------------------------------------------------');

    cd(appName);

    installPackages()
        .then(() => {
            console.log('----------------------------------------------------------');
            console.log(chalk.white.bold('Let\'s get started'));
            console.log('----------------------------------------------------------');
            console.log(chalk.green('Step 1: cd into the newly created ' + appName + ' directory'));
            console.log(chalk.green('Step 2: run "npm run fast-start"'));
            console.log('----------------------------------------------------------');
            console.log(chalk.white('For more details please see docs - ' +
              'https://github.com/shystruk/create-react-redux-app-structure/blob/master/README.md'));
            console.log('----------------------------------------------------------');
        })
        .catch(error => {
            console.log('----------------------------------------------------------');
            console.log(chalk.red('An unexpected error occurred'));
            console.log(chalk.red(error));
            console.log('----------------------------------------------------------');
        });
};

module.exports = build;
