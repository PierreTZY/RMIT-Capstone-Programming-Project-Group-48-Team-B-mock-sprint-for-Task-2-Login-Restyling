# Test Script - Login To Team Page Flow

## Task

[Login Restyling Bootstrap] Task 7 - Test Login -> Redirect -> Team Page Flow

## Role

Dev Tester - Kai Jie Yee

## Date

Tuesday, 11 August 2026

## Test Environment

- Environment: Production deployment
- URL: <https://rmit-capstone-programming-project-g.vercel.app/>
- Browser: Chrome
- Test type: Manual end-to-end happy-path test

## Preconditions

- The deployed URL is live.
- A valid RMIT student test account exists.
- Tester is logged out before starting the test.

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Open the deployed URL. | Home page loads without server or browser error. |
| 2 | Click `Sign in`. | Sign-in page opens. |
| 3 | Enter a valid RMIT student email and valid password. | Login form accepts the credentials. |
| 4 | Click `Sign in`. | Login succeeds and the user is redirected to `/team`. |
| 5 | Inspect the team page. | Team Overview page is visible. |
| 6 | Check team member cards. | Each card displays avatar/default icon, name, role, and short blurb. |
| 7 | Confirm required members. | Kim Khanh Do, Kai Jie Yee, Pierre Tan, and Hoang Quoc Khanh Nguyen are visible. |

## Pass / Fail Criteria

The test passes if valid login redirects to the team page and all required team content is visible.

The test fails if login does not work, redirect does not happen, or required team content is missing.
