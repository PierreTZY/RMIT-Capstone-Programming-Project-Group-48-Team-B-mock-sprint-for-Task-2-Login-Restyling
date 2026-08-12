/**
 * [Login Restyling Bootstrap] Task 7
 * Test Login -> Redirect -> Team Page Flow
 *
 * Role: Dev Tester - Kai Jie Yee
 * Date: Tuesday, 11 August 2026
 * Environment: Production deployment
 * URL: https://rmit-capstone-programming-project-g.vercel.app/
 * Browser: Chrome
 *
 * Purpose:
 * This JavaScript file documents the manual happy-path test script used to
 * validate that a valid login redirects to the team page and shows the required
 * team content. It does not store real passwords or private credentials.
 */

const testEnvironment = {
  name: "Production deployment",
  url: "https://rmit-capstone-programming-project-g.vercel.app/",
  browser: "Chrome",
  testType: "Manual end-to-end happy-path test",
};

const preconditions = [
  "The deployed URL is live.",
  "A valid RMIT student test account exists.",
  "Tester is logged out before starting the test.",
  "Do not write the real test password in this script or repository.",
];

const testSteps = [
  {
    step: 1,
    action: "Open the deployed URL.",
    expectedResult: "Home page loads without server or browser error.",
  },
  {
    step: 2,
    action: "Click the Sign in link or button.",
    expectedResult: "Sign-in page opens.",
  },
  {
    step: 3,
    action: "Enter a valid RMIT student email and valid password.",
    expectedResult: "Login form accepts the credentials.",
  },
  {
    step: 4,
    action: "Click Sign in.",
    expectedResult: "Login succeeds and the user is redirected to /team.",
  },
  {
    step: 5,
    action: "Inspect the team page.",
    expectedResult: "Team Overview page is visible.",
  },
  {
    step: 6,
    action: "Check each team member card.",
    expectedResult:
      "Each card displays avatar/default icon, name, role, and short blurb.",
  },
  {
    step: 7,
    action: "Confirm required members are visible.",
    expectedResult:
      "Kim Khanh Do, Kai Jie Yee, Pierre Tan, and Hoang Quoc Khanh Nguyen are visible.",
  },
];

const passFailCriteria =
  "Pass if valid login redirects to the team page and all required team content is visible. Fail if login does not work, redirect does not happen, or required team content is missing.";

const loginFlowTestScript = {
  task: "[Login Restyling Bootstrap] Task 7 - Test Login -> Redirect -> Team Page Flow",
  role: "Dev Tester - Kai Jie Yee",
  date: "Tuesday, 11 August 2026",
  testEnvironment,
  preconditions,
  testSteps,
  passFailCriteria,
};

console.table(testSteps);
console.log("Pass / Fail Criteria:", passFailCriteria);

module.exports = loginFlowTestScript;
