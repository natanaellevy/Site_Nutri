# Site_Nutri

Landing page profissional em `Astro + TypeScript` para uma nutricionista, com foco em:

- mobile first
- responsividade
- conversão direta para o WhatsApp
- copy persuasiva com ética
- SEO técnico básico
- headers de segurança para Cloudflare Pages e Vercel

## Apoio para AE II

Este repositório também está documentado para a disciplina `Atividade Extensionista II: Tecnologia Aplicada à Inclusão Digital - Projeto`, usando o site como canal digital simples de informação e contato para a comunidade de `Santa Luzia, Cidade Estrutural/DF`.


## Como rodar

1. Instale Node.js 18+.
2. Rode `npm install`.
3. Rode `npm run dev`.

## Onde editar o conteúdo

O conteúdo principal da nutricionista está centralizado em:

- `src/config/site.ts`

## Estrutura principal

- `src/pages/index.astro`: landing page
- `src/pages/privacidade.astro`: política de privacidade
- `src/lib/whatsapp.ts`: helper para padronizar links do WhatsApp
- `public/_headers`: headers para Cloudflare Pages
- `vercel.json`: headers para Vercel
