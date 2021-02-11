# RegulonDB-WS GraphQL API


# Description

API web services to connect RegulonDB MongoDB collections. 
Functional services currently:
- Gene
- DrawingTracesTool 
- Coexpression
- Phrases

Services in Development: 
- Operon (first version integrated)
- Regulon (not available)

# Motivation

With the reengineering of RegulonDB passing from relational model to an documental model, was needed a new web service to connect to the new documental database using GraphQL technology, with this web service  API can be possible to get data from RegulonDB with an application layer using the technology previously mentioned with Javascript. 

# System requirements

Required software

- Node JS ^12.18.4
- NPM ^6.14.6

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

Starting up openServices and closedServices server firstly, without this, the GraphQL Gateway server will fail to start

 ```bash
$ npm run services
 ```

 When services are up, use this command to start GraphQL Gateway Service:

```
$ npm start
```

Now if the GraphQL Closed or Open ports in .env was not defined, it will take port 4002 and 4003 (by default) and GraphQL Playgroud for closedServices will run at http://localhost:4002/graphql and for OpenServices will run at http://localhost:4003/graphql

# Project website

[NOT DEFINED]

# License

Copyright 2021 RegulonDB

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