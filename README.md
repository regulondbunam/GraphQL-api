# RegulonDB-WS GraphQL API



# Description

API Web Service to connect RegulonDB MongoDB collections
Functional services currently: 
 - Gene
 - Phrases

Services in Development: 

 - Regulon

# Motivation

With the reengineering of RegulonDB passing from relational model to an documental model, was needed a new web service to connect to the new documental database using GraphQL technology, with this web service  API can be possible to get data from RegulonDB with an application layer using the technology previously mentioned with Javascript. 

# System requirements

Required software

- Node JS 12.18.4
- NPM 6.14.6

# Install

Once the repo is cloned, use this command to install all libraries dependencies of the API

```bash
$ npm install
```

After that, use the following command and edit the ".env-sample" file to add credentials to access the MongoDB collections (keeping the variable name) and the port for GraphQL server (by default is used port 4000).

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

Starting up server with node use

 ```bash
$ npm start
 ```

Instead, can be used PM2 to start server with 

```bash
$ npm run start:pm2
```

To shutdown server with PM2 use

```bash
$ npm run stop:pm2
```

Now if the GraphQL PORT in .env was not defined, it will take port 4000 and GraphQL Playgroud will run at http://localhost:4000/graphql

# Project website

[Website where the software is described and allows users to obtain it as well as its documentation.]

# License

Copyright 2020 

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