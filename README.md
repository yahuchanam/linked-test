# Linked Frontend Test

Teste de habilidades em frontend usando Angular 17.3.

Considerações:

- Desenvolvido com Angular 17.3.0 e suas features;
- Desenvolvido seguindo The Angular Way e Reactive Programming;
- Tentei componentizar o máximo possível, sem exageros e conforme a necessidade do desenvolvimento;
- Fiz uso dos pattern:
  - DRY;
  - SOLID (em alguns momentos - SRP é um desafio no Angular);
  - Object Calisthnics
  - Clean Code
  - BEM CSS (não havia necessidade mas usei em alguns casos)

_DISCLAIMER:_

Tentei usar o minimo possível de bibliotecas te terceiros, usando apenas:

* Angular Material: para ter o mínimo de UI components

Signal (embora seja padrão neste versão, muitos desenvolvedores não estão habituados).
Preferi usar o RxJS + Signal para gerenciamento de estados.

O teste essa semana me pegou realmente de surpresa, por isso não tive tanto tempo para me dedicar e por conta disso acabei não fazendo testes unitários, de toda forma deixo registrado que tenho experiência Jasmini e Jest e tenho domínio para testar qualquer aplicação frontend fazendo uso de mocks, stubs, spy e etc... Também tenho conhecimentos em Cypress para testes e2e.

## Para rodar:

```
npm install && ng serve -o
```
ou acesse:
https://linked-test.vercel.app/


Obrigado!

## Critérios de aceite:

- ✅ Crie uma aplicação Angular 16.x ou 17.x;
- ✅ Crie uma página de pesquisa de coleção de cartas para renderizar os componentes;
  - ✅ Componente de filtros para pesquisa de coleção, com entrada de texto do nome e seleção de bloco com as opções: Amonkhet, Ixalan, Zendikar, Ravnica ou Onslaught. Apenas o preenchimento do campo de texto poderá ser opcional;
  - ✅ Componente de resultados da pesquisa (exiba as propriedades name, block e releaseDate)
- ✅ Realize a requisição com base nos filtros escolhidos para o endpoint /sets (https://docs.magicthegathering.io/#api_v1sets_list). Observe na documentação que ambas as propriedades (bloco e nome) devem ser concatenadas dessa forma e enviadas como query param (name=khans|origins)
- ✅ Após a pesquisa exibir os resultados, você poderá escolher uma coleção. Essa seleção dará início ao seguinte fluxo:
  - ✅ Será realizada uma requisição ao endpoint /sets/:id/booster (https://docs.magicthegathering.io/#api_v1booster_get). Esse endpoint fornece 15 cartas "aleatórias" da coleção a cada chamada.
  - ✅ A partir da resposta da requisição, devem ser filtradas apenas as cartas com em que a propriedade “typesˮ contenha o valor "creature". Repita esse processo até obter 30 cartas do tipo "creature".
- ✅ Crie uma página para exibição das cartas que foram abertas nos boosters para renderizar o componente:
  - ✅ Componente de exibição de cartas (crie cards que exibam as propriedades name, manaCost,
colorIdentity, text e imageUrl).

## Bônus

- ❌ Testes unitários
- ✅ Realize o deploy da aplicação no serviço de sua escolha.
- ✅ Substitua cada aparição das identificações de cores pela imagem correspondente, seguindo os critérios. (neste item ficou faltando imagem da planicie mas consegui achar uma rs). Mudei apenas para o item de custo de mana, não apliquei na descrição.
- ✅ Você poderá excluir até 5 cartas do resultado e, em seguida, repetir o fluxo 4 dos requisitos para substituí-las. A exclusão poderá ser realizada apenas uma vez por seleção de coleção.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
