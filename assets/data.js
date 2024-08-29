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

  if (day == "Monday") {
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
  } else if (day == "Friday") {
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


function playBell1() {
    var bell = document.getElementById("bell1");
    bell.play(); // Memainkan suara bel
}
function playBell2() {
    var bell = document.getElementById("bell2");
    bell.play(); // Memainkan suara bel
}
function playBell3() {
    var bell = document.getElementById("bell3");
    bell.play(); // Memainkan suara bel
}
function playBell4() {
    var bell = document.getElementById("bell4");
    bell.play(); // Memainkan suara bel
}
function playBell5() {
    var bell = document.getElementById("bell5");
    bell.play(); // Memainkan suara bel
}
function playBell6() {
    var bell = document.getElementById("bell6");
    bell.play(); // Memainkan suara bel
}
function playBell7() {
    var bell = document.getElementById("bell7");
    bell.play(); // Memainkan suara bel
}
function playBell8() {
    var bell = document.getElementById("bell8");
    bell.play(); // Memainkan suara bel
}
function playBell9() {
    var bell = document.getElementById("bell9");
    bell.play(); // Memainkan suara bel
}
function playBell10() {
    var bell = document.getElementById("bell10");
    bell.play(); // Memainkan suara bel
}
function playBellalquran() {
    var bell = document.getElementById("bellbacaalquran");
    bell.play(); // Memainkan suara bel
}
function playBellupacara() {
    var bell = document.getElementById("bellupacara");
    bell.play(); // Memainkan suara bel
}
function playBellakhir() {
    var bell = document.getElementById("bellakhir");
    bell.play(); // Memainkan suara bel
}
function playBellAwal() {
    var bell = document.getElementById("bell5menitpelajaran");
    bell.play(); // Memainkan suara bel
}

function playBelljumat() {
  var bell = document.getElementById("bell5menitjumat");
  bell.play(); // Memainkan suara bel
}


function playBellistirahatsatu() {
  var bell = document.getElementById("bellistirahat1");
  bell.play(); // Memainkan suara bel
}
function playBellistirahatdua() {
  var bell = document.getElementById("bellistirahat2");
  bell.play(); // Memainkan suara bel
}
function playBellakhirsatu() {
  var bell = document.getElementById("bell5menitakhir1");
  bell.play(); // Memainkan suara bel
}
function playBellakhirdua() {
  var bell = document.getElementById("bell5menitakhir2");
  bell.play(); // Memainkan suara bel
}
function playBellawalupacara() {
  var bell = document.getElementById("bell5menitawalupacara");
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
        if (jamSekarang === "6550" ) {
          playBellawalupacara(); 
        }
        if (jamSekarang === "700" ) {
          playBellupacara(); 
        }
        if (jamSekarang === "7450" ) {
          playBellAwal(); 
        }
        if (jamSekarang === "7500" ) {
            playBell1(); 
        }
        if (jamSekarang === "8300" ) {
            playBell2(); 
        }
        if (jamSekarang === "9100" ) {
            playBell3(); 
        }
        if (jamSekarang === "9500" ) {
          playBellistirahatsatu(); 
        }
        if (jamSekarang === "1050" ) {
          playBellakhirsatu(); 
        }
        if (jamSekarang === "10100" ) {
            playBell4(); 
        }
        if (jamSekarang === "10500" ) {
            playBell5(); 
        }
        if (jamSekarang === "11200" ) {
            playBell6(); 
        }
        if (jamSekarang === "1200" ) {
          playBellistirahatdua(); 
        }
        if (jamSekarang === "12250" ) {
          playBellakhirdua(); 
        }
        if (jamSekarang === "12300" ) {
            playBell7(); 
        }
        if (jamSekarang === "13100" ) {
            playBell8(); 
        }
        if (jamSekarang === "13500" ) {
            playBell9(); 
        }
        if (jamSekarang === "14300" ) {
            playBell10(); 
        }
        if (jamSekarang === "15100" ) {
            playBellakhir(); 
        }
    }else if(nameOfDay === "Jumat"){
        
        if (jamSekarang === "700" ) {
          playBellalquran(); 
        }
        if (jamSekarang === "8150" ) {
          playBellAwal(); 
        }
        if (jamSekarang === "8200" ) {
            playBell1(); 
        }
        if (jamSekarang === "900" ) {
            playBell2(); 
        }
        if (jamSekarang === "9300" ) {
            playBell3(); 
        }
        if (jamSekarang === "1000" ) {
          playBellistirahatsatu(); 
        }
        if (jamSekarang === "10150" ) {
          playBellakhirsatu(); 
        }
        if (jamSekarang === "10200" ) {
            playBell4(); 
        }
        if (jamSekarang === "10500" ) {
            playBell5(); 
        }
        if (jamSekarang === "11150" ) {
          playBelljumat(); 
        }
        if (jamSekarang === "12250" ) {
          playBellakhirdua(); 
        }
        if (jamSekarang === "12300" ) {
            playBell6(); 
        }
        
        if (jamSekarang === "1300" ) {
            playBell7(); 
        }
        if (jamSekarang === "13300" ) {
            playBell8(); 
        }
        if (jamSekarang === "1400" ) {
            playBell9(); 
        }
        if (jamSekarang === "14300" ) {
            playBell10(); 
        }
        if (jamSekarang === "15100" ) {
          playBellakhir(); 
        }
    }else{
        
        if (jamSekarang === "700" ) {
          playBellalquran(); 
        }
        if (jamSekarang === "7250" ) {
          playBellAwal(); 
        }
        if (jamSekarang === "7300" ) {
            playBell1(); 
        }
        if (jamSekarang === "8100" ) {
            playBell2(); 
        }
        if (jamSekarang === "8500" ) {
            playBell3(); 
        }
        if (jamSekarang === "9300" ) {
            playBell4(); 
        }
        if (jamSekarang === "10100" ) {
          playBellistirahatsatu(); 
        }
        if (jamSekarang === "10250" ) {
          playBellakhirsatu(); 
        }
        if (jamSekarang === "10300" ) {
            playBell5(); 
        }
        if (jamSekarang === "11100" ) {
            playBell6(); 
        }
        if (jamSekarang === "11500" ) {
          playBellistirahatdua(); 
        }
        if (jamSekarang === "12250" ) {
          playBellakhirdua(); 
        }
        if (jamSekarang === "12300" ) {
            playBell7(); 
        }
        if (jamSekarang === "13100" ) {
            playBell8(); 
        }
        if (jamSekarang === "13500" ) {
            playBell9(); 
        }
        if (jamSekarang === "14300" ) {
            playBell10(); 
        }
        if (jamSekarang === "15100" ) {
          playBellakhir(); 
        }
    }
    

    
}

// Periksa setiap detik
setInterval(checkTime, 1000);