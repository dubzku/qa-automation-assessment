# QA Automation Assignment: Part 2 - API Test

## Description

This part will focus on your ability to write an automated API test against a public facing endpoint using the tool of your choice.

Using the EventBrite API (https://www.eventbrite.com/platform/api), write an automated API test to:

1. Create a new event from scratch.
2. Update the above event with additional details (ex: updated description, start time etc). 

You may use any language/test framework of your choice. Write an automated test to validate the above requests are satisfied. 

Please make your code available online (Github, Google Drive etc) and include a README with instructions on how to run the test.

Note: Use of the EventBrite API requires you to create an account and obtain a token beforehand (https://www.eventbrite.com/platform/)


## Installation

```bash
# Run from the project's root directory
npm install -D @playwright/test
```

## Running the Test

```bash
npx playwright test
```

## Resources
https://playwright.dev/docs/test-api-testing

https://playwright.dev/docs/test-assertions

https://www.eventbrite.com/platform/docs/create-events

https://reflect.run/articles/using-playwright-for-api-testing/