// Question list to be utilized by index.js prompt
module.exports = [
    {
        message: 'What is your Project Title?',
        name: 'projTitle',
        default: 'project title',
    },
    {
        message: 'What is your Project Description?',
        name: 'projDesc',
        default: 'description',
    },
    {
        message: 'What are the installation instructions?',
        name: 'projInst',
        default: 'installation'
    },
    {
        message: 'What are the usage instructions?',
        name: 'projUsage',
        default: 'usage',
    },
    {
        type: 'list',
        message: 'What license would you like to use?',
        name: 'projLisc',
        choices: [ 'Apache', 'Boost', 'GNU', 'MIT', 'Mozilla', 'WTFPL', 'none' ],
    },
    {
        message: 'How can others contribute to this project?',
        name: 'projContr',
        default: 'how to contribute',
    },
    {
        message: 'What test instructions do you have?',
        name: 'projTests',
        default: 'tests',
    },
    {
        message: 'What is your GitHub username?',
        name: 'projGitH',
        default: 'username',
    },
    {
        message: 'What is your GitHub username?',
        name: 'projEmail',
        default: 'sample@email.com',
    },
];