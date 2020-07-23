#!/usr/bin/env bash

if [ ! -d src ]
then
mkdir src
fi

cd Karbo-webwallet-js
npm install
node ./node_modules/typescript/bin/tsc --project tsconfig.prod.json
node build.js
cd ../

cp -r Karbo-webwallet-js/src/. src
cp -r config/main.js src