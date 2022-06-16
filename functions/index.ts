import { APIGatewayProxyEvent, Context } from 'aws-lambda'

exports.handler = async function (event: APIGatewayProxyEvent, context: Context) {
  console.log('Hello World Log')
  return { message: 'Hello World' }
}
