import { R2Explorer } from "r2-explorer";

// Read all available configurations here: https://r2explorer.dev/getting-started/configuration/
export default R2Explorer({ 
  readonly: false, 
  basicAuth: {
    username: 'user@terradx.ai',
    password: 'password@terradx.ai'
  },
});

