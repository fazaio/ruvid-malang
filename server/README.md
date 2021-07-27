# API-ruvid

## Tentang
Sisi server bagian dari [https://ruvid-malang.web.app](https://ruvid-malang.web.app)

Data Api untuk informasi tanggap covid-19 seputar malang raya, data yang tersedia dibagi menjadi 4 yakni:
* Monitoring Layanan Kamar Rumah Sakit Untuk Pasien Covid
* Monitoring Stok Darah UTD PMI kota Malang
* Hotline ambulane Kota Malang
* Hotline & Alamat Isi ulang tabung oksigen di malang.

## Endpoint
Monitoring Bed RS
> https://ruvid-api.fronthings.com:30000/ruvid_yankes

Monitoring stok darah
> https://ruvid-api.fronthings.com:30000/stokdarah

Ambulance
> https://ruvid-api.fronthings.com:30000/ambulance

Oksigen
> https://ruvid-api.fronthings.com:30000/oksigen

## Tekno
teknologi yang digunakan :

* Axios
* Cheerio
* Fastify
* Cronjob

Data diperbarui melalui cronjob setiap 1 jam sekali.
