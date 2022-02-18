const quotes = [
{
    quote: "Don't dwell on the past.",
    translation:"과거에 연연하지 마라."
},
{
    quote: "Believe in yourself.",
    translation:"자기 자신을 믿어라."
},
{
    quote: "Folow your heart.",
    translation:"마음이 원하는 대로 따르라."
},
{
    quote: "Seize the day.",
    translation:"오늘을 즐겨라."
},
{
    quote: "You only live once.",
    translation:"인생은 한 번 뿐이다."
},
{
    quote: "Past is just past.",
    translation:"과거는 과거다."
},
{
    quote: "Love yourself.",
    translation:"자기 자신을 사랑해라"
},
{
    quote: "Where there is a will there is a way.",
    translation:"뜻이 있는 곳에 길이 있다."
},
{
    quote: "Don't beat yourself up.",
    translation:"자책하지 말아라"
},
{
    quote: "Life is a jouney.",
    translation:"인생은 여정이다."
},
{
    quote: "This too shall pass away",
    translation:"이 또한 지나간다."
},
{
    quote: "Don't dream, Be it.",
    translation:"꿈만 꾸지 말고 되어라."
},
{
    quote: "No pain, No gain.",
    translation:"고통 없인 얻는 것도 없다."
},
{
    quote: "No sweat, No sweet.",
    translation:"땀 없인 달콤함도 없다."
},
{
    quote: "The die is cast.",
    translation:"주사위는 던져졌다."
},
{
    quote: "When they go low, we go high.",
    translation:"그들이 저급해도 우리는 품위있게 가자"
},
{
    quote: "I was never less alone than when by myself.",
    translation:"난 혼자 있을 때 가장 외롭지 않았다."
},
{
    quote: "A friends is a second myself.",
    translation:"친구는 제2의 자신이다."
},
{
    quote: "Appearances are deceptive.",
    translation:"외모는 속임수다."
},
{
    quote: "Courage is very important when it comes to anything.",
    translation:"어떤 것이든지 용기는 정말 중요하다."
},
{
    quote: "Be brave.",
    translation:"용감해져라."
}
];

const quote = document.querySelector("#quote span:first-child");
const translation = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
translation.innerText = todayQuote.translation;