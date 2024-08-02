import { test as base } from '@playwright/test';
import { TodoPage } from 'pages/todo-page';

// Extend basic test by providing a "todoPage" fixture.
const test = base.extend<{ todoPage: TodoPage }>({
  todoPage: async ({ page }, use) => {
    // Set up the fixture.
    const todoPage = new TodoPage(page);
    await todoPage.goto();
    await todoPage.addToDo('item1');
    await todoPage.addToDo('item2');

    // Use the fixture value in the test.
    await use(todoPage);

    // Clean up the fixture.
    await todoPage.removeAll();
  },
});

test('should add an item', { tag: ['@UI','@TC010','@Smoke']}, async ({ todoPage }) => {
  await todoPage.addToDo('my item');
  // ...
});

test('should remove an item', { tag: ['@UI','@TC011','@Smoke']}, async ({ todoPage }) => {
  await todoPage.remove('item1');
  // ...
});