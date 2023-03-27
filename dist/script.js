// kelime grupları
var morningWords = [
  { name: "Kahve", image: "https://images.pexels.com/photos/5745486/pexels-photo-5745486.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Çay", image: "https://images.pexels.com/photos/3801218/pexels-photo-3801218.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Süt", image: "https://images.pexels.com/photos/1553997/pexels-photo-1553997.jpeg?auto=compress&cs=tinysrgb&w=600" }
];

var noonWords = [
  { name: "Su", image: "https://images.pexels.com/photos/4047349/pexels-photo-4047349.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Ayran", image: "https://images.pexels.com/photos/1571456/pexels-photo-1571456.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Meyve Suyu", image: "https://images.pexels.com/photos/1985869/pexels-photo-1985869.jpeg?auto=compress&cs=tinysrgb&w=600" }
];

var eveningWords = [
  { name: "Bira", image: "https://media.istockphoto.com/id/155439045/photo/mug-of-beer-and-a-soft-pretzel-on-a-table.jpg?s=1024x1024&w=is&k=20&c=RkVlHidCddPzLnBdyCXlr8Hicb3HoTc9y2LuTsAg9NQ=" },
  { name: "Whiskey", image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Raki", image: "https://menu.golpiknik.com/wp-content/uploads/2022/11/yeni-raki-min.jpg" }
];

// "Go" butonuna tıklanınca kelime seçimini yapın
var goButton = document.getElementById("go-button");
goButton.addEventListener("click", function() {
  var hours = parseInt(document.getElementById("hours").value);

  // saat değerini kontrol edin
  if (isNaN(hours) || hours < 0 || hours > 23) {
    alert("Lütfen geçerli bir saat girin!");
    return;
  }

  // kullanıcının seçtiği saate göre kelime seçimi
  var words;
  if (hours >= 6 && hours < 12) {
    words = morningWords;
  } else if (hours >= 12 && hours < 18) {
    words = noonWords;
  } else {
    words = eveningWords;
  }
  
  // rastgele kelimeyi seçin
  var word = words[Math.floor(Math.random() * words.length)];

  // kelimeyi ekrana yazdırın
  var result = document.getElementById("result");
  result.innerHTML = word.name;

  // resmi ekrana yazdırın
  var imageContainer = document.getElementById("image-container");
  imageContainer.innerHTML = "<img src='" + word.image + "' alt='" + word.name + "'/>";
});