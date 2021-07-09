const { default: axios } = require("axios");
const cheerio = require("cheerio");
const fs = require('fs')
const CronJob = require('cron').CronJob;
const fastify = require('fastify')({ logger: true })
const path = require('path')

const data = [[], [], []]
function ruvid_ub() {
    axios.get('https://ruvid.ub.ac.id/front/').then(res => {
        const $ = cheerio.load(res.data);
        $('table > tbody > tr').each(function (i, e) {

            if ($($(e).find('td')[6]).text() !== '') {
                const out = {
                    update: $($(e).find('td')[0]).text().trim().replace('"', ''),
                    RS: $($(e).find('td')[1]).text().trim().replace('"', ''),
                    negatifVentilator: {
                        kapasitas: $($(e).find('td')[2]).text().trim().replace('"', ''),
                        terisi: $($(e).find('td')[3]).text().trim().replace('"', ''),
                        tersedia: $($(e).find('td')[4]).text().trim().replace('"', '')
                    },
                    negatifNonVentilator: {
                        kapasitas: $($(e).find('td')[5]).text().trim().replace('"', ''),
                        terisi: $($(e).find('td')[6]).text().trim().replace('"', ''),
                        tersedia: $($(e).find('td')[7]).text().trim().replace('"', '')
                    },
                    ruangIsolasiTanpaVentilator: {
                        kapasitas: $($(e).find('td')[8]).text().trim().replace('"', ''),
                        terisi: $($(e).find('td')[9]).text().trim().replace('"', ''),
                        tersedia: $($(e).find('td')[10]).text().trim().replace('"', '')
                    },
                    kamarOperasiCovid: {
                        kapasitas: $($(e).find('td')[11]).text().trim().replace('"', ''),
                        terisi: $($(e).find('td')[12]).text().trim().replace('"', ''),
                        tersedia: $($(e).find('td')[13]).text().trim().replace('"', '')
                    },
                    IGDCovid: {
                        kapasitas: $($(e).find('td')[14]).text().trim().replace('"', ''),
                        terisi: $($(e).find('td')[15]).text().trim().replace('"', ''),
                        tersedia: $($(e).find('td')[16]).text().trim().replace('"', '')
                    }
                }
                data[0].push(out)
            } else {
                const out2 = {
                    update: $($(e).find('td')[0]).text().trim().replace('"', ''),
                    rs: $($(e).find('td')[1]).text().trim().replace('"', ''),
                    kapasitasTes: {
                        kapasitas: $($(e).find('td')[2]).text().trim().replace('"', ''),
                        sampelDiterima: $($(e).find('td')[3]).text().trim().replace('"', ''),
                        antrian: $($(e).find('td')[4]).text().trim().replace('"', '')
                    }
                }
                data[1].push(out2)
            }
        })
        data[2].push({ cron_at: `${new Date()}` })
        fs.writeFileSync('result/ruvid_ub.json', JSON.stringify(data))
    }).catch(e => {
        fs.appendFileSync('log', `\n[ruvid_ub] Failed scraping : ${new Date()} |` )
    })
}

function stockdarah() {
    axios.get('http://ayodonor.pmi.or.id/stokdarah.php?module=3573').then((res) => {
        const darah = [[], []]
        const $ = cheerio.load(res.data);
        $('table > tbody > tr').each(function (i, e) {
            const res = {
                no: $($(e).find('td')[0]).text().trim(),
                produk: $($(e).find('td')[1]).text().trim(),
                keterangan: $($(e).find('td')[2]).text().trim(),
                "A+": $($(e).find('td')[3]).text().trim(),
                "B+": $($(e).find('td')[4]).text().trim(),
                "O+": $($(e).find('td')[5]).text().trim(),
                "AB+": $($(e).find('td')[6]).text().trim(),
                "A-": $($(e).find('td')[7]).text().trim(),
                "B-": $($(e).find('td')[8]).text().trim(),
                "O-": $($(e).find('td')[9]).text().trim(),
                "AB-": $($(e).find('td')[10]).text().trim()
            }
            darah[0].push(res)
        })
        darah[1].push({ cron_at: `${new Date()}` })
        fs.writeFileSync('result/stokdarah.json', JSON.stringify(darah))
    }).catch(e => { 
        fs.appendFileSync('log', `\n[stokdarah] Failed scraping : ${new Date()} |` )
    })
}

const ruvid_yankes = () => {
    rs = [[], []]
    axios.get('http://yankes.kemkes.go.id/app/siranap/rumah_sakit?jenis=1&propinsi=35prop&kabkota=3573')
        .then(res => {
            const $ = cheerio.load(res.data);
            $('.card').each(function (i, e) {
                const res = {
                    rs: $($(e).find('h5')).text().trim(),
                    alamatRS: $($(e).find('p')[0]).text().trim(),
                    statusBed: $($(e).find('p')[2]).text().trim().replace(/[^0-9a-z ]/gi, '').replace(/  +/g, ' '),
                    antrian: $($(e).find('p')[3]).text().trim(),
                    update: $($(e).find('p')[4]).text().trim(),
                    konfirmasi: $($(e).find('span')[0]).text().trim(),
                    link: $($(e).find('a')).attr('href').trim()
                }
                console.log(res);
                rs[0].push(res)
            })
            rs[1].push({ cron_at: `${new Date()}` })
            fs.writeFileSync('result/ruvid_yankes.json', JSON.stringify(rs))
        }).catch (e => {
            fs.appendFileSync('log', `\n[yankes] Failed scraping : ${new Date()} | ${e.response}` )
        })
}

const ruvid_yankes_deep = (kode_rs) => {
    return new Promise((resolve, reject)=> {
        const link = `http://yankes.kemkes.go.id/app/siranap/tempat_tidur?kode_rs=${kode_rs}&jenis=1`
        rs_detail = []
        axios.get(link, {timeout: 5000})
            .then(res => {
                const $ = cheerio.load(res.data);
                $('.card-body').each(function (i, e) {
                    res = {
                        ruang: $($(e).find('h5')).text().trim(),
                        tempatTidur: $($(e).find('h1')[0]).text().trim(),
                        kosong: $($(e).find('h1')[1]).text().trim()
                    }
                    rs_detail.push(res)
                })
                // console.log({ [kode_rs]: rs_detail});
                resolve({ [kode_rs]: { data: rs_detail, cron_at: `${new Date()}` } })
            })
            .catch(e => {
                reject(`\n[yankes_deep] Failed scraping : ${new Date()} |`)
            })
    })
}

async function loop(){
    const rsArrr = [ 3573251, 3573044, 3573262, 3573260, 3573252, 3573215, 3573066, 3573055, 3573226, 3573258, 3573246, 3573011 ];
    const all = []
    const save = await new Promise(async (resolve)=> {
        for (const iterator of rsArrr) {
            try{
                const result = await ruvid_yankes_deep(iterator)
                all.push(result)
            } catch(e){
                fs.appendFileSync('log', e)
            }       
        }
        resolve(all)
    })
    fs.writeFileSync('result/detail_ruvid_yankes.json', JSON.stringify(save))
}


// ----------------- main scrapper function --------------

// ruvid_ub()
// ruvid_yankes()
// stockdarah()
// loop()


// -------------------------- crontab -----------------

// var job = new CronJob('0 * * * * *', function() {
//     console.log('start egine');
//     ruvid_yankes()
//     stockdarah()
// }, null, true, 'Asia/Jakarta');
// job.start();


// ----------------------------- fastiy backend ----------------------------------
// fastify.register(require('fastify-static'), { root: path.join(__dirname, 'result') })
// fastify.get('/ruvid_yankes', async (req, rep) => {
//     return rep.sendFile('ruvid_yankes.json')
// })
// fastify.get('/stokdarah', async (req, rep) => {
//     return rep.sendFile('stokdarah.json')
// })

// fastify.listen(4000)