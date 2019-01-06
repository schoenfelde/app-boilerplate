import { Constants } from 'expo';
import config from '../../deployment/config.json';

interface Environment {
    GOOGLE_CLIENT_ID: string
}

const ENV = {
    dev: {
        GOOGLE_CLIENT_ID: config.dev.GOOGLE_CLIENT_ID
    },
    prod: {
        GOOGLE_CLIENT_ID: config.prod.GOOGLE_CLIENT_ID
    }
}

function getEnvVars(env = ''):Environment {
    if (env && env.indexOf('prod') !== -1) return ENV.prod
    else return ENV.dev
  }

  export default getEnvVars(Constants.manifest.releaseChannel)