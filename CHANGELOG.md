# RegulonDB-WS-API Changelog

All notable changes in this project will be documented in this file

## [1.6.0](https://github.com/regulondbunam/GraphQL-api/releases/tag/1.6.0) - 2023-03-17

## New

- Added a new previous level for HT Datasets services in order to retrieve its metadata.

## Docs
- Updated test cases files to this new datamart model.

## Update
- All "id" properties were updated to "_id".
- Some property's name definitions were updated from snake_case to camelCase. 
- A resume of changes can be seen on release page.

## [1.5.3](https://github.com/regulondbunam/GraphQL-api/releases/tag/1.5.3) - 2023-02-14

## Fix
- Solved a bug related to latest property added in overviews service

## [1.5.2](https://github.com/regulondbunam/GraphQL-api/releases/tag/1.5.2) - 2023-02-14

### Updated
- Added a type property on overview service in data.objectsRelated

## [1.5.1](https://github.com/regulondbunam/GraphQL-api/releases/tag/1.5.1) - 2023-02-02

### Updated
- Added capability of retrieve srna objets for list

### Fix
- Minor bugs solved

## [1.5.0](https://github.com/regulondbunam/GraphQL-api/releases/tag/1.5.0) - 2023-01-30

### New 
- A service to list a resume of docs in all datamarts were added as listPage Service, the query is named getObjectList and retrives a list of docs of specific datamart in alphabetical order with the necessary info for list

### Update
- Some types were dupplicated in most datamarts, this dupplicated were optimized to few types for definition in schemas to improve code maintenance

## [1.4.0](https://github.com/regulondbunam/GraphQL-api/releases/tag/1.4.0) - 2022-12-08

### New
- Added a first version of additive Evidences in Regulon and Operon services.

### Update
- Added new properties on Regulon Service that previously versions doesn't contains.

## [1.3.0](https://github.com/regulondbunam/GraphQL-api/releases/tag/1.3.0) - 2022-11-01

### New 
- Merge with [RegulonDBHT API Services](https://github.com/regulondbunam/RegulonDBHT-API)
- Added services to insert and query the previously used queries strings.

### Updated
- Added bnumber to gene service to be queried by text search

### Fix
- Solved a bug related to Gensor Unite Services

## [1.2.2](https://github.com/regulondbunam/GraphQL-api/releases/tag/1.2.2) - 2022-09-26

### Fix
- Solved a bug related to an incorrectly named property

### Update
- Updated mongodb-filter-object-parser library

## [1.2.1](https://github.com/regulondbunam/GraphQL-api/releases/tag/1.2.1) - 2022-09-02

### Update
- Added Gensor Unit services in list as available service.

### Fix
- Solved some properties with a wrong name in dbInfo Services
- Minor bugs fixed

## [1.2.0](https://github.com/regulondbunam/GraphQL-api/releases/tag/1.2.0) - 2022-09-02

### New
- Added a first version of databaseInfo services, this services allows to user to known the metadata of the Regulon Datamarts data and all sources used to contain it.

### Update
- Some models as Gene and Regulon were updated to allow new properties used in new requiriments of RegulonDB Web App
- Libraries updated

### Fix
- Some bugs related to wrong data of responses were fixed
- Minor bugs fixed

## [1.1.2](https://github.com/regulondbunam/GraphQL-api/releases/tag/1.1.2) - 2022-06-21

### Fix 
- Solved a bug related to incorrect type of property in Gene Service

### Update
- Added a new service to obtain all phrases associated to all Id's in object

## [1.1.1](https://github.com/regulondbunam/GraphQL-api/releases/tag/1.1.1) - 2022-06-08

### Update
- Added continuants property on Regulon Service in regulatoryInteraction.regulator
- Bug fixes

## [1.1.0](https://github.com/regulondbunam/GraphQL-api/releases/tag/1.1.0) - 2022-06-03

### Update
- OpenServices and ClosedServices folders were renamed to Data and Tools respectively for better understanding of folder structure
- Schema and model of coexpression were updated, services are now correctly functional for deploy
- Moved Gensor Unit services from tools to data

### Fix
- Minor bugs were solved

## [1.0.2](https://github.com/regulondbunam/GraphQL-api/releases/tag/1.0.2) - 2022-04-21

### Update
- Added products objects of Transcription Factor on Regulon Datamart

## [1.0.1](https://github.com/regulondbunam/GraphQL-api/releases/tag/1.0.1) - 2022-03-07

### Fix
- A bug related to asynchronous functions for mongoose was solved, now Queries are correctly functional again

## [1.0.0](https://github.com/regulondbunam/GraphQL-api/releases/tag/1.0.0) - 2022-03-07

### Fix
- A bug related to asynchronous functions for mongoose was solved, now Queries are correctly functional again

## [1.0.0](https://github.com/regulondbunam/GraphQL-api/releases/tag/1.0.0) - 2022-01-31

### Updated
- RegulonDB-WS-API now uses Apollo Server Express
- Libraries are up to date
- Added description for functions on controller's files

---

## [0.8.2](https://github.com/regulondbunam/GraphQL-api/releases/tag/0.8.2) - 2021-11-26

### Fixed
- Merging schemas and resolvers code were changed due a recent update with GraphQL library (merge-graphql-schemas library is not more used, now @graphql-toolkit module is used)

## [0.8.1](https://github.com/regulondbunam/GraphQL-api/releases/tag/0.8.1) - 2021-11-24

### Fix
- Improved function to test additional services in gateway, now if an additional service is unavailable, services will start without them

### Update
- Updated libraries for RegulonDB Web Services

## [0.8.0](https://github.com/regulondbunam/GraphQL-api/releases/tag/0.8.0) - 2021-11-16

### Update
- HT Services were removed from RegulonDB-WS-API repository, RegulonDB HT Services are available in the following repository https://github.com/regulondbunam/RegulonDBHT-API

---

## [0.7.1](https://github.com/regulondbunam/GraphQL-api/releases/tag/0.7.1) - 2021-11-09

### Added
- New services were added to service list for use (Peaks, TFBinding and AuthorsData)

### Updated 
- Models of Peaks, TFBinding and AuthorsData were updated
- The model and schema were updated for Dataset Service

## [0.7.0](https://github.com/regulondbunam/GraphQL-api/releases/tag/0.7.0) - 2021-10-22

### Added
- Web service for HT dataset was added to RegulonDB Web Services API, this service is now available for use in this release

### Fixed 

- Added tabs for playground page in open, closed and HT services
- Fixed bugs related to regulatory network services not allowing full responses due to name mismatch

---

## [0.6.0](https://github.com/regulondbunam/GraphQL-api/releases/tag/0.6.0) - 2021-09-20

### Added
- Web service for Regulatory Network was added to RegulonDB Web Services API, this service is now available for use in this release

### Fixed 

- Improvement on dnaFeatures service controller, dealing with the queries in a better way
- Added compatibility with translational_tf_binding_sites for dnaFeatures services
- Minor bugs were solved in this version

---

## [0.5.2](https://github.com/regulondbunam/GraphQL-api/releases/tag/0.5.2) - 2021-08-09

### Fixed 

- Regulon model was updated on regulates -> genes -> terms, due an error that returns null even though the property exists in docs
- Improved error handling on Gateway server, with a specific format of errors (Message, Status, StatusCode)
- Updated name of id in Gene Datamart to _id to evade null responses

## [0.5.1](https://github.com/regulondbunam/GraphQL-api/releases/tag/0.5.1) - 2021-07-27

### Updated
 - The method to start services were updated to use only 1 instructions instead 2. Now is only necessary use "npm start"
 - .env file were updated to include some details to use RegulonDB-GraphQL-API with Docker
 - Added a genes object on properties of multifun and geneOntology on Regulon Service. This change can be viewed in this diagram: https://lucid.app/lucidchart/1be8ea06-41c6-4326-b249-aea80f10f2c2/view?page=~1FwrmR_wdzZ# 


### Fixed
 - DnaFeatures query "getGeneticElementsFromInterval" was updated to include genetic objects that doesn't have positions and are linked to another genetic object, also were included instructions to obtain objects with no strand.
 - Added _id property to transcriptionFactor object property on Regulon Service.

## [0.5.0](https://github.com/regulondbunam/GraphQL-api/releases/tag/0.5.0) - 2021-06-11

### Added

- SRNA Service was added in its first version of datamart as a Data Open Service in RegulonDB GraphQL Web Services. 
  - Some of this missing fields was:
    - Sigmulon - allCitations
    - Regulon - statistics
    - Operon - transcriptionUnits.promoters.boxes 

### Fixed

- Some bugs related to Regulon and Sigmulon services that cause missing fields on response were solved.

---

## [0.4.2](https://github.com/regulondbunam/GraphQL-api/releases/tag/0.4.2) - 2021-06-01

### Fixed

- A bug related to citations of Regulatory Interactions in Operon Sevices was solver
- Some schemas were updated due a problem with the query example
- Some problems with HT services was solved (HT is not available in services list)

### Updated

- A new version of Phrases Service was applied, this version is also available right now

## [0.4.1](https://github.com/regulondbunam/GraphQL-api/releases/tag/0.4.1) - 2021-05-27

### Fixed

- A bug related to Operon Service in Transcription Units -> Terminators were this fields resolve a null response has been solved

## [0.4.0](https://github.com/regulondbunam/GraphQL-api/releases/tag/0.4.0) - 2021-05-18

### Updated

- On all currently functional services were added a detailed description to Queries and assigned examples of use and a tag if a parameter is required for Web Service Documentation process.
- Added Citations on regulonDatamarts as allCitations and citations of transcriptionFactor

### Added

- Sigmulon Service was added with its recently version of datamart as a Data Open Service in RegulonDB GraphQL Web Services. 
- Added a first version of HT Service as a Data Open Service (this can be changed later)

---

## [0.3.0](https://github.com/regulondbunam/GraphQL-api/releases/tag/0.3.0) - 2021-04-20

### Updated

- On all currently functional services were added a detailed description to Queries and assigned default values on arguments that required for Web Service Documentation future process.

### Added

- Regulon Service was added with its recently version of datamart as a Data Open Service in RegulonDB GraphQL Web Services. 

---

## [0.2.1](https://github.com/regulondbunam/GraphQL-api/releases/tag/0.2.1) - 2021-03-11

### Updated

- On Operon Datamart was applied some changes such as:
  - transcriptionFactorBindingSites property was renamed to regulatorBindingSites.
  - regulatorBindingSites on transcriptionUnits.genes was updated to support regulatoryInteractions regulated by sRNA's.
  - mechanism property now appears on regulatorBindingSites Object

## [0.2.0](https://github.com/regulondbunam/GraphQL-api/releases/tag/0.2.0) - 2021-03-04

### Added

- Operon Services model and schema was updated and added to functional services as an open service. The following changes was applied on the last version of Operon Datamart Model.
  - On TranscriptionUnit.genes were added the property transcriptionFactorBindingSites.
  - Some names was updated or changed.

### Updated

- In Gene Datamart was added fragments object property in Gene Type for genes with multiple positions.

---

## [0.1.1](https://github.com/regulondbunam/GraphQL-api/releases/tag/0.1.1) - 2021-02-19

### Fixed

- The mongodb connection file was updated to solve connection problems.

## [0.1.0](https://github.com/regulondbunam/GraphQL-api/releases/tag/0.1.0) - 2021-02-11

### Added

- Added new folder structure for services.
- Added Apollo Federation support for new structure.
- Added services developed by students in Internship Projects.

- The following services are actually integrated and tested for deploy:
  - Gene (open)
  - Phrases (open)
  - Coexpression (open)
  - DrawingTracesTool (closed)



The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).