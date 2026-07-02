# ARTIC Health Companion Development Principles

## Coding Standards
- Use consistent, readable formatting and modern JavaScript practices.
- Keep controllers thin by moving business logic into services.
- Prefer explicit error handling and meaningful log context.
- Validate all external inputs with Joi or middleware.
- Keep UI templates maintainable and avoid inline script complexity.

## Git Workflow
- Use feature branches: `feature/<name>`
- Keep commits atomic and self-contained
- Rebase or squash before merging to maintain a clean history
- Use descriptive commit messages with intent and scope

## Branch Strategy
- `main` / `master`: production-ready stable code
- `develop`: active development and integration
- `feature/*`: new features or enhancements
- `fix/*`: bug fixes or maintenance updates
- `hotfix/*`: emergency fixes for production issues

## Pull Request Rules
- Include a summary of changes and testing notes
- Link to relevant issues or roadmap items
- Ensure code passes local validation and review
- Keep PR scope focused and easy to review
- Request at least one reviewer before merging

## Testing Requirements
- Add regression coverage for bug fixes and new features when possible
- Execute manual end-to-end flows for critical user journeys
- Validate authentication, data submission, and protected routes
- Keep documentation aligned with implementation changes

## Code Review Checklist
- [ ] Does the code meet functional requirements?
- [ ] Are edge cases and errors handled gracefully?
- [ ] Is user input validated before processing?
- [ ] Are new dependencies necessary and justified?
- [ ] Is naming clear and consistent?
- [ ] Are documentation and comments updated if required?
- [ ] Does the PR include appropriate context and testing notes?

## Documentation Standards
- Maintain professional, accessible Markdown documentation.
- Use consistent headings, lists, and code blocks.
- Keep architecture and roadmap files up to date with the project direction.
- Include diagrams or placeholders for key concepts.
- Document deployment, configuration, and contribution guidance clearly.
