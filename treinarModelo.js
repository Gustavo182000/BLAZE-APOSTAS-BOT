const brain = require('brain.js');
const fs = require('fs');
const xlsx = require('xlsx');

const workbook = xlsx.readFile('historico.xlsx');
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = xlsx.utils.sheet_to_json(sheet);

const trainingData = [];
for (let i = 0; i < data.length - 1; i += 4) {
    trainingData.push({
        input: [
            data[i]['Número'],
            data[i + 1]['Número'],
            data[i + 2]['Número']
        ],
        output: [
            data[i + 3]['Número']
        ]
    });

}
console.log(`Dados usados: ${data.length}`);

const net = new brain.NeuralNetwork();

net.train(trainingData);

const jsonModel = net.toJSON();
fs.writeFileSync('model.json', JSON.stringify(jsonModel));
console.log('Modelo salvo em model.json');
