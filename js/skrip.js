// function dataPerson() {
//     let forms = document.getElementById("frm");
//     let nama = document.getElementById("frm").nama.value;
//     let pekerjaan = document.getElementById("frm").pekerjaan.value;
//     let hobby = document.getElementById("frm").hobby.value;
//     let input = "Selamat Datang, Ini hasil data kamu !" + "<br> Nama :" + nama + "<br> Pekerjaan :" + pekerjaan + "<br> Hobby :" + hobby;
//     let no_input = "Maaf anda belum selesai mengisi form ini";
//     let hasil = nama && pekerjaan && hobby != "" ? input : no_input;
  
//     document.getElementById("hasil").innerHTML = hasil;
//   }


// II
// // Mendapatkan nilai dari isian nama, pekerjaan, dan hobby
// function dataPerson() {
//     let nama = document.querySelector('input[name="nama"]').value;
//     let pekerjaan = document.querySelector('input[name="pekerjaan"]').value;
//     let hobby = document.querySelector('input[name="hobby"]').value;

//     // Menampilkan hasil di dalam elemen dengan id "hasil"
//     let hasilElem = document.getElementById('hasil');
//     hasilElem.innerHTML = `
//         <p>Nama: ${nama}</p>
//         <p>Pekerjaan: ${pekerjaan}</p>
//         <p>Hobby: ${hobby}</p>
//     `;
// }

// // Memanggil fungsi dataPerson saat tombol "Submit" ditekan
// let submitBtn = document.querySelector('button');
// submitBtn.addEventListener('click', dataPerson);

// III fixx
// function dataPerson(){
//     // Mendapatkan nilai dari isian nama, pekerjaan, dan hobby
//     let forms = document.getElementById('frm');
//     let nama = forms.nama.value;
//     let pekerjaan = forms.pekerjaan.value;
//     let hobby = forms.hobby.value;

//     // Menampilkan hasil pada HTML
//     let hasilElem = document.getElementById('hasil');
//     hasilElem.innerHTML = `
//         <p>Nama: ${nama}</p>
//         <p>Pekerjaan: ${pekerjaan}</p>
//         <p>Hobby: ${hobby}</p>
//     `;
// }

// // Memanggil fungsi dataPerson saat tombol "Submit" ditekan
// let submitBtn = document.getElementById('submitBtn');
// submitBtn.addEventListener('click', dataPerson);


// tugas:
    // lengkapi kode berikut dan tampilkan hasilnya pada HTML
    // 1. isian nama
    // 2. isian pekerjaan
    // 3. isian hobby

    // function dataPerson(){
    //     // Mendapatkan nilai dari isian nama, pekerjaan, dan hobby
    //     let forms = document.getElementById('frm');
    //     let nama = document.getElementById("frm").nama.value;
    //     let pekerjaan = document.getElementById("frm").pekerjaan.value;
    //     let hobby = document.getElementById("frm").hobby.value;

    //     // Jika inputan diisi atau tidak
    //     let input = "Selamat Datang!" + "<br> Nama : "  + nama + "<br> Pekerjaan : " + pekerjaan + "<br> Hobby : " + hobby;
    //     let no_input = "Maaf isi kolom terlebih dahulu";
    //     let hasil = nama && pekerjaan && hobby != "" ? input : no_input;

    //     // Menampilkan hasil pada HTML
    //      document.getElementById('hasil').innerHTML = hasil;
    // }

function dataPerson(){
    let forms = document.getElementById('frm');
    let nama = forms.nama.value;


    // tugas:
    // lengkapi kode berikut dan tampilkan hasilnya pada HTML
    // 1. isian nama
    // 2. isian pekerjaan
    // 3. isian hobby
}

