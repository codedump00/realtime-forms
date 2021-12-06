type TConfig = Record<any, any>
// type TEnv = "local" | "dev" | "uat" | "prod";


const configs: TConfig = {
  local: {
    port: process.env.PORT ?? 8000,
  },
  dev: {port: process.env.PORT ?? 8001,},
  uat: {port: process.env.PORT ?? 8002,},
  prod: {port: process.env.PORT ?? 8003,}
};


export const config = configs[process.env.ENV ?? "local"];
