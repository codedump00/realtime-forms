type TConfig = Record<any, any>
// type TEnv = "local" | "dev" | "uat" | "prod";


const configs: TConfig = {
  local: {
    port: process.env.PORT ?? 8000,
  },
  dev: {},
  uat: {},
  prod: {}
};


export const config = configs[process.env.ENV ?? "local"];
