## HBH_HouseBuildHub

## Branch Structure
- **main**: Stable code, ready for release.
- **develop**: Development branch where all features are merged.
- **feature/***: Branches for developing individual features.
- **release/***: Branches for preparing a release.
- **hotfix/***: Branches for urgent bug fixes in the production version.

## Working with Branches
1. Create a feature branch from `develop`:
    ```bash
    git checkout develop
    git checkout -b feature/<feature-name>
    ```

2. After completing the feature, create a pull request to merge it into `develop`.

3. To prepare for a release, create a release branch from `develop`:
    ```bash
    git checkout develop
    git checkout -b release/<version-number>
    ```

4. For hotfixes, create a branch from `main`:
    ```bash
    git checkout main
    git checkout -b hotfix/<version-number>
    ```

## Automatic Deployment
- Automatic deployment to production is done from the `main` branch.
- Automatic deployment to the testing environment is done from the `develop` branch.

## CI/CD Setup
- Use GitHub Actions / Jenkins for automatic deployment.
- Docker is used for containerization.
- Kubernetes is used for managing containerized applications.
