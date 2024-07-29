const { default: axios } = require('axios');
const moment = require('moment');
const puppeteer = require('puppeteer')
const { Telegraf } = require('telegraf')
require('dotenv').config()
const bot = new Telegraf(process.env.API_KEY)
const brain = require('brain.js');
const fs = require('fs');

const net = new brain.NeuralNetwork();
const jsonModel = JSON.parse(fs.readFileSync('model.json', 'utf8'));
net.fromJSON(jsonModel);

const black = [9, 13, 14, 8, 12, 11, 10];
const red = [1, 2, 3, 4, 5, 7, 6]
const idChat = process.env.ID_CHAT

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

bot.catch(e => {
    console.log(e);
});

bot.command('id', async function (ctx) {
    ctx.reply('ID: ' + ctx.message.chat.id)
})

bot.command('i1', async function (ctx) {

    ConsoleLog("START")

    while (true) {
        await sleep(10000);
        try {
            await roletaStatus("waiting");
            var historico = await getHistorico();
            var sinal = await gerarSinal(historico);
            if (sinal == "Vermelho") {
                const sinal = await ctx.telegram.sendMessage(idChat, "⚠️ <b>SINAL CONFIRMADO</b>⚠️\n\n<b>⏩Entrar AGORA no:</b> 🔴 Vermelho\n<b>⏩Proteção no:</b> ⚪️ Branco (Opcional)\n<b>⏩Aposte aqui:</b>  <a href='https://blaze.com/pt/games/double/'>Double</a>\n<b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t03 ♻️</b>", { parse_mode: 'HTML', disable_web_page_preview: true })
                const resultado = await verificarSinal("Vermelho");
                if (resultado) {
                    ConsoleLog("WIN")
                    ctx.telegram.editMessageText(idChat, (sinal.message_id), undefined, "✅✅✅ <b>WIN</b> ✅✅✅", { parse_mode: 'HTML' })
                } else {
                    ConsoleLog("LOSE")
                    ctx.telegram.editMessageText(idChat, (sinal.message_id), undefined, "❌❌❌ <b>LOSE</b> ❌❌❌", { parse_mode: 'HTML' })
                }
            }
            else {
                const sinal = await ctx.telegram.sendMessage(idChat, "⚠️ <b>SINAL CONFIRMADO</b>⚠️\n\n<b>⏩Entrar AGORA no:</b> ⚫️ Preto\n<b>⏩Proteção no:</b> ⚪️ Branco (Opcional)\n<b>⏩Aposte aqui:</b>  <a href='https://blaze.com/pt/games/double/'>Double</a>\n<b>\n \t \t \t \t \t \t \t \t \t \t \t \t \t03 ♻️</b>", { parse_mode: 'HTML', disable_web_page_preview: true })
                const resultado = await verificarSinal("Preto");
                if (resultado) {
                    ConsoleLog("WIN")
                    ctx.telegram.editMessageText(idChat, (sinal.message_id), undefined, "✅✅✅ <b>WIN</b> ✅✅✅", { parse_mode: 'HTML' })
                } else {
                    ConsoleLog("LOSE")
                    ctx.telegram.editMessageText(idChat, (sinal.message_id), undefined, "❌❌❌ <b>LOSE</b> ❌❌❌", { parse_mode: 'HTML' })
                }
            }

        } catch (err) {
            ConsoleLog(err.toString())
        }

    }

})

const ConsoleLog = (msg) => {
    console.log(`[${moment().format('HH:mm:ss')}] ${msg}`);
}

const roletaStatus = async (status) => {
    ConsoleLog(`Aguardando status: ${status}`)
    try {

        while (true) {
            var atual = await getAtual();
            if (atual.status == status) {
                return;
            }
        }

    } catch (err) {
        ConsoleLog(err.toString())
    }
}

const getAtual = async () => {
    try {
        const atual = await axios.get('https://blaze.com/api/roulette_games/current');
        return atual.data;

    } catch (err) {
        ConsoleLog(err.toString())
    }
}

const getHistorico = async () => {
    ConsoleLog("Pegando histórico")
    try {

        const historico = await axios.get('https://blaze.com/api/roulette_games/recent');
        await gerarSinal(historico.data)

        return historico.data;

    } catch (err) {
        ConsoleLog(err.toString())
    }
}

const gerarSinal = async (historico) => {
    ConsoleLog("Gerando sinal")
    var sinal = net.run([historico[0].roll, historico[1].roll, historico[2].roll]);
    if (black.includes(sinal)) {
        return "Preto";
    }
    return "Vermelho";

}

const verificarSinal = async (sinal) => {
    ConsoleLog(`Verificando sinal: ${sinal}`)
    try {

        while (true) {
            const atual = await axios.get('https://blaze.com/api/roulette_games/current');
            if (atual.data.status == "complete") {

                if (sinal == "Vermelho") {
                    if (red.includes(atual.data.roll)) {
                        return true;
                    }
                    return false;
                }

                if (sinal == "Preto") {
                    if (black.includes(atual.data.roll)) {
                        return true;
                    }
                    return false;
                }

            }
        }

    } catch (err) {
        ConsoleLog(err.toString())
    }
}


bot.startPolling();
