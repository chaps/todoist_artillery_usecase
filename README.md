# Artillery use case with TODOIST REST API backend service.

## Env Setup
`npm install `


## Run tests:

###  Requirements:
- Set your api token (provided in the following link: https://todoist.com/prefs/integrations)
(Linux, macOS) `export TOKEN=YOURAPITOKEN`

`npm run test`

Results will be located under a directory named `results/` , 
it will contain a `report.html` file which can open locally or
archived under a CI/CD job or pipeline.
