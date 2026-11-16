import { createFileRoute } from "@tanstack/react-router";

import { JobMatchApp } from "@/components/jobmatch/JobMatchApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JobMatch ATS — Analisador de currículo para vagas" },
      {
        name: "description",
        content:
          "Compare seu currículo com uma vaga, veja a compatibilidade estimada, palavras-chave ausentes e gere uma versão otimizada para ATS em PDF.",
      },
      { property: "og:title", content: "JobMatch ATS — Analisador de currículo para vagas" },
      {
        property: "og:description",
        content: "Compatibilidade estimada, palavras-chave e currículo organizado para ATS, direto no navegador.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JobMatchApp,
});
