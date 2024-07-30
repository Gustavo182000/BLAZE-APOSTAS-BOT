
# BLAZE-APOSTAS-BOT


O objetivo deste projeto é gerar sinais de aposta no jogo [double](https://blaze.com/pt/games/double), enviar os sinais no telegram e monitorar a perca ou a vitória utilizando redes neurais. 
## Instalação

Instale BLAZE-APOSTAS-BOT com npm

```bash
 git clone https://github.com/Gustavo182000/BLAZE-APOSTAS-BOT.git
  cd BLAZE-APOSTAS-BOT
  npm install
```
Adicione as variaveis de ambiente criando um arquivo .env

```bash
  API_KEY="SUA API TELEGRAM"
  ID_CHAT="ID DO CHAT TELEGRAM"
```
Link para API Telegram: [Telegram API](https://core.telegram.org/api)

Para pegar o id do chat inicialize a aplicação e use o comando /id no chat do telegram. 

### Inicializar
```bash
 npm run start || node index
```
Digite "/start" para iniciar. 

## Demonstração
### Primeira mensagem do sinal
![Primeira Mensagem](https://i.imgur.com/nAhHwGh.png)
### Se vitória
✅✅✅ WIN ✅✅✅
### Se derrota
❌❌❌ LOSE ❌❌❌



