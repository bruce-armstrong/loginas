import { FACEBOOK_ID, REDIRECT_URI } from '../../config/env';
import queryString from 'query-string';

const Facebook = () => {
    return queryString.stringifyUrl({
        url: `https://www.facebook.com/v9.0/dialog/oauth`,
        query: {
            client_id: FACEBOOK_ID,
            redirect_uri: REDIRECT_URI,
            state: JSON.stringify({ provider: 'Facebook' }),
            scope: 'email',
        }
    });
}

export default Facebook();