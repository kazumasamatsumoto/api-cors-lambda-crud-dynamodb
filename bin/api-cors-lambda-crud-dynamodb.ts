#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ApiLambdaCrudDynamoDBStack } from '../lib/api-cors-lambda-crud-dynamodb-stack';

const app = new cdk.App();
new ApiLambdaCrudDynamoDBStack(app, 'ApiCorsLambdaCrudDynamodbStack');
app.synth();