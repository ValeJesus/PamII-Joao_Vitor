# Criação projeto expo

###  Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (preferencialmente a versão LTS)  
- **npm** ou **yarn** (gerenciadores de pacotes)  
- **Expo CLI** (instalado via npm)  
- Um celular com o app **Expo Go** (disponível na Play Store e App Store)  

---

###  Passo a Passo

#### 1. Instale o Expo CLI

Abra o terminal e execute o comando:

```bash
npm install -g expo-cli
```

#### 2. Crie o projeto

Após a instalação, crie um novo projeto com o comando:

```bash
npx create-expo-app exemplo-app
```

#### 3. Escolha um template

Durante a criação do projeto, o Expo CLI perguntará qual template você quer usar. As opções comuns são:

-   **blank** — projeto básico, sem nada adicional
    
-   **blank (TypeScript)** — projeto básico com suporte a TypeScript
    
-   **tabs (TypeScript)** — projeto com navegação por abas e TypeScript
    

Escolha o que melhor se encaixa no seu projeto.

#### 4. Acesse a pasta do projeto

Entre na pasta recém-criada:

```bash
cd exemplo-app
```

#### 5. Inicie o servidor de desenvolvimento

Execute o comando:

```bash
expo start
```

Isso abrirá a interface do Expo Developer Tools no navegador, de onde você pode iniciar seu app em emuladores ou dispositivos físicos.

#### 6. Teste o app no seu celular

-   Abra o app **Expo Go** no seu celular.
    
-   Escaneie o QR Code que aparece no terminal ou no navegador.
    
-   Seu aplicativo será carregado e você poderá ver as mudanças em tempo real conforme edita o código.
    

#### 7. Compartilhe seu app

Você pode compartilhar o app com outras pessoas via QR Code, ou exportar para publicação usando:

```bash
npx expo export
```

----------

**erro Deprecated solução**

So dar expo start

