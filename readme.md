
# BLAZE-APOSTAS-BOT


O objetivo deste projeto é realizar um web scraping no site de apostas [blaze.com](https://blaze.com/), gerar sinais de aposta no jogo [double](https://blaze.com/pt/games/double), enviar os sinais no telegram e monitorar a perca ou a vitória. 
## Instalação

Instale BLAZE-APOSTAS-BOT com npm

```bash
  npm install BLAZE-APOSTAS-BOT
  cd BLAZE-APOSTAS-BOT
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
Digite "/ "
 e o comando da linha 27 para iniciar. 
 
 É necessário alterar o comando de inicialização ao realizar alterações.

 São realizadas 3 jogadas após o sinal.
## Demonstração
### Primeira mensagem do sinal
![Primeira Mensagem](https://i.imgur.com/nAhHwGh.png)
### Se vitória
![Se Vitória](https://i.imgur.com/qIAxKPu.png)
### Se derrota
![Se Vitória](https://i.imgur.com/TRM3u5j.png)



