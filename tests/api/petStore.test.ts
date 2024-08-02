
import { PetApi, Pet } from 'src/api';
import { Configuration, FindPetsByStatusStatusEnum } from 'src/api';
import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";
import { test } from '@playwright/test';

const configuration = new Configuration();
const petApi = new PetApi(configuration);

test.describe('todo tests', () => {
  let todoPage;

  test.beforeEach(async ({ page }) => {
    console.info(' == beforeEach actions');
  });

  test.afterEach(async () => {
    console.info(' == afterEach actions');
  });

  test(`PetstoreAPITests`, { tag: ['@API','@TC001','@Smoke']}, async () => {
    await allure.description(
        "Test Example API\n\ndetails will be here.",
      );
      await allure.owner("John");
      await allure.tags("API Test", "Smoke");
      await allure.severity(Severity.CRITICAL);
      await allure.link("https://example.com/docs", "Related Documentation");
      await allure.issue("ERR-001", "https://example.com/issues/AUTH-123");
      await allure.tms("TMS-005", "https://example.com/tms/TMS-456");
      await allure.epic("API-1 interface");
      await allure.feature("API2 features");
      await allure.story("API story");

      let petList: Array<Pet> = null;
      await allure.logStep("API calls");
      const statusList: Array<FindPetsByStatusStatusEnum> = [FindPetsByStatusStatusEnum.Sold]

      await allure.step("Get list of items sorted by status '" + FindPetsByStatusStatusEnum.Sold + "'", async () => {
        const response = await petApi.findPetsByStatus(statusList);
        petList = response.data;
        console.info('API called successfully. Returned data(firstId): ' + petList[0].id + ' Headers: ' + response.headers + '  Status : ' + response.status);
        });

      var petId: number = petList[0].id;
      await allure.step("Get Pet item by id " + petId, async () => {
        const response2 = await petApi.getPetById(petId);
        console.info(response2.data);
        });
    });

  test(`PetstoreAPITestsSecond`, { tag: ['@API','@TC002','@Smoke']}, async () => {
    await allure.description(
        "Test Example API\n\ndetails will be here.",
      );
      await allure.owner("John");
      await allure.tags("API Test", "Smoke");
      await allure.severity(Severity.CRITICAL);
      await allure.link("https://example.com/docs", "Related Documentation");
      await allure.issue("ERR-0012", "https://example.com/issues/AUTH-123");
      await allure.tms("TMS-0052", "https://example.com/tms/TMS-456");
      await allure.epic("API-1 interface");
      await allure.feature("API2 features");
      await allure.story("API story Second");

      let petList: Array<Pet> = null;
      await allure.logStep("API calls");
      const statusList: Array<FindPetsByStatusStatusEnum> = [FindPetsByStatusStatusEnum.Available]

      await allure.step("Get list of items sorted by status '" + FindPetsByStatusStatusEnum.Available + "'", async () => {
        const response = await petApi.findPetsByStatus(statusList);
        petList = response.data;
        console.info('API called successfully. Returned data(firstId): ' + petList[0].id + ' Headers: ' + response.headers + '  Status : ' + response.status);
        });
    });

    });