declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number
      DB_USER: string
      DB_PORT: number
      DB_PASSWORD: string
      DB_HOST: string
      DB_NAME: string
      SECRET_KEY: string
      CLIENT_URL: string
    }
  }
}

export {}