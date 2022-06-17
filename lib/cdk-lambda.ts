import { Duration, Stack, StackProps } from 'aws-cdk-lib'
import { Rule, Schedule } from 'aws-cdk-lib/aws-events'
import * as targets from 'aws-cdk-lib/aws-events-targets'
import { Runtime } from 'aws-cdk-lib/aws-lambda'
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs'
import { Construct } from 'constructs'

export class LambdaCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const getHello = new lambda.NodejsFunction(this, 'GetHello', {
      bundling: {
        commandHooks: {
          beforeBundling() {
            return []
          },
          afterBundling(inputDir: string, outputDir: string): string[] {
            return [`cp ${inputDir}/functions/bundledfile.txt ${outputDir}/bundledfile.txt`]
          },
          beforeInstall() {
            return []
          },
        },
      },
      runtime: Runtime.NODEJS_16_X,
      entry: './functions/index.ts',
      handler: 'handler',
      timeout: Duration.minutes(10),
      memorySize: 2048,
    })

    // start every 10 minutes
    new Rule(this, 'LambdaScheduleRule', {
      schedule: Schedule.cron({ hour: '*/1' }),
      targets: [new targets.LambdaFunction(getHello)],
    })
  }
}
