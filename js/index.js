//Load all phone when reload done

const loadPhone = async (randomAlphabetOrSearchedPhone) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${randomAlphabetOrSearchedPhone}`
  );
  const data = await res.json();
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.innerHTML = '';

  data.data.forEach((phone) => {
    const div = document.createElement("div");
    div.id = phone.slug;
    div.classList.add("phone");
    div.innerHTML = `<img src=${phone.image} />
   <h3 class='text-[25px] font-bold'>${phone.phone_name}</h3>
   <p>There are many variations of passages of available, but the majority have suffered</p>
   <p class='text-[25px] font-bold'>$999</p>
   <button class='bg-[#0D6EFD] rounded-lg py-[10px] px-[25px] text-white text-[20px] font-semibold'>Show Detail</button>
   `;
    phoneContainer.appendChild(div);
  });
};

const randomAlphabetGenerator = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const alphabetArray = alphabet.split("");
  const randomIndex = Math.floor(Math.random() * 26);
  loadPhone(alphabetArray[randomIndex]);
};

randomAlphabetGenerator();

const searchPhone = () => {
  const searchedPhone =  document.getElementById('searched-phone').value;
  loadPhone(searchedPhone);
  document.getElementById('searched-phone').value = '';
}
