# Test Script - Edge Cases And Bug Logging

## Task

[Login Restyling Bootstrap] Task 8 - Test Edge Cases & Log Bugs

## Role

Dev Tester - Kai Jie Yee

## Date

Tuesday, 11 August 2026

## Test Environment

- Environment: Production deployment
- URL: <https://rmit-capstone-programming-project-g.vercel.app/>
- Browser: Chrome
- Test type: Manual edge-case test

## Test Cases

| ID | Edge Case | Steps | Expected Result |
| --- | --- | --- | --- |
| EC-01 | Invalid login | Open `/auth/signin`, enter invalid email/password, click `Sign in`. | Error message appears and user remains on sign-in page. |
| EC-02 | Direct team-page access without login | Log out, then open `/team` directly. | User is redirected to `/auth/signin?redirect=%2Fteam`. |
| EC-03 | Missing profile photo fallback | Inspect member cards on `/team`. | Each member shows avatar/default icon where no uploaded photo exists. |
| EC-04 | Long blurb / grid overflow check | Inspect current deployed blurbs and card layout on `/team`. | Card text remains readable and grid does not overflow or break. |
| EC-05 | Bug logging | Record any failed expected result with reproduction steps. | Bugs are logged if found, or N/A is recorded if none are found. |

## Pass / Fail Criteria

The edge-case test passes if invalid login gives visible feedback, protected routes redirect correctly, fallback icons appear, current blurbs do not break the layout, and any bugs are logged.
