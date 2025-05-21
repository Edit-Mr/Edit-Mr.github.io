function runSimulation() {
    const numQuestions = 100; // 每張考卷 100 題
    const numOptions = 4; // 每題有 4 個選項 (A, B, C, D)
    const simulations = parseInt(document.getElementById("simulations").value, 10);
  
    if (isNaN(simulations) || simulations <= 0) {
      alert("請輸入一個正整數！");
      return;
    }
  
    // 模擬全部猜 C
    const guessC = simulate(numQuestions, simulations, strategyAllC);
    // 模擬平均猜 ABCD
    const guessRandomABCD = simulate(numQuestions, simulations, strategyRandom);
    // 模擬完全亂猜
    const guessFullyRandom = simulate(numQuestions, simulations, strategyRandom);
  
    // 顯示結果
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
      <p>模擬次數：${simulations}</p>
      <p>全部猜 C 的平均分數：${guessC.toFixed(2)}</p>
      <p>平均猜 ABCD 的平均分數：${guessRandomABCD.toFixed(2)}</p>
      <p>完全亂猜的平均分數：${guessFullyRandom.toFixed(2)}</p>
    `;
  }
  
  // 模擬函數
  function simulate(numQuestions, simulations, strategy) {
    let totalScore = 0;
    for (let i = 0; i < simulations; i++) {
      const correctAnswers = generateCorrectAnswers(numQuestions, 4);
      totalScore += strategy(correctAnswers);
    }
    return totalScore / simulations;
  }
  
  // 策略 1: 全部猜 C
  function strategyAllC(correctAnswers) {
    const guess = 2; // 選項 C 對應索引 2
    return correctAnswers.filter(answer => answer === guess).length;
  }
  
  // 策略 2: 平均猜 ABCD (亂數生成)
  function strategyRandom(correctAnswers) {
    return correctAnswers.filter(answer => answer === Math.floor(Math.random() * 4)).length;
  }
  
  // 生成正確答案 (每題的正確答案為隨機選項)
  function generateCorrectAnswers(numQuestions, numOptions) {
    return Array.from({ length: numQuestions }, () => Math.floor(Math.random() * numOptions));
  }
  