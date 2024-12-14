

import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData =  {
    
    // OPTIONAL - Amazon Cognito User Pool ID
    UserPoolId: 'ap-south-1_9MLSlVfkW',

    // OPTIONAL - Amazon Cognito Web Client ID (App client ID)
    ClientId: '650h7fgbscm5cvbmq92d9skl93',

    // OPTIONAL - Enforce user authentication prior to accessing AWS resources
    mandatorySignIn: true,
  
};

export default new CognitoUserPool(poolData);
