const quotes = [
  {
    quote: "잔잔한 호숫가 잔디에 싱그런 이슬 머금은 듯 그런 느낌이야",
    author: "We Young",
  },
  {
    quote:
      "현실이 꿈이고 꿈이 현실 같아 눈을 뜨고 꿈을 꾸는 것만 같아 사람들은 이걸 사랑이라 말해",
    author: "My Page",
  },
  {
    quote: "어제처럼 헤어지자 내일도 다시 만날 것처럼",
    author: "너와 나 (Beautiful Time)",
  },
  {
    quote:
      "You're my missing puzzle piece 드디어 맞춰진 조각나 있던 맘의 상처까지 가득 채워준 넌 어느새 내 전부가 됐어",
    author: "너의 자리 Puzzle Piece",
  },
  {
    quote: "뜨거운 맘의 떨림과 젊은 열정과 타는 열기로 오늘을 달려와",
    author: "trigger the fever",
  },
  {
    quote:
      "내가 어디 있어도 꿈속에서도 나에겐 너뿐이야 남은 인생을 걸고 말할게 두 번은 없어 넌 나의 마지막",
    author: "마지막 첫사랑",
  },
  {
    quote:
      "좀 더 멀리 날아 보려고 해 서툰 날 빛나게 해 준 날의 기억들로 날 아름답게 해",
    author: "we go up",
  },
  {
    quote:
      "난 지금 어딜까 다 알 순 없지만 난 나만의 나를 쓰고 있어 서툰 이 글 위엔 제목도 없지만 난 나만의 답을 찾고 있어",
    author: "My Page",
  },
  {
    quote:
      "이거 하나만 잊지 마 아주 먼 어느 밤 너를 위로할 별 하나 아마 나일 거야",
    author: "Dear DREAM",
  },
  {
    quote:
      "온 세상과 저 광야 위로 후회 없이 사랑했다고 말하게 기다렸어 어서 와 어디든 we're coming together",
    author: "Hello Future",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
