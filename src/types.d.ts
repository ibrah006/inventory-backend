declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    DB_HOST: string;
    DB_USER: string;
    DB_PASSWORD: string;
  }
}
