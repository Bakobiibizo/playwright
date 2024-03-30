# Playwright automated testing library

A frame work to transform brittle code gen tests into robust fixtures and selectors for end to end testing. 

## Installing 

`\(p\)npm install`

`\(p\)npx playwright install`

## Useage

### Creating tests 
`\(p\)npx playwright codegen` 
When the browser appears visit your target site. Perform the actions you would like to have automated. The code gen will record your actions which you can copy out of the 2nd control window that appears with the browser. When you are done recording you can copy the code and put it into a `.txt` file with `test-` appended or `-test` postpended.

### Running tests
`\(p\)npx playwright test tests/test-text.spec.ts`
This will launch your test. Alternatively you can run `playwright test` instead of providing the path to run all the tests in the test folder. The engine parses the selectors, actions, and values used to perform your test and a test engine will run the test. 

### ToDo
- Currently the system parses the selectors and actions with their values but does not actually create the fixtures or page objects. Automating that will make this system extremely robust. 
- I have an AI Agent that is capabile of added selectors for the playwright system to pick up to a html document with high accuracy. Adding that will allow the system to dynamically add cust selectors to the html document in the dom and will allow for comprehensive tagging of a large code base for stable end to end testing. 

