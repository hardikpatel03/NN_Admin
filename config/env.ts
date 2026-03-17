import { DEV } from "./dev.env";
import { STAGE } from "./stage.env";

export interface EnvConfig {
  baseURL: string;
  email: string;
  password: string;
}

// Read env ONLY ONCE
const ENV_NAME = (process.env.TEST_ENV || "dev").toLowerCase();
console.log("TEST ENV:", process.env.TEST_ENV);

// Freeze value so it never changes
const ENV: EnvConfig =
  ENV_NAME === "stage" ? STAGE : DEV;

console.log("✅ Running ENV:", ENV_NAME);

export default ENV;