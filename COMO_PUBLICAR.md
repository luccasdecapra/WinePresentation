# Guia de Vinhos — Terrazza Duomo 21 · como publicar (PWA)

## Arquivos do app (subir todos juntos no mesmo repositório)
- `guia-vinhos.html`  → o app
- `manifest.webmanifest`
- `sw.js`  → service worker (funciona offline depois da 1ª visita)
- `icon-192.png`, `icon-512.png`, `icon-180.png`, `favicon-32.png`

## Passos (GitHub Pages)
1. Crie um repositório novo (ex.: `GuiaVinhos`) **ou** use uma pasta dentro do `WineList`.
2. Suba os 7 arquivos acima.
3. **Recomendado:** renomeie `guia-vinhos.html` → `index.html`. Se fizer isso, abra
   `manifest.webmanifest` e o `sw.js` e troque `guia-vinhos.html` por `index.html`.
4. Settings → Pages → Branch `main` / root → Save.
5. Acesse a URL no **Safari do iPhone** → botão Compartilhar → **Adicionar à Tela de Início**.
   Vai instalar com o ícone dourado, abrir em tela cheia e funcionar offline.

## Sobre as fotos
As 128 fotos são reaproveitadas do app WineList (apontam para
`https://luccasdecapra.github.io/WineList/img/...`). **Mantenha o repositório `WineList` no ar**
para as fotos aparecerem. Se um dia quiser tudo num repo só, é só copiar a pasta `img/` para cá
e trocar essas URLs por `img/...`.

## Idiomas
Botão PT · IT · EN no topo. História/identidade e a frase de venda vêm das descrições
trilíngues do WineList; aromas foram traduzidos por glossário; tipologias e perfil também.

## Ajustes finos
- Perfil (bolinhas) e tipologias foram gerados por regra (categoria + uva). Para mudar um vinho,
  é editar o objeto dele dentro de `guia-vinhos.html` (campos `perfil` e `tipos`).
- "História & identidade" usa a descrição curada do WineList. Se quiser história de produtor
  mais longa por garrafa, dá para expandir.
