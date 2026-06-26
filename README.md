# TampeSuaCaneta_App

Aplicativo mobile desenvolvido com **Expo** e **React Native** que ajuda usuários a encontrar, de forma rápida e prática, unidades de saúde com distribuição gratuita de preservativos na cidade do **Recife**.

## 📱 Sobre o projeto

O **TampeSuaCaneta** tem como objetivo facilitar o acesso à prevenção, conectando o usuário às unidades de saúde mais próximas que oferecem preservativos gratuitamente. Ao abrir o app, o usuário compartilha sua localização e recebe uma lista das unidades disponíveis, ordenadas por distância.

## ✨ Funcionalidades

- 📍 Captura da localização atual do usuário (via GPS)
- 📤 Envio das coordenadas para o backend
- 📋 Listagem das unidades de saúde mais próximas, com:
  - Nome oficial da unidade
  - Distância até o usuário
  - Telefone de contato
  - Endereço completo
- 🧭 Navegação entre telas com React Navigation

## 🗂️ Estrutura do projeto

```
.
├── App.js       # Configuração da navegação (Stack Navigator)
├── home.js      # Tela inicial (Landing) - captura de localização
└── list.js      # Tela de listagem das unidades de saúde
```

### Telas

| Tela | Arquivo | Descrição |
|------|---------|-----------|
| **Início** | `home.js` | Tela de boas-vindas. Solicita permissão de localização, captura as coordenadas do usuário e as envia ao backend. |
| **Lista** | `list.js` | Exibe a lista de unidades de saúde retornadas pelo backend, com nome, distância, telefone e endereço de cada uma. |

## 🛠️ Tecnologias utilizadas

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/) (`@react-navigation/native` e `@react-navigation/native-stack`)
- [expo-location](https://docs.expo.dev/versions/latest/sdk/location/) — captura de geolocalização

## ⚙️ Como executar o projeto

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd TampeSuaCaneta
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Instale as dependências específicas do Expo (caso ainda não estejam instaladas):
   ```bash
   npx expo install expo-location @react-navigation/native @react-navigation/native-stack
   ```

4. Inicie o projeto:
   ```bash
   npx expo start
   ```

5. Escaneie o QR Code com o app **Expo Go** (Android/iOS) ou execute em um emulador.

## 🔌 Integração com o backend

O app consome dois endpoints do backend (atualmente referenciados como `seu-backend` nos arquivos — devem ser substituídos pela URL real da API):

| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/pegarcoords` | `POST` | Envia a latitude e longitude do usuário para o servidor. |
| `/listarunidades` | `GET` | Retorna a lista de unidades de saúde com distribuição de preservativos, incluindo nome, telefone, endereço e distância. |

> ⚠️ **Importante:** antes de rodar o app em produção, substitua `seu-backend` pela URL real da API nos arquivos `home.js` e `list.js`.

## 🔐 Permissões necessárias

O app solicita permissão de **localização em foreground** para funcionar corretamente. Caso o usuário negue a permissão, uma mensagem de erro é exibida na tela inicial.

## 📍 Escopo

Atualmente o app é focado nas unidades de saúde da cidade do **Recife**, Pernambuco.
