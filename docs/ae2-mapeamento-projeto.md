# AE II - Mapeamento do Projeto Atual

## Enquadramento do tema

O projeto faz sentido para a `Atividade Extensionista II` quando e apresentado como tecnologia aplicada a inclusao digital em saude, e nao apenas como divulgacao comercial. O valor social do site esta em oferecer um ponto de acesso simples, mobile e em linguagem clara para pessoas da comunidade de `Santa Luzia, Cidade Estrutural/DF` iniciarem contato com atendimento nutricional.

## O que o projeto ja entrega

- `Responsividade e mobile first`: descritos em `README.md` e implementados em `src/styles/global.css`.
- `Contato direto via WhatsApp`: implementado em `src/components/WhatsAppButton.astro` com geracao padronizada de links em `src/lib/whatsapp.ts`.
- `Conteudo centralizado e editavel`: organizado em `src/config/site.ts`.
- `Informacoes e orientacao inicial`: apresentadas em `src/pages/index.astro` com beneficios, processo, servicos, FAQ e chamadas para contato.
- `Privacidade e transparencia`: pagina dedicada em `src/pages/privacidade.astro`.
- `SEO e estrutura tecnica`: configurados em `src/layouts/BaseLayout.astro`, `src/pages/robots.txt.ts`, `src/pages/sitemap.xml.ts` e `src/pages/site.webmanifest.ts`.
- `Seguranca basica`: headers definidos em `public/_headers` e `vercel.json`.
- `Local de aplicacao alinhado`: localidade configurada em `src/config/site.ts`.

## Mensagem central para a proposta

Use sempre esta ideia-base: o site reduz barreiras de acesso digital ao organizar informacoes, funcionar bem no celular e encaminhar o usuario para o WhatsApp profissional de forma simples e direta.

## O que nao deve ser prometido

- agendamento automatico
- formulario de cadastro
- area do paciente
- chatbot
- teleconsulta
- analytics
- entrega automatica do mini guia
- depoimentos reais ja publicados

## Regra pratica

Se um item nao aparece no codigo, no README ou na navegacao atual do site, ele nao deve entrar como compromisso da proposta.
