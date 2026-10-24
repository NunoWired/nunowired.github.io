# Portfólio 2.0.0 — Antonio Nunes

Portfólio pessoal de Antonio Nunes, com foco atual em **desenvolvimento de software e desenvolvimento web**.

Esta é a versão 2.0.0 do portfólio. Ela foi atualizada a partir de uma estrutura inicial em HTML, CSS e JavaScript e incrementada com tecnologias modernas para criar uma experiência mais rápida, organizada, acessível e visualmente atrativa.

## Tecnologias utilizadas

- [Astro](https://astro.build/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/)
- Markdown/MDX
- GitHub Actions
- GitHub Pages

## Motivação da atualização

A atualização teve como objetivo evoluir o portfólio de uma página estática para uma base mais profissional de desenvolvimento web.

As tecnologias foram escolhidas para permitir:

- Componentes reutilizáveis.
- Código mais organizado e tipado com TypeScript.
- Animações modernas e discretas com Framer Motion.
- Tema claro e escuro.
- Suporte aos idiomas português do Brasil e inglês dos Estados Unidos.
- Boa performance, com páginas estáticas geradas pelo Astro.
- Publicação automatizada pelo GitHub Actions.
- Facilidade para adicionar novos projetos, habilidades e conteúdos.

## Projetos destacados

- [PsiCompass](https://github.com/NunoWired/PsiDesk) — sistema web para apoio à gestão de consultórios de psicologia.
- [Projeto Sah](https://github.com/NunoWired/projetosah) — landing page responsiva para divulgação de evento musical católico.

## Estrutura do projeto

```text
.github/workflows/deploy.yml   Deploy automático para GitHub Pages
assets/                        Imagens, ícones e screenshots dos projetos
src/components/                Componentes Astro e React
src/layouts/                   Layout base do site
src/pages/                     Páginas em português e inglês
src/styles/                    Estilos globais e configuração do Tailwind
astro.config.mjs               Configuração do Astro
package.json                   Dependências e scripts
```

## Executar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Publicação

O portfólio é publicado automaticamente pelo GitHub Pages por meio do workflow `.github/workflows/deploy.yml` sempre que houver um push na branch `main`.

Site publicado:

https://nunowired.github.io/

## Contato

- E-mail: nunowired@gmail.com
- LinkedIn: https://www.linkedin.com/in/nunowired
- GitHub: https://github.com/NunoWired
