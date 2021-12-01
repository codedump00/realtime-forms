declare global {
  namespace NodeJS {
    type TEnv = "local" | "dev" | "uat" | "prod";

    interface ProcessEnv {
      PORT?: string;
      ENV: TEnv;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }