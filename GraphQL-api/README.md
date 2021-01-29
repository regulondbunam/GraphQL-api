# [Software name]

# Description

API web services to connect RegulonDB MongoDB collections. 
Functional services currently:
- Gene
- Operon
- Drawing Traces Tool 
- Coexpression
- Phrases

Services in Development: 

 - Regulon

# Motivation

With the reengineering of RegulonDB passing from relational model to document model, and the updating of them tools to new technologies, was needed new web services using GraphQL technology to get the required data from RegulonDB. This API´s are for the Drawing Traces Tool and Coexpression Tool.

# System requirements

Required software 
- Node JS 12.18.4 
- NPM 6.14.6

# Install 

Once the repo is cloned, use this command  to install all libraries dependencies of the API´s.
`$ npm install`

After that, use the following command to edit the ".env-sample" file to add credentials to access the MongoDB collections (keeping the variable name).
```
# On unix
nano .env-sample

#On windows
notepad .\.env-sample
```
Then used the next command for rename the file to ".env"
```
# On unix
mv .env-sample .env

#On windows
REN .env-sample .env
```


# Quick start

There are differents ways to start up the services.
To start closed services. In local it runs on port: 4002
    `$ npm run start:dev:closedTools`

To start open services. In local it runs on port: 4003
    `$ npm run start:dev:openTools`

Instead they can be run at the same time
    `$ npm run start:all`

To use apollo federation gateway both services need to be start up then execute the script. In local it runs on port 4001
    `$ npm run start:dev:gateway`



# Project website 

[Website where the software is described and allows users to obtain it as well as its documentation.]

# License

Copyright 2020 RegulonDB

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

# Support contact information

[It should be clear where to go for support, for example a contact e-mail address]

# Software quality checklist

**Accessibility**

- [ ] Unique DOI [identifier](http://....) (Please update identifier and link)
- [ ] Version control system

**Documentation**

- [x] README file

**Learnability**

- [x] Quick start

**Buildability**

- [ ] INSTALL file

**Identity**

- [ ] Website

**Copyright & Licensing**

- [ ] LICENSE file

**Portability**

- [ ] Multiple platforms
- [ ] Browsers

**Supportability**

- [ ] E-mail address
- [ ] Issue tracker
- [ ] Slack
- [ ] Gitter

**Analysability**

- [ ] Source code structured
- [ ] Sensible names
- [ ] Coding standards - [style guides](http://google.github.io/styleguide/)

**Changeability**

- [ ] CONTRIBUTING file
- [ ] Code of Conduct file
- [ ] Code changes, and their authorship, publicly visible

**Reusability**

- [ ] Source code set up in a modular fashion

**Security & Privacy**

- [ ] Passwords must never be stored in unhashed form