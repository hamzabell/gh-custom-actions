const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')


function run() {
    const name = core.getInput('name', { required: true });
    const age = core.getInput('age');  
    core.notice(`Hello ${name}, I understand that you are ${age} years old!`);
}

run();