# RegulonDB-WS-API Changelog

All notable changes in this project will be documented in this file

### [0.4.0]() - 2021-05-18

### Updated

- On all currently functional services were added a detailed description to Queries and assigned examples of use and a tag if a parameter is required for Web Service Documentation process.
- Added Citations on regulonDatamarts as allCitations and citations of transcriptionFactor

### Added

- Sigmulon Service was added with its recently version of datamart as a Data Open Service in RegulonDB GraphQL Web Services. 
- Added a first version of HT Service as a Data Open Service (this can be changed later)

### [0.3.0](https://github.com/regulondbunam/GraphQL-api/releases/tag/0.3.0) - 2021-04-20

### Updated

- On all currently functional services were added a detailed description to Queries and assigned default values on arguments that required for Web Service Documentation future process.

### Added

- Regulon Service was added with its recently version of datamart as a Data Open Service in RegulonDB GraphQL Web Services. 

### [0.2.1]([Release RegulonDB-WS-API 0.2.1 · regulondbunam/GraphQL-api (github.com)](https://github.com/regulondbunam/GraphQL-api/releases/tag/0.2.1)) - 2021-03-11

### Updated

- On Operon Datamart was applied some changes such as:
  - transcriptionFactorBindingSites property was renamed to regulatorBindingSites.
  - regulatorBindingSites on transcriptionUnits.genes was updated to support regulatoryInteractions regulated by sRNA's.
  - mechanism property now appears on regulatorBindingSites Object



### [0.2.0]([Release RegulonDB-WS-API 0.2.0 · regulondbunam/GraphQL-api (github.com)](https://github.com/regulondbunam/GraphQL-api/releases/tag/0.2.0)) - 2021-03-04

### Added

- Operon Services model and schema was updated and added to functional services as an open service. The following changes was applied on the last version of Operon Datamart Model.
  - On TranscriptionUnit.genes were added the property transcriptionFactorBindingSites.
  - Some names was updated or changed.

### Updated

- In Gene Datamart was added fragments object property in Gene Type for genes with multiple positions.

### [0.1.1]([Release RegulonDB-WS-API 0.1.1 · regulondbunam/GraphQL-api (github.com)](https://github.com/regulondbunam/GraphQL-api/releases/tag/0.1.1)) - 2021-02-19

### Fixed

- The mongodb connection file was updated to solve connection problems.



### [0.1.0]([Release RegulonDB-WS-API-Federation · regulondbunam/GraphQL-api (github.com)](https://github.com/regulondbunam/GraphQL-api/releases/tag/0.1.0)) - 2021-02-11

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