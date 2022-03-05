# Kalymba

![GitHub](https://img.shields.io/github/license/itsmegrave/kalymba?style=flat-square)
![GitHub release (latest by date)](https://img.shields.io/github/downloads/itsmegrave/kalymba/latest/total?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/itsmegrave/kalymba?style=flat-square)
![Foundry](https://img.shields.io/badge/dynamic/json.svg?url=https://raw.githubusercontent.com/itsmegrave/kalymba/main/src/system.json&label=Foundry&query=$.compatibleCoreVersion&colorB=blue&style=flat-square)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/itsmegrave/kalymba.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/itsmegrave/kalymba/alerts/)

Kalymba é um RPG de ação e aventura épica inspirado nas histórias, culturas e mitologias do continente africano. Indicado ao prêmio Cubo de Ouro na categoria de melhor jogo de mesa, Kalymba já tem seu lugar entre os grandes títulos do RPG nacional como Tormenta 20 e A Herança de Cthulhu.

O jogo conta com um sistema próprio e sem classes pré-definidas, o que dá aos jogadores a liberdade de criarem os mais variados arquétipos de personagens. Os testes são feitos exclusivamente com dados de seis faces (d6) e as mecânicas são de fácil aprendizagem. O livro básico de Kalymba traz todas as informações necessárias para jogar, incluindo diferentes opções de raças, perícias, habilidades, equipamentos, mandingas e monstros, além de dezenas de ilustrações originais belíssimas.

## Installation

1. Go to the setup page and choose **Game Systems**.
2. Click the **Install System** button, and paste in this [manifest link](https://github.com/itsmegrave/kalymba/releases/latest/download/system.json)
3. Create a Game World using the Forbidden Lands system.

## Development

### Prerequisites

In order to build this system, recent versions of `node` and `yarn` are
required. Most likely, using `npm` also works, but only `yarn` is officially
supported. We recommend using the latest lts version of `node`. If you use `nvm`
to manage your `node` versions, you can simply run


```
nvm install
```

in the project's root directory.

You also need to install the project's dependencies. To do so, run

```
yarn install
```

### Building

You can build the project by running

```
yarn build
```

Alternatively, you can run

```
yarn build:watch
```

to watch for changes and automatically build as necessary.

### Linking the built project to Foundry VTT

In order to provide a fluent development experience, it is recommended to link
the built system to your local Foundry VTT installation's data folder. In
order to do so, first add a file called `foundryconfig.json` to the project root
with the following content:

```
{
  "dataPath": "/absolute/path/to/your/FoundryVTT"
}
```

(if you are using Windows, make sure to use `\` as a path separator instead of
`/`)

Then run

```
yarn link-project
```

On Windows, creating symlinks requires administrator privileges, so unfortunately
you need to run the above command in an administrator terminal for it to work.

### Creating a release

The workflow works basically the same as the workflow of the [League Basic JS Module Template], please follow the
instructions given there.

## Licensing

This project is being developed under the terms of the
[LIMITED LICENSE AGREEMENT FOR MODULE DEVELOPMENT] for Foundry Virtual Tabletop.

Please add your licensing information here. Add your chosen license as
`LICENSE` file to the project root and mention it here.  If you don't know which
license to choose, take a look at [Choose an open source license].

[League Basic JS Module Template]: https://github.com/League-of-Foundry-Developers/FoundryVTT-Module-Template
[LIMITED LICENSE AGREEMENT FOR MODULE DEVELOPMENT]: https://foundryvtt.com/article/license/
[Choose an open source license]: https://choosealicense.com/
