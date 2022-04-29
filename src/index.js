const btnS = document.getElementById("btnS");
const anser = Math.floor(Math.random() * 20) + 1;
const comment = document.getElementById("comment");

console.log(anser);

let i = 0;

btnS.addEventListener("click", () => {
  i += 1;
  // クリックした時に入力された数字を取得（value)してから
  // 比べる前にNumber()メソッドで数字に変換
  const num = document.getElementById("guessNum").value;
  const N = Number(num);
  const A = Number(anser);
  // ランダムで生成された答え
  console.log(num);
  // console.log(A + 1);
  if (A === N) {
    // 正解と不正解の時のメッセージ
    comment.textContent = `${i}回目で正解です!`;
  } else if (A < N - 2) {
    comment.textContent = "もっと下だよ";
  } else if (A + 1 === N) {
    comment.textContent = "おしい！";
  } else if (A + 2 === N) {
    comment.textContent = "いい感じ！";
  } else if (A - 1 === N) {
    comment.textContent = "おしい！";
  } else if (A - 2 === N) {
    comment.textContent = "いい感じ！";
  } else {
    comment.textContent = "もっと上だよ!";
  }
});
