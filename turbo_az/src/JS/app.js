const cardInfo = document.getElementById("card-list");

const infos = [
  {
    imgURL: "https://cdn.motor1.com/images/mgl/nOZPj/s1/4x3/bmw-i4.webp",
    price: "29 000",
    brand: "BMW I7",
    city: "Bakı",
    date: "29.09.2023",
  },
  {
    imgURL:
      "https://turbo.azstatic.com/uploads/f460x343/2023%2F06%2F25%2F01%2F16%2F04%2Fd9f1631c-e2bd-432f-a12c-050c528ee914%2F60327_w3a2cASZn6n_3Is8qEKtiQ.jpg",
    price: "92 000",
    brand: "Mercedes",
    city: "Quba",
    date: "07.09.2021",
  },

  {
    imgURL:
      "	https://turbo.azstatic.com/uploads/f460x343/2023%2F08%2F06%2F15%2F34%2F35%2Fb95c6387-26c3-4730-a2e3-595876d9b91c%2F82019_wVh-qqMTCnaz-WHGlcyJyg.jpg",
    price: "188 990",
    brand: "Porsche",
    city: "Bakı",
    date: "27.03.2022",
  },

  {
    imgURL:
      "	https://turbo.azstatic.com/uploads/f460x343/2023%2F08%2F12%2F17%2F17%2F36%2Fcb24a1dc-11dd-4fb8-b53d-c29911375288%2F35470_aJAig0YpS2oa1Bhee2mZTg.jpg",
    price: "29000",
    brand: "Tesla",
    city: "Quba",
    date: "17.10.2019",
  },
  {
    imgURL:
      "https://turbo.azstatic.com/uploads/f460x343/2023%2F09%2F18%2F18%2F40%2F59%2Fc5697cda-4ca6-4559-8a2f-11fee275477c%2F88083_dwy3e-hcBj-zKe784gi4Lw.jpg",
    price: "128 000",
    brand: "Jeep",
    city: "Quba",
    date: "22.12.2022",
  },
  {
    imgURL:
      "https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F02%2F15%2F57%2F28%2Fe48e68f6-d3ac-44d8-95ae-4decd69e39f8%2F91818_nOfFoSukcEx6PRbxuPBeJQ.jpg",
    price: "22 000",
    brand: "BMW i7",
    city: "Zaqatala",
    date: "02.02.2022",
  },
  {
    imgURL:
      "https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F02%2F15%2F57%2F28%2Fe48e68f6-d3ac-44d8-95ae-4decd69e39f8%2F91818_nOfFoSukcEx6PRbxuPBeJQ.jpg",
    price: "9 900",
    brand: "Toyota",
    city: " Quba",
    date: "22.08.2020",
  },
  {
    imgURL:
      "https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F02%2F15%2F57%2F28%2Fe48e68f6-d3ac-44d8-95ae-4decd69e39f8%2F91818_nOfFoSukcEx6PRbxuPBeJQ.jpg",
    price: "26 000",
    brand: "BMW I7",
    city: "Bakı",
    date: "30.08.2017",
  },
  {
    imgURL:
      "https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F02%2F15%2F57%2F28%2Fe48e68f6-d3ac-44d8-95ae-4decd69e39f8%2F91818_nOfFoSukcEx6PRbxuPBeJQ.jpg",
    price: "90 000",
    brand: "Ferrari",
    city: "Bakı",
    date: "20.05.2023",
  },
  {
    imgURL:
      "https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F02%2F15%2F57%2F28%2Fe48e68f6-d3ac-44d8-95ae-4decd69e39f8%2F91818_nOfFoSukcEx6PRbxuPBeJQ.jpg",
    price: "22 300",
    brand: "Audi",
    city: "Bakı",
    date: "20.09.2020",
  },
  {
    imgURL:
      "	https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F02%2F15%2F57%2F28%2Fe48e68f6-d3ac-44d8-95ae-4decd69e39f8%2F91818_nOfFoSukcEx6PRbxuPBeJQ.jpg",
    price: "60 000",
    brand: "Mercedes",
    city: "Zaqatala",
    date: "06.09.2020",
  },
  {
    imgURL:
      "https://turbo.azstatic.com/uploads/f460x343/2023%2F09%2F21%2F22%2F53%2F13%2F51da98fc-843c-4bf5-a348-67be958996db%2F88104_JUqIUmF0TuGfnAolY7jApw.jpg",
    price: "35 000",
    brand: "Audi",
    city: "Zaqatala",
    date: "06.09.2021",
  },
  {
    imgURL:
      "https://turbo.azstatic.com/uploads/f460x343/2023%2F09%2F28%2F10%2F16%2F41%2F8c5a6308-7ec5-4dc1-b0af-1add20b821ba%2F96435_n4EuveKn9O_VU762OTkusg.jpg",
    price: "5 500",
    brand: "Tesla",
    city: "Bakı",
    date: "26.09.2021",
  },
];

function getDatas(data) {
  let txt = "";

  data.sort((a, b) => {
    return (
      Number(a.price.replace(/\s/g, "")) - Number(b.price.replace(/\s/g, ""))
    );
  });

  data.forEach(function (item) {
    txt += `<div class="card">
    <div class="card-inner">

    <div class="card-image">
        <img src="${item.imgURL}"  alt=""/>
    
   </div>
   <div class="heart"><i class="fa-regular fa-heart"></i></div>
    <div class="card-content">
       <h3>${item.price} $</h3>
       <p>${item.brand}</p>
       <span>${item.city} ${item.date}</span>
    
    </div>
    </div>
    </div>   
    `;
  });

  cardInfo.innerHTML = txt;
}

const selectBox = document.getElementById("cities");

selectBox.addEventListener("change", () => {
  const selectedValue = selectBox.value.toLowerCase();

  if (selectedValue !== "all") {
    const newArray = infos.filter(
      (item) => item.city.toLowerCase() == selectedValue
    );
    getDatas(newArray);
  } else {
    getDatas(infos);
  }
});

getDatas(infos);
