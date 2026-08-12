/**
 * [Login Restyling Bootstrap] Task 8
 * Test Edge Cases & Log Bugs
 *
 * Role: Dev Tester - Kai Jie Yee
 * Date: Tuesday, 11 August 2026
 * Environment: Production deployment
 * URL: https://rmit-capstone-programming-project-g.vercel.app/
 * Browser: Chrome
 *
 * Purpose:
 * This JavaScript file documents the manual edge-case test script used to
 * validate invalid login feedback, protected team-page access, fallback avatar
 * display, and current card layout behaviour.
 */

const testEnvironment = {
  name: "Production deployment",
  url: "https://rmit-capstone-programming-project-g.vercel.app/",
  browser: "Chrome",
  testType: "Manual edge-case test",
};

const testCases = [
  {
    id: "EC-01",
    edgeCase: "Invalid login",
    steps: [
      "Open /auth/signin.",
      "Enter an invalid email and invalid password.",
      "Click Sign in.",
    ],
    expectedResult:
      "Error message appears and the user remains on the sign-in page.",
  },
  {
    id: "EC-02",
    edgeCase: "Direct team-page access without login",
    steps: [
      "Log out of the application.",
      "Open /team directly in the browser address bar.",
    ],
    expectedResult: "User is redirected to /auth/signin?redirect=%2Fteam.",
  },
  {
    id: "EC-03",
    edgeCase: "Missing profile photo fallback",
    steps: ["Inspect member cards on /team."],
    expectedResult:
      "Each member shows an avatar/default icon where no uploaded photo exists.",
  },
  {
    id: "EC-04",
    edgeCase: "Long blurb / grid overflow check",
    steps: ["Inspect current deployed blurbs and card layout on /team."],
    expectedResult:
      "Card text remains readable and the grid does not overflow or break.",
  },
  {
    id: "EC-05",
    edgeCase: "Bug logging",
    steps: [
      "Record any failed expected result.",
      "Include clear reproduction steps for any bug found.",
    ],
    expectedResult: "Bugs are logged if found, or N/A is recorded if none are found.",
  },
];

const passFailCriteria =
  "Pass if invalid login gives visible feedback, protected routes redirect correctly, fallback icons appear, current blurbs do not break the layout, and any bugs are logged.";

const edgeCaseTestScript = {
  task: "[Login Restyling Bootstrap] Task 8 - Test Edge Cases & Log Bugs",
  role: "Dev Tester - Kai Jie Yee",
  date: "Tuesday, 11 August 2026",
  testEnvironment,
  testCases,
  passFailCriteria,
};

console.table(
  testCases.map(({ id, edgeCase, expectedResult }) => ({
    id,
    edgeCase,
    expectedResult,
  })),
);
console.log("Pass / Fail Criteria:", passFailCriteria);

module.exports = edgeCaseTestScript;
