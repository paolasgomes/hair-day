import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "PUBLIC_",
  server: {
    DATABASE_URL: z.string().url(),
  },
  client: {
    PUBLIC_API_URL: z.string().url(),
  },
  runtimeEnvStrict: {
    DATABASE_URL: process.env.DATABASE_URL,
    PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  emptyStringAsUndefined: true,
});
