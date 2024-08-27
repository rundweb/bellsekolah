function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Tambahkan angka nol di depan angka yang kurang dari 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Tampilkan waktu
  document.getElementById("clock").textContent =
    hours + ":" + minutes + ":" + seconds;
}

// Panggil fungsi updateClock setiap detik
setInterval(updateClock, 1000);

// Panggil fungsi pertama kali untuk inisialisasi
updateClock();

function updateDate() {
  const now = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  // Tampilkan hari, tanggal, bulan, dan tahun
  const formattedDate = `${day}, ${date} ${month} ${year}`;

  // Setel isi elemen div dengan id "date"
  document.getElementById("date").textContent = formattedDate;

  if (day == "Sunday") {
    document.getElementById("list").innerHTML = `<div class="bell">
          <h1>UPACARA</h1>
          <p>07.00 - 07.50</p>
        </div>
        <div class="bell">
          <h1>Jam Ke 1</h1>
          <p>07.50 - 08.30</p>
        </div>
        <div class="bell">
          <h1>Jam Ke 2</h1>
          <p>08.30 - 09.10</p>
        </div>
        <div class="bell">
          <h1>Jam Ke 3</h1>
          <p>09.10 - 09.50</p>
        </div>
        <div class="bell">
          <h1>ISTIRAHAT</h1>
          <p>09.50 - 10.10</p>
        </div>
        <div class="bell">
          <h1>Jam Ke 4</h1>
          <p>10.10 - 10.50</p>
        </div>
        <div class="bell">
          <h1>Jam Ke 5</h1>
          <p>10.50 - 11.30</p>
        </div>
        <div class="bell">
          <h1>Jam Ke 6</h1>
          <p>11.20-12.00</p>
        </div>
        <div class="bell">
            <h1>ISHOMA</h1>
            <p>12.00-12.30</p>
          </div>
        
          <div class="bell">
            <h1>Jam Ke 7</h1>
            <p>12.30 - 13.10</p>
          </div>
          <div class="bell">
            <h1>Jam Ke 8</h1>
            <p>13.10 - 13.50</p>
          </div>
          <div class="bell">
            <h1>Jam Ke 9</h1>
            <p>13.50 - 14.30</p>
          </div>
          <div class="bell">
            <h1>Jam Ke 10</h1>
            <p>14.30 - 15.00</p>
          </div>
      </div>`;
  } else if (day == "Thursday") {
    document.getElementById("list").innerHTML = `<div class="bell">
          <h1>TA'LIM</h1>
          <p>07.00-08.20</p>
        </div>
        <div class="bell">
          <h1>Jam Ke 1</h1>
          <p>08.20 - 09.00</p>
        </div>
        <div class="bell">
          <h1>Jam Ke 2</h1>
          <p>09.00 - 09.30</p>
        </div>
        <div class="bell">
          <h1>Jam Ke 3</h1>
          <p>09.30 - 10.00</p>
        </div>
        <div class="bell">
          <h1>ISTIRAHAT</h1>
          <p>10.00 - 10.20</p>
        </div>
        <div class="bell">
          <h1>Jam Ke 4</h1>
          <p>10.20-10.50</p>
        </div>
        <div class="bell">
          <h1>Jam Ke 5</h1>
          <p>10.50 - 11.20</p>
        </div>
        <div class="bell">
            <h1>JUM'ATAN & KEPUTRIAN</h1>
            <p>11.20 - 12.30</p>
          </div>
        <div class="bell">
          <h1>Jam Ke 6</h1>
          <p>12.30 - 13.00</p>
        </div>
          <div class="bell">
            <h1>Jam Ke 7</h1>
            <p>13.00 - 13.30</p>
          </div>
          <div class="bell">
            <h1>Jam Ke 8</h1>
            <p>13.30 - 14.00</p>
          </div>
          <div class="bell">
            <h1>Jam Ke 9</h1>
            <p>14.00 - 14.30</p>
          </div>
          <div class="bell">
            <h1>Jam Ke 10</h1>
            <p>14.30 - 15.00</p>
          </div>
      </div>`;
  } else {
    document.getElementById("list").innerHTML = `<div class="bell">
          <h1>PROGRAM KEAGAMAAN & LITERASI</h1>
          <p>07.00 - 07.30</p>
        </div>
        <div class="bell">
          <h1>Jam Ke 1</h1>
          <p>07.30 - 08.10</p>
        </div>
        <div class="bell">
          <h1>Jam Ke 2</h1>
          <p>08.10 - 08.50</p>
        </div>
        <div class="bell">
          <h1>Jam Ke 3</h1>
          <p>08.50 - 09.30</p>
        </div>
        <div class="bell">
          <h1>Jam Ke 4</h1>
          <p>09.30 - 10.10</p>
        </div>
        <div class="bell">
          <h1>ISTIRAHAT</h1>
          <p>10.10 - 10.30</p>
        </div>
        <div class="bell">
          <h1>Jam Ke 5</h1>
          <p>10.30 - 11.10</p>
        </div>
        <div class="bell">
          <h1>Jam Ke 6</h1>
          <p>11.10 - 11.50</p>
        </div>
        <div class="bell">
            <h1>ISHOMA</h1>
            <p>11.50 - 12.30</p>
          </div>
          <div class="bell">
            <h1>Jam Ke 7</h1>
            <p>12.30 - 13.10</p>
          </div>
          <div class="bell">
            <h1>Jam Ke 8</h1>
            <p>13.10 - 13.50</p>
          </div>
          <div class="bell">
            <h1>Jam Ke 9</h1>
            <p>13.50 - 14.30 </p>
          </div>
          <div class="bell">
            <h1>Jam Ke 10</h1>
            <p>14.30 - 15.10</p>
          </div>
      </div>`;
  }
}

// Panggil fungsi updateDate setiap detik
setInterval(updateDate, 1000);

// Panggil fungsi pertama kali untuk inisialisasi
updateDate();


function playBell() {
    var bell = document.getElementById("bell-sound");
    bell.play(); // Memainkan suara bel
}

function checkTime() {
    var now = new Date();
    var day = now.getDay(); 
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    

    var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    var nameOfDay = days[day];

    var jamSekarang = hours.toString()  + minutes.toString()  + seconds.toString();

    if(nameOfDay === "Senin"){
        if (jamSekarang === "700" ) {
            playBell(); 
        }
        if (jamSekarang === "7500" ) {
            playBell(); 
        }
        if (jamSekarang === "8300" ) {
            playBell(); 
        }
        if (jamSekarang === "9100" ) {
            playBell(); 
        }
        if (jamSekarang === "9500" ) {
            playBell(); 
        }
        if (jamSekarang === "10100" ) {
            playBell(); 
        }
        if (jamSekarang === "10500" ) {
            playBell(); 
        }
        if (jamSekarang === "11200" ) {
            playBell(); 
        }
        if (jamSekarang === "1200" ) {
            playBell(); 
        }
        if (jamSekarang === "12300" ) {
            playBell(); 
        }
        if (jamSekarang === "13100" ) {
            playBell(); 
        }
        if (jamSekarang === "13500" ) {
            playBell(); 
        }
        if (jamSekarang === "14300" ) {
            playBell(); 
        }
    }else if(nameOfDay === "Jumat"){
        
        if (jamSekarang === "700" ) {
            playBell(); 
        }
        if (jamSekarang === "8200" ) {
            playBell(); 
        }
        if (jamSekarang === "900" ) {
            playBell(); 
        }
        if (jamSekarang === "9300" ) {
            playBell(); 
        }
        if (jamSekarang === "1000" ) {
            playBell(); 
        }
        if (jamSekarang === "10200" ) {
            playBell(); 
        }
        if (jamSekarang === "10500" ) {
            playBell(); 
        }
        if (jamSekarang === "11200" ) {
            playBell(); 
        }
        if (jamSekarang === "12300" ) {
            playBell(); 
        }
        if (jamSekarang === "1300" ) {
            playBell(); 
        }
        if (jamSekarang === "13300" ) {
            playBell(); 
        }
        if (jamSekarang === "1400" ) {
            playBell(); 
        }
        if (jamSekarang === "14300" ) {
            playBell(); 
        }
    }else{
        
        
        if (jamSekarang === "700" ) {
            playBell(); 
        }
        if (jamSekarang === "7300" ) {
            playBell(); 
        }
        if (jamSekarang === "8100" ) {
            playBell(); 
        }
        if (jamSekarang === "8500" ) {
            playBell(); 
        }
        if (jamSekarang === "9300" ) {
            playBell(); 
        }
        if (jamSekarang === "10100" ) {
            playBell(); 
        }
        if (jamSekarang === "10300" ) {
            playBell(); 
        }
        if (jamSekarang === "11100" ) {
            playBell(); 
        }
        if (jamSekarang === "11500" ) {
            playBell(); 
        }
        if (jamSekarang === "12300" ) {
            playBell(); 
        }
        if (jamSekarang === "13100" ) {
            playBell(); 
        }
        if (jamSekarang === "13500" ) {
            playBell(); 
        }
        if (jamSekarang === "14300" ) {
            playBell(); 
        }
    }
    

    
}

// Periksa setiap detik
setInterval(checkTime, 1000);