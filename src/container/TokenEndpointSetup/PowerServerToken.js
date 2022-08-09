import { POWERSERVER_ID, REDIRECT_URI } from '../../config/env';
import queryString from 'query-string';
import { CODE_VERIFIER } from '../../config/PCKEConfigs';
import URL from 'url';

const PowerServerToken = async (code) => {
    let params = {
        client_id: POWERSERVER_ID,
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: REDIRECT_URI,
        code_verifier: CODE_VERIFIER,
        state: JSON.stringify({ provider: 'PowerServer' })
    }

    const post_data = queryString.stringify(params);
    let parsedUrl = URL.parse(`https://172.16.0.154:5000/connect/token`, true);

    let realHeaders = {};
    realHeaders['Host'] = parsedUrl.host;
    realHeaders["Content-Length"] = post_data.length;
    realHeaders["Content-Type"] = 'application/x-www-form-urlencoded';


    const options = {
        host: parsedUrl.hostname,
        port: parsedUrl.port,
        path: parsedUrl.pathname,
        method: "POST",
        headers: realHeaders
    };

    const payload = Object.assign({
        body: post_data
    }, options);

    let response = await fetch(`https://172.16.0.154:5000/connect/token`, payload)

    let res = await response.json();
    const token_object = JSON.parse(JSON.stringify(res));

    return token_object.access_token;

}


export default PowerServerToken;
