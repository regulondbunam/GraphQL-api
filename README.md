# RegulonDB-WS GraphQL API

![License](https://img.shields.io/badge/license-MIT-brightgreen?style=plastic)
![RegulonDBVersion](https://img.shields.io/badge/RegulonDB_version-11.1-blue?style=plastic&link=https://regulondb.ccg.unam.mx/)
![Status](https://img.shields.io/badge/status-in_development-yellowgreen?style=plastic)

# Description

API web services to connect RegulonDB MongoDB collections. 
Functional services currently:
- Data
    - Gene
    - Operon
    - Regulon
    - Phrases
    - Sigmulon
    - SRNA
    - Gensor Unit
    - List Object (**New**) 
- Tools
    - Coexpression
    - DrawingTracesTool (dnaFeatures)
    - RegulatoryNetwork


# Motivation

With the reengineering of RegulonDB passing from relational model to an documental model, was needed a new web service to connect to the new documental database using GraphQL technology, with this web service  API can be possible to get data from RegulonDB with an application layer using the technology previously mentioned with Javascript. 

# System requirements

Required software

- Node JS ^16.13.0
- NPM ^8.1.4

# Install

Once the repo is cloned, use this command to install all libraries dependencies of the API

```bash
$ npm install
```

After that, use the following command and edit the ".env-sample" file to add credentials to access the MongoDB collections (keeping the variable name) and the ports for GraphQL servers (by default is used port 4001 for the gateway, 4002 for private services, and 4003 for public services).

```bash
# On Unix
nano .env-sample

# On Windows
notepad .\.env-sample
```

Then use the next command for rename the file to ".env"

```bash
# On Unix
mv .env-sample .env

# On Windows
REN .env-sample .env
```

# Quick start

 Just use this command to start RegulonDB GraphQL Closed, Open and Gateway Services:

```
$ npm start
```

Now if the GraphQL Closed or Open ports in .env was not defined, it will take port 4001, 4002 and 4003 (by default) and GraphQL Playgroud for closedServices will run at http://localhost:4002/graphql, for OpenServices will run at http://localhost:4003/graphql and for Gateway will run at http://localhost:4001/graphql 

# Project website

[NOT DEFINED]

# License

Copyright 2023 RegulonDB

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

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

- [x] LICENSE file

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

- [x] CONTRIBUTING file
- [x] Code of Conduct file
- [ ] Code changes, and their authorship, publicly visible

**Reusability**

- [ ] Source code set up in a modular fashion

**Security & Privacy**

- [ ] Passwords must never be stored in unhashed form