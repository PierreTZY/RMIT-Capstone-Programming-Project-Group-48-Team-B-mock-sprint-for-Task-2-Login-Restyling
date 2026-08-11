# Design Validation

## Task

[Login Restyling Bootstrap] Validate Design Against Requirements

## Role

BA / Dev Tester - Kai Jie Yee

## Date

Saturday, 9 August 2026

## Source Documents

- BA requirements document: `BA_Requirements_v0.2.pdf`
- UX design file: `FieldCapture_B.fig`
- Deployed URL: <https://rmit-capstone-programming-project-g.vercel.app/>

## Validation Result

Approved with minor changes.

## Completed Review

Reviewed the Figma login page and team page mockups against the BA requirements document.

## Passed

- Login page is styling-only and does not introduce new authentication/session behaviour.
- Login mockup keeps the email and password fields visible.
- Login page and team page use a consistent dark theme, green FieldCapture accent colour, and card-based visual style.
- Team page includes the required fields: member name, profile image/avatar, role, and short blurb area.
- Missing profile photos appear to be handled through avatar placeholders.

## Gaps / Minor Changes Requested

1. Ensure the login error message area remains visible after restyling.
2. Keep sidebar items such as Notes/Profile/Settings as visual/navigation-only unless already supported by the boilerplate, so the scope does not expand.

## Follow-Up Evidence

- Invalid login testing confirmed that the login error message is visible on the deployed URL.
- The deployed team page displays avatar placeholders, names, roles, and role-specific blurbs.
- No blocking design gaps remain for the tested mock sprint scope.

## Note For Next Role

The design can proceed to Dev after the minor clarifications are addressed. Dev should not change authentication logic or session behaviour.
