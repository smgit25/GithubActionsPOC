# GithubActionsPOC

A sample GitHub Actions Proof of Concept (POC) project that demonstrates automated deployment to AWS Lambda.

## Features

- **Automated CI/CD**: Uses GitHub Actions to automate the deployment process.
- **AWS Lambda Deployment**: Packages and deploys a Node.js function to AWS Lambda.
- **Node.js Environment**: Configures and runs the workflow in a Node.js environment.

## Workflow Overview

The GitHub Actions workflow is defined in [`.github/workflows/ci.yml`](.github/workflows/ci.yml). Here's what it does:

1. **Trigger**: Runs on every push to the `main` branch.
2. **Steps**:
   - **Checkout Code**: Clones the repository.
   - **Set Up Node.js**: Configures Node.js version 18.
   - **Install Dependencies**: Installs required Node.js packages.
   - **Package Lambda Function**: Zips the Lambda function code and dependencies.
   - **Configure AWS Credentials**: Sets up AWS credentials using GitHub Secrets.
   - **Deploy to AWS Lambda**: Updates the Lambda function with the new code.

## Prerequisites

- An AWS Lambda function named `github-actions-poc` must exist.
- GitHub Secrets must be configured:
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`
  - `AWS_REGION`

## How to Use

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/GithubActionsPOC.git
   cd GithubActionsPOC