import { Stack, StackProps } from 'aws-cdk-lib'
import { Rule, Schedule } from 'aws-cdk-lib/aws-events'
import * as targets from 'aws-cdk-lib/aws-events-targets'
import { Runtime } from 'aws-cdk-lib/aws-lambda'
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs'
import { Construct } from 'constructs'

export class LambdaCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const getHello = new lambda.NodejsFunction(this, 'GetHello', {
      runtime: Runtime.NODEJS_16_X,
      entry: './functions/index.ts',
      handler: 'handler',
    })

    new Rule(this, 'LambdaScheduleRule', {
      schedule: Schedule.cron({ minute: '*/1' }),
      targets: [new targets.LambdaFunction(getHello)],
    })
  }
}
