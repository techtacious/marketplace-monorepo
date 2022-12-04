const execSync = require('child_process').execSync;

const generatePath = '../../libs/openapi/src';

console.log('removing generated/openapi directory...');
execSync(`rm -rf ${generatePath}`);

const output = execSync(
  `npx @openapitools/openapi-generator-cli generate -g typescript-angular -i src/openapi.yaml -o ${generatePath} --additional-properties=usePromises=true`,
  { encoding: 'utf-8' }
);
console.log(output);
