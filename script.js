setInterval(() => {
    const time = new Date(); // Mendapatkan waktu semasa dari peranti pengguna
    const hour = String(time.getHours()).padStart(2, '0'); // Mendapatkan jam dan menambahkan 0 jika kurang dari 10
    const minute = String(time.getMinutes()).padStart(2, '0'); // Mendapatkan minit dan menambahkan 0 jika kurang dari 10
    const second = String(time.getSeconds()).padStart(2, '0'); // Mendapatkan saat dan menambahkan 0 jika kurang dari 10
    const clock = hour + ':' + minute + ':' + second; // Format masa sebagai jam:minit:saat

    document.querySelector('.board').textContent = clock; // Paparkan masa di laman web
}, 1000);
