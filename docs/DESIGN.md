# Direção de interface — Deyse Rodrigues

## Objetivo
Site de apresentação em Vue para conhecer a profissional, explorar procedimentos e iniciar contato. Manter a identidade existente: fundo claro, dourado discreto, fotografias reais e títulos serifados com texto de leitura em fonte de sistema.

## Preferências confirmadas
- Ocupar a largura da tela, sem borda externa escura.
- Menu lateral em telas menores e navegação horizontal no computador.
- Quatro imagens de apresentação em carrossel.
- Um carrossel por área, com dois procedimentos por página também no celular.
- Detalhes nativos que abrem e fecham em cada procedimento.
- Contatos flutuantes; não exibir número de WhatsApp nem identificador do Instagram.
- Não inventar depoimentos, métricas, preços ou qualificações.

## Sistema visual
Tokens em src/style.css: cores por função, escala de espaços, raios para controles e cards, tipografia de leitura e de destaque. Preservar componentes existentes antes de criar variações.
A ação principal da abertura é conversar pelo WhatsApp. As seções devem ter títulos visíveis e uma hierarquia de leitura clara. Não aplicar convenções de apps nativos a uma página web sem justificativa.

## Qualidade
Verificar larguras de 320 a 2560 px, navegação por teclado, detalhes, menu e carrosséis. Respeitar movimento reduzido, manter focos visíveis, alvos de toque confortáveis e idioma pt-BR. Não alegar conformidade integral WCAG sem auditoria específica.

## Referências consultadas em 2026-09-10
- UI Craft: https://github.com/educlopez/ui-craft — composição, hierarquia, movimento e acessibilidade.
- Apple Design Skill: https://github.com/dickwu/apple-design-skill — princípios gerais de legibilidade e adaptação; não é uma certificação HIG.
- Interface Auditor: https://github.com/uxuiprinciples/agent-skills — taxonomia local de problemas de UX; API paga não utilizada.
- Dembrandt: https://github.com/dembrandt/dembrandt-skills — component-family-consistency, reutilização e tokens compartilhados.

Os arquivos consultados estão em docs/design-references. São referências de projeto, não uma instalação global nem a importação integral de todas as skills. As preferências explícitas acima prevalecem sobre recomendações genéricas, como evitar carrosséis ou alterar a paleta.

## Primeira revisão aplicada
- Removido CSS de demonstração do Vite, incluindo tema escuro conflitante.
- Adicionados tokens visuais, títulos de seção e hierarquia no contato principal.
- Alvos dos indicadores dos carrosséis aumentados para 44px.
- Detalhes de procedimentos com fonte maior no celular.
- Animação de entrada respeita movimento reduzido e usa duração de 350ms.
- Link para pular navegação e metadados em português.

## Evolução da apresentação
- Abertura com fotografia existente em destaque, mensagem sobre cuidado individual e ação para solicitar avaliação pelo WhatsApp.
- Confirmado pelo usuário: avaliação inicial, proposta personalizada de cuidado e acompanhamento.
- Cada procedimento possui link de interesse com mensagem específica, sem envio automático.
- Carrossel de apresentação mantém as quatro imagens e inclui resumo em texto legível do card selecionado.
- Pendências de conteúdo: depoimentos reais autorizados e fotos reais do espaço. Não publicar conteúdo inventado para preencher essas seções.
- Verificação: compilação e navegação em 320, 390, 768, 1024, 1440 e 2560 px; links dos seis procedimentos conferidos, detalhes e menu testados, imagens de desktop e celular revisadas.
