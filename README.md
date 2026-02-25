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
npx create-expo-app@latest exemplo-app
```

#### 3. Acesse a pasta do projeto

Entre na pasta recém-criada:

```bash
cd exemplo-app
```

#### 4. Inicie o servidor de desenvolvimento

Execute o comando:

```bash
expo start
```

Isso abrirá a interface do Expo Developer Tools no navegador, de onde você pode iniciar seu app em emuladores ou dispositivos físicos.

#### 5. Teste o app no seu celular

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

