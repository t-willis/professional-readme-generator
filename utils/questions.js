module.exports = [
    (
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projTitle',
        default: 'Project Title',
    ),
    (
        type: 'input',
        message: 'What is the description of your project?',
        name: 'projDesc',
        default: 'Project Description',
    ),
    (
        type: 'input',
        message: 'What are the steps required for installation?',
        name: 'projInst',
        default: 'Installation',
    ),
    (
        type: 'input',
        message: 'What are the instructions for usage?',
        name: 'projUsag',
        default: 'Usage',
    ),
    (
        type: 'input',
        message: 'Would you like to list and collaborators or other credits?',
        name: 'projCred',
        default: 'Credits',
    ),
    (
        type: 'list',
        message: 'Would you like to add a License?',
        name: 'projLice',
        choices: [ 'MIT', 'Apache', 'GNU', 'None'],
    ),
    (
        type: 'list',
        message: 'Would you like to add any badges?',
        name: 'projBadg',
        choices: [ 'opt1', 'opt2', 'opt3', 'None'],
    ),
];