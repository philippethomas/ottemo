# Ottemo API Server

an ambitious open-source ecommerce solution based on Node.js

## Installation Instructions and Getting Started

### OSX
    brew install npm
    brew install git-flow
    brew install hub
    alias hub=git  // add this to your .bashrc or .bash_profile
    npm install -g mocha bower
    gem install compass  // you must have ruby 1.9.x or 2.x.x installed

### Debian based Linux
    sudo apt-get update
    sudo apt-get install -y python-software-properties python g++ make
    sudo add-apt-repository -y ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

    sudo gem install compass
    sudo apt-get install git-flow

    curl http://hub.github.com/standalone -sLo ~/bin/hub
    chmod +x ~/bin/hub
    alias git=hub  # add to your .bashrc or .bash_profile or .profile

    npm install -g mocha bower

## Install local dependancies
    cd <directory of cloned repo>
    npm install
    bower install

## Usage

### Clone the Repository
    git clone https://github.com/ottemo/api-server.git ottemo-api-server

### Initialize Git-Flow
    git checkout master
    git checkout develop
    git flow init -d

### Start a Feature Branch
    git flow feature start <FEATURE-NAME>

### Issue a Pull Request on Github
    git push -u origin <FEATURE-BRANCH>
    git pull-request -b develop

### Install local dependancies and begin coding
    $ npm install
    $ npm start         // development mode by default and invokes nodemon

Add routes (`config/routes.js`), create models (`api/models/`) and controllers (`api/controllers/`).

## License

[MIT License](http://mit-license.org/) copyright 2013, Ottemo
