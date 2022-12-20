const puppeteer = require('puppeteer')
const { Telegraf } = require('telegraf')
const bot = new Telegraf('5823241809:AAEN9MA2xIF4EGXgMQjj9PUBsWJRZs8h_2Q')
// ID CHAT TESTES > -670713670
// VIP -670713670

const red = ['1', '2', '3', '6', '7', '5', '4'];
const black = ['8', '12', '13', '10', '14', '11', '9']




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

bot.command('i5', async function (ctx) {
    console.log('Iniciado !');
    var cont = 0, contMsg = 1,contImg =0;
    const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],

    });
    const page = await browser.newPage()

    await page.goto('https://blaze.com/pt/games/double', { timeout: 0 })

    while (true) {
        cont += 1;

        console.log("Aguardando estrategia" + cont)
        console.log('Msg to edit: ' + ctx.message.message_id + contMsg)
        console.log('Contador IMG: '+contImg)
        sleep(5000)

        //Estratégia 1
        var final = 0;
        cont = 0;
        await roleta();
        console.log('Passou roleta procurando elementos')
        var element1 = await page.waitForSelector("#roulette-recent > div > div.entries.main > div:nth-child(1)", { timeout: 0 })
        var element1 = await page.evaluate(element1 => element1.textContent, element1)

        var element2 = await page.waitForSelector("#roulette-recent > div > div.entries.main > div:nth-child(2)", { timeout: 0 })
        var element2 = await page.evaluate(element2 => element2.textContent, element2)

        var element3 = await page.waitForSelector("#roulette-recent > div > div.entries.main > div:nth-child(3)", { timeout: 0 })
        var element3 = await page.evaluate(element3 => element3.textContent, element3)

        var element4 = await page.waitForSelector("#roulette-recent > div > div.entries.main > div:nth-child(4)", { timeout: 0 })
        var element4 = await page.evaluate(element4 => element4.textContent, element4)

        var element5 = await page.waitForSelector("#roulette-recent > div > div.entries.main > div:nth-child(5)", { timeout: 0 })
        var element5 = await page.evaluate(element5 => element5.textContent, element5)

        var element6 = await page.waitForSelector("#roulette-recent > div > div.entries.main > div:nth-child(6)", { timeout: 0 })
        var element6 = await page.evaluate(element6 => element6.textContent, element6)

        var element7 = await page.waitForSelector("#roulette-recent > div > div.entries.main > div:nth-child(7)", { timeout: 0 })
        var element7 = await page.evaluate(element7 => element7.textContent, element7)

        var total = element1 + element2 + element3 + element4 + element5 + element6 + element7;

        if(contImg == 4){
            await ctx.telegram.sendPhoto('-670713670','https://i.imgur.com/aGFngNa.png')
            contMsg += 1;
        }
        if(contImg == 10){
            await ctx.telegram.sendPhoto('-670713670','https://i.imgur.com/KnRjqab.png')
            contImg=0;
            contMsg += 1;
        }

        if (total % 2 == 0 && final == 0) {
            
            ctx.telegram.sendMessage('-670713670', "⚠️ <b>SINAL CONFIRMADO</b>⚠️\n\n<b>⏩Entrar AGORA no:</b> 🔴 Vermelho\n<b>⏩Proteção no:</b> ⚪️ Branco (Opcional)\n<b>⏩Aposte aqui:</b>  <a href='https://blaze.com/pt/games/double/'>Double</a>\n<b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t03 ♻️</b>", { parse_mode: 'HTML', disable_web_page_preview: true })
            await roleta();
            element1 = await page.waitForSelector("#roulette-recent > div > div.entries.main > div:nth-child(1)", { timeout: 0 })
            element1 = await page.evaluate(element1 => element1.textContent, element1)
            console.log('Resultado: ' + (red.indexOf(element1) > -1))
            if (red.indexOf(element1) > -1) {
                console.log('Msg to edit: ' + ctx.message.message_id + contMsg)
                ctx.telegram.editMessageText('-670713670', (ctx.message.message_id + contMsg), undefined, "✅✅✅ <b>WIN</b> ✅✅✅\nO terror da blaze 🤑🚀", { parse_mode: 'HTML' })

                final = 1
                contMsg += 1;
                contImg +=1;
            } else if (element1 == "") {
                ctx.telegram.editMessageText('-670713670', (ctx.message.message_id + contMsg), undefined, "⚪️✅✅ <b>WIN</b> ✅✅⚪️\n⚪️⚪️⚪️ Quebramos a blaze 🤑🚀 ⚪️⚪️⚪️", { parse_mode: 'HTML' })
                final = 1
                contMsg += 1;
                contImg +=1;

            } else {
                console.log("aguardando G1")
                await roleta();
                element1 = await page.waitForSelector("#roulette-recent > div > div.entries.main > div:nth-child(1)", { timeout: 0 })
                element1 = await page.evaluate(element1 => element1.textContent, element1)
                if (red.indexOf(element1) > -1) {
                    console.log('Msg to edit: ' + ctx.message.message_id)
                    ctx.telegram.editMessageText('-670713670', (ctx.message.message_id + contMsg), undefined, "✅✅✅ <b>WIN</b> ✅✅✅\nO terror da blaze 🤑🚀", { parse_mode: 'HTML' })

                    final = 1
                    contMsg += 1;
                    contImg +=1;
                } else if (element1 == "") {
                    ctx.telegram.editMessageText('-670713670', (ctx.message.message_id + contMsg), undefined, "⚪️✅✅ <b>WIN</b> ✅✅⚪️\n⚪️⚪️⚪️ Quebramos a blaze 🤑🚀 ⚪️⚪️⚪️", { parse_mode: 'HTML' })
                    final = 1
                    contMsg += 1;
                    contImg +=1;

                } else {
                    console.log("aguardando G2")
                    await roleta();
                    element1 = await page.waitForSelector("#roulette-recent > div > div.entries.main > div:nth-child(1)", { timeout: 0 })
                    element1 = await page.evaluate(element1 => element1.textContent, element1)
                    if (red.indexOf(element1) > -1) {
                        console.log('Msg to edit: ' + ctx.message.message_id)
                        ctx.telegram.editMessageText('-670713670', (ctx.message.message_id + contMsg), undefined, "✅✅✅ <b>WIN</b> ✅✅✅\nO terror da blaze 🤑🚀", { parse_mode: 'HTML' })

                        final = 1
                        contMsg += 1;
                        contImg +=1;
                    } else if (element1 == "") {
                        ctx.telegram.editMessageText('-670713670', (ctx.message.message_id + contMsg), undefined, "⚪️✅✅ <b>WIN</b> ✅✅⚪️\n⚪️⚪️⚪️ Quebramos a blaze 🤑🚀 ⚪️⚪️⚪️", { parse_mode: 'HTML' })
                        final = 1
                        contMsg += 1;
                        contImg +=1;

                    } else {
                        ctx.telegram.editMessageText('-670713670', (ctx.message.message_id + contMsg), undefined, "🔺LOSS\n 👨🏻‍💻 Analisando ...", { parse_mode: 'HTML' })
                        final = 1
                        contMsg += 1;
                        contImg +=1;
                    }
                }

            }


        } else if (final == 0) {

            ctx.telegram.sendMessage('-670713670', "⚠️ <b>SINAL CONFIRMADO</b>⚠️\n\n<b>⏩Entrar AGORA no:</b> ⚫️ Preto\n<b>⏩Proteção no:</b> ⚪️ Branco (Opcional)\n<b>⏩Aposte aqui:</b>  <a href='https://blaze.com/pt/games/double/'>Double</a>\n<b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t03 ♻️</b>", { parse_mode: 'HTML', disable_web_page_preview: true })
            await roleta();

            element1 = await page.waitForSelector("#roulette-recent > div > div.entries.main > div:nth-child(1)", { timeout: 0 })
            element1 = await page.evaluate(element1 => element1.textContent, element1)
            console.log('Resultado: ' + (black.indexOf(element1) > -1))
            if (black.indexOf(element1) > -1) {
                console.log('Msg to edit: ' + ctx.message.message_id)
                ctx.telegram.editMessageText('-670713670', (ctx.message.message_id + contMsg), undefined, "✅✅✅ <b>WIN</b> ✅✅✅\nO terror da blaze 🤑🚀", { parse_mode: 'HTML' })
                contMsg += 1;
                final = 1
                contImg +=1;

            } else if (element1 == "") {
                ctx.telegram.editMessageText('-670713670', (ctx.message.message_id + contMsg), undefined, "⚪️✅✅ <b>WIN</b> ✅✅⚪️\n⚪️⚪️⚪️ Quebramos a blaze 🤑🚀 ⚪️⚪️⚪️", { parse_mode: 'HTML' })
                final = 1
                contMsg += 1;
                contImg +=1;

            } else {
                console.log("aguardando G1")
                await roleta();
                element1 = await page.waitForSelector("#roulette-recent > div > div.entries.main > div:nth-child(1)", { timeout: 0 })
                element1 = await page.evaluate(element1 => element1.textContent, element1)
                if (black.indexOf(element1) > -1) {
                    console.log('Msg to edit: ' + ctx.message.message_id)
                    ctx.telegram.editMessageText('-670713670', (ctx.message.message_id + contMsg), undefined, "✅✅✅ <b>WIN</b> ✅✅✅\nO terror da blaze 🤑🚀", { parse_mode: 'HTML' })

                    final = 1
                    contMsg += 1;
                    contImg +=1;
                } else if (element1 == "") {
                    ctx.telegram.editMessageText('-670713670', (ctx.message.message_id + contMsg), undefined, "⚪️✅✅ <b>WIN</b> ✅✅⚪️\n⚪️⚪️⚪️ Quebramos a blaze 🤑🚀 ⚪️⚪️⚪️", { parse_mode: 'HTML' })
                    final = 1
                    contMsg += 1;
                    contImg +=1;

                } else {
                    console.log("aguardando G2")
                    await roleta();
                    element1 = await page.waitForSelector("#roulette-recent > div > div.entries.main > div:nth-child(1)", { timeout: 0 })
                    element1 = await page.evaluate(element1 => element1.textContent, element1)
                    if (black.indexOf(element1) > -1) {
                        console.log('Msg to edit: ' + ctx.message.message_id)
                        ctx.telegram.editMessageText('-670713670', (ctx.message.message_id + contMsg), undefined, "✅✅✅ <b>WIN</b> ✅✅✅\nO terror da blaze 🤑🚀", { parse_mode: 'HTML' })

                        final = 1
                        contMsg += 1;
                        contImg +=1;
                    } else if (element1 == "") {
                        ctx.telegram.editMessageText('-670713670', (ctx.message.message_id + contMsg), undefined, "⚪️✅✅ <b>WIN</b> ✅✅⚪️\n⚪️⚪️⚪️ Quebramos a blaze 🤑🚀 ⚪️⚪️⚪️", { parse_mode: 'HTML' })
                        final = 1
                        contMsg += 1;
                        contImg +=1;

                    } else {
                        ctx.telegram.editMessageText('-670713670', (ctx.message.message_id + contMsg), undefined, "🔺LOSS\n 👨🏻‍💻 Analisando ...", { parse_mode: 'HTML' })
                        final = 1
                        contMsg += 1;
                        contImg +=1;
                    }
                }

            }




        }

        sleep(300000)
    }


})


async function roleta() {

    try {


        var giro = 0;
        const browser = await puppeteer.launch({
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
    
        });
        const page = await browser.newPage()

        await page.goto('https://blaze.com/pt/games/double', { timeout: 0 })
        while (giro == 0) {

            var element = await page.waitForSelector("#roulette-timer > div > div.time-left", { timeout: 0 })
            var element = await page.evaluate(element => element.textContent, element)

            if (element.includes('em 14:')) {
                console.log('Iniciando Roleta > ' + element)
                browser.close();
                giro = 1;

            }

        }

    } catch (err) {
        console.log(err)
    }
}



bot.startPolling();
