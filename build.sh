#!/usr/bin/env bash

aws s3 mb s3://pbl-bucket --region eu-central-1

sam init --runtime nodejs10.x --location github url:https://github.com/pablobl/sam-training

cd src
sam build

sam package --output-template packaged.yaml --s3-bucket pbl-bucket --region eu-central-1

sam deploy --template-file packaged.yaml --region eu-central-1 --capabilities CAPABILITY_IAM --stack-name aws-sam-pbl-training