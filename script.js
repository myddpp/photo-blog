const generateBtn = document.querySelector("#generateBtn");
const gridContainer = document.querySelector("#gridContainer");

generateBtn.addEventListener("click", () => {
    const imgUrl = 'https://picsum.photos/500/300?random=' + getRandomNumber();

    const image = document.createElement("img");    
    image.src =imgUrl

    gridContainer.appendChild(image);

    if ( gridContainer.children.length > 5) {
        const confirmed = confirm("10개 이상의 이미지가 있습니다. 모두 삭제하시겠습니까?");
        if ( confirmed) {
            gridContainer.innerHTML = "";
        }
    }
  });
  
  function getRandomNumber() {
    return Math.floor(Math.random() * 1000) + 1; // 원하는 범위로 수정 가능
  }