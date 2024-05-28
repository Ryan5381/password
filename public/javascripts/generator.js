document.addEventListener("DOMContentLoaded", function () {
  const inputValue = document.querySelector("#passwordLength");
  const displayPassword = document.querySelector(".password-display");
  const lowercaseCheck = document.querySelector("#Lowercase-check");
  const uppercaseCheck = document.querySelector("#uppercase-check");
  const numberCheck = document.querySelector("#number-check");
  const symbolCheck = document.querySelector("#symbol-check");
  const inputText = document.querySelector("#input-text");
  const form = document.querySelector("form");
  const lower = Array.from("abcdefghijklmnopqrstuvwxyz");
  const upper = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  const num = Array.from("1234567890");
  const sym = ["!", "@", "#", "$", "%", "&", "*", "/"];

  // 監聽表單submit事件
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // 處理輸入事件
    const passwordLength = parseInt(inputValue.value, 10);
    console.log(passwordLength);
    if (passwordLength >= 4 && passwordLength <= 16) {
      let newMixArray = [];

      // 確認是否有checked
      if (lowercaseCheck.checked) {
        newMixArray.push(...lower);
      }
      if (uppercaseCheck.checked) {
        newMixArray.push(...upper);
      }
      if (numberCheck.checked) {
        newMixArray.push(...num);
      }
      if (symbolCheck.checked) {
        newMixArray.push(...sym);
      }
      // 刪除特定字元
      if (inputText.value.length > 0) {
        let removeElement = [...inputText.value];
        newMixArray = newMixArray.filter(
          (char) => !removeElement.includes(char)
        );
      }

      // 檢查password是否有值
      if (newMixArray.length > 0) {
        generatorRandom(passwordLength, newMixArray);
      } else {
        return alert("Please check at least one option");
      }
    } else {
      alert("請輸入一個有效的數字在4到16之間。");
    }
  });

  // 產生隨機字串、產生密碼
  function generatorRandom(passwordLength, newMixArray) {
    let result = "";
    for (let i = 0; i < passwordLength; i++) {
      const mixIndex = Math.floor(Math.random() * newMixArray.length);
      const word = newMixArray[mixIndex];
      result += word;
    }
    // 輸出生成的密碼
    displayPassword.textContent = result;
  }
});
