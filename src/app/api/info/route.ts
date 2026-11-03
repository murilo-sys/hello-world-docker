import { connection } from "next/server";

export async function GET() {
  await connection(); // lê as variáveis a cada requisição, não no build

  return Response.json({
    app: process.env.APP_NOME ?? "não definido",
    apiKeyConfigurada: Boolean(process.env.API_KEY)
  });
}
