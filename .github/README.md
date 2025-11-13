# GitHub Actions Workflows

This directory contains automated workflows that run on GitHub Actions.

## Available Workflows

### 1. Build and Test (`build.yml`)

**Triggers:**
- Push to `main` or `master` branch
- Pull requests to `main` or `master` branch

**What it does:**
- Tests the build on Node.js 18.x and 20.x
- Installs dependencies using `npm ci`
- Runs the linter (`npm run lint`)
- Builds the project (`npm run build`)
- Verifies the build output exists
- Uploads build artifacts for 7 days

**Why it's useful:**
- Ensures code builds successfully before merging
- Tests compatibility across multiple Node.js versions
- Catches build errors early

---

### 2. Deploy Preview (`deploy-preview.yml`)

**Triggers:**
- Pull requests (opened, synchronized, or reopened)

**What it does:**
- Builds the project on Node.js 20.x
- Posts a comment on the PR with:
  - Build status (✅ or ❌)
  - Total build size
  - Commit SHA
- Uploads preview artifacts for 3 days

**Why it's useful:**
- Provides immediate feedback on PRs
- Shows build size at a glance
- Creates downloadable preview builds

---

### 3. Bundle Size Check (`size-check.yml`)

**Triggers:**
- Pull requests to `main` or `master` branch

**What it does:**
- Builds both the PR branch and base branch
- Compares the bundle sizes
- Posts a detailed report showing:
  - Size of base branch
  - Size of PR branch
  - Difference in MB and percentage
  - Visual indicator (📈 increase, 📉 decrease, ✅ minimal)

**Why it's useful:**
- Monitors bundle size impact of changes
- Helps prevent bloat
- Makes size implications visible before merging

---

## Status Badges

Add these to your main README.md to show workflow status:

```markdown
![Build Status](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/Build%20and%20Test/badge.svg)
```

Replace `YOUR_USERNAME` and `YOUR_REPO` with your actual GitHub username and repository name.

---

## Customization

### Changing Node.js Versions

Edit the `matrix.node-version` in `build.yml`:

```yaml
strategy:
  matrix:
    node-version: [18.x, 20.x, 22.x]  # Add or remove versions
```

### Adjusting Artifact Retention

Change `retention-days` in any workflow:

```yaml
- name: Upload build artifacts
  uses: actions/upload-artifact@v4
  with:
    name: build-output
    path: dist/
    retention-days: 7  # Change this number
```

### Adding More Checks

You can add additional steps like:
- Running tests
- Security scanning
- Accessibility checks
- Performance testing

Example:

```yaml
- name: Run tests
  run: npm test

- name: Run accessibility tests
  run: npm run a11y
```

---

## Troubleshooting

### Build fails on CI but works locally

1. Make sure you're using the same Node.js version
2. Check if dependencies are properly locked in `package-lock.json`
3. Clear cache: add `cache: false` to `setup-node` action

### Permissions errors

Some workflows need specific permissions. Check the `permissions` section in each workflow:

```yaml
permissions:
  contents: read
  pull-requests: write
```

---

## Best Practices

1. **Always test locally first:** Run `npm run build` before pushing
2. **Keep workflows fast:** Minimize build time for better developer experience
3. **Use caching:** We use `cache: 'npm'` to speed up dependency installation
4. **Review workflow runs:** Check the Actions tab regularly for issues

---

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [Marketplace Actions](https://github.com/marketplace?type=actions)

