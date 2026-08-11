# Test Report - Login To Team Page Flow

## Task

[Login Restyling Bootstrap] Task 7 - Test Login -> Redirect -> Team Page Flow

## Role

Dev Tester - Kai Jie Yee

## Date

Tuesday, 11 August 2026

## Completion Comment

Done: Tested valid login end-to-end on the deployed URL.

## Deliverables

- Test script: `test-script-login-flow.md`
- Test report: `test-report-login-flow.md`

## Test Result

Passed. No blocking bugs found.

## Tested URL

<https://rmit-capstone-programming-project-g.vercel.app/>

## Test Evidence Summary

- Live deployed URL loaded successfully.
- Valid login using an RMIT student account succeeded.
- Successful login redirected to `/team`.
- Team page loaded correctly after login.
- Team page displayed all required member cards.
- Each member card included avatar/default icon, name, role, and short blurb.

## Verified Team Content

| Member | Role | Content Status |
| --- | --- | --- |
| Kim Khanh Do | Project Manager | Present |
| Kai Jie Yee | Business Analyst | Present |
| Pierre Tan | Developer | Present |
| Hoang Quoc Khanh Nguyen | UX Designer | Present |

## Bugs

N/A - no bugs found for this happy-path login flow.

## Note For Next Role

Login -> redirect -> team page flow is working on the deployed URL. Ready for edge-case testing and final review.
