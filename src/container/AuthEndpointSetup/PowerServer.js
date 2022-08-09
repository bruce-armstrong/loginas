import { POWERSERVER_ID, REDIRECT_URI } from '../../config/env';
import queryString from 'query-string';
import { CODE_CHALLENGE_METHOD, CODE_CHALLENGE } from '../../config/PCKEConfigs'


const PowerServer = () => {
    return queryString.stringifyUrl({
        url: `https://172.16.0.154:5000/connect/authorize`,
        query: {
            client_id: POWERSERVER_ID,
            redirect_uri: REDIRECT_URI,
            response_type: 'code',
            scope: [
                'openid',
                'profile',
                'email',
            ].join(" "),
            state: JSON.stringify({ provider: 'PowerServer' }),
            code_challenge: CODE_CHALLENGE,
            code_challenge_method: CODE_CHALLENGE_METHOD
        }
    });
}

export default  PowerServer();