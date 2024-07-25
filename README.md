

### install dependencies

```sh
npm install
npx playwright install
```

### generate api client for TypeScript 

```sh
npm install @openapitools/openapi-generator-cli -D
openapi-generator-cli generate -g typescript-axios -i https://petstore.swagger.io/v2/swagger.json -o ./src/api
```

note: there are veriety of options:
    - typescript (experimental)
    - typescript-angular
    - typescript-aurelia
    - typescript-axios
    - typescript-fetch
    - typescript-inversify
    - typescript-jquery
    - typescript-nestjs (experimental)
    - typescript-node
    - typescript-redux-query
    - typescript-rxjs

for more details see "openapi-generator-cli list"


### run api test

```sh
npx playwright test --grep "@TC001" --project=Chrome
```


### to open last HTML report run:

```sh
npx playwright show-report html-report
```

### allure report run:

```sh
allure serve
```

more about allure https://allurereport.org/docs/playwright/
