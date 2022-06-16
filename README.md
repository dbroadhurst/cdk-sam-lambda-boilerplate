# Welcome to your CDK + SAM Lambda TypeScript boilerplate project

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template

## Developing with SAM

Lambda development has started to improve. This boilerplate demonstrates how to combine CDK and SAM to develop and deploy Typescript lambda code

```
cdk synth --no-staging
sam local invoke GetHello --no-event -t ./cdk.out/LambdaCdkStack.template.json
```

Useful reference can be found [here](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-cdk-getting-started.html)

[CDK Install](https://docs.aws.amazon.com/cdk/v2/guide/cli.html)

[SAM Install](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
