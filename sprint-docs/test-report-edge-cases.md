# Test Report - Edge Cases And Bug Logging

## Task

[Login Restyling Bootstrap] Task 8 - Test Edge Cases & Log Bugs

## Role

Dev Tester - Kai Jie Yee

## Date

Tuesday, 11 August 2026

## Completion Comment

Done: Tested invalid login, direct team-page URL access without login, missing-photo fallback icons, and current deployed blurb layout. No blocking bugs found.

## Deliverables

- Test script: `test-script-edge-cases.md`
- Test report: `test-report-edge-cases.md`

## Test Result

Passed with minor content note.

## Tested URL

<https://rmit-capstone-programming-project-g.vercel.app/>

## Edge Case Results

| ID | Edge Case | Actual Result | Status |
| --- | --- | --- | --- |
| EC-01 | Invalid login | Invalid credentials showed `Invalid email or password` and remained on sign-in page. | Pass |
| EC-02 | Direct `/team` access without login | Logged-out access redirected to `/auth/signin?redirect=%2Fteam`. | Pass |
| EC-03 | Missing profile photo fallback | Member cards displayed avatar/default icons. | Pass |
| EC-04 | Long blurb / grid overflow check | Current deployed blurbs displayed within cards without visible overflow or grid break. | Pass |
| EC-05 | Bug logging | No blocking bugs found. | Pass |

## Minor Content Note

The deployed team page shows the UX member name as `Hoang Quoc Khanh Nguyen`. Earlier BA validation used `Khanh Nguyen Hoang Quoc`. This is recorded as a name-order clarification, not a blocking functional bug.

## Bugs

N/A - no blocking bugs found during edge-case testing.

## Note For Next Role

PM can proceed with final review. The tested deployed flow passed, and no outstanding blocking issue needs Dev 1 action before sign-off.
