var gProjs = [
    {
        id : 'mineSweeper',
        name: 'Mine Sweeper',
        title: 'Classic mine sweeper game with extra toppings',
        desc: 'Same old classic mine sweeper, but with some extra features and cool design.',
        url: 'https://drznr.github.io/mine-sweeper/',
        publishedAt: new Date('Jan 22, 2020').getTime(),
        labels: ['Matrixes', 'Board Game'],
        imgUrl: 'img/portfolio/ms.png'
    },
    {
        id : 'ballBoard',
        name: 'Ball Board',
        title: 'Simple matrix board game',
        desc: 'A simple matrix board game that remineds Pacman, catch all the balls and be ware of the glue...',
        url: 'https://drznr.github.io/ball-board/',
        publishedAt: new Date().getTime(),
        labels: ['Matrixes', 'Keyboard Events', 'Board Game'],
        imgUrl: 'img/portfolio/bb.png'
    },
    {
        id : 'bookShop',
        name: 'Book Shop',
        title: 'Simple bookshop managment software',
        desc: 'Simple front-end application that demonstrate CRUD actions from browser\'s local storage',
        url: 'https://drznr.github.io/book-shop/',
        publishedAt: new Date().getTime(),
        labels: ['CRUD', 'Local Storage'],
        imgUrl: 'img/portfolio/bs.png'
    },
    {
        id : 'weatherForecast',
        name: 'Weather Forecast',
        title: 'Same as google weather.. just better',
        desc: 'This app let\'s you follow your favorite locations and keep track of the weather over there',
        url: 'https://herolo-wheather.herokuapp.com/home',
        publishedAt: new Date().getTime(),
        labels: ['React', 'API', 'Redux'],
        imgUrl: 'img/portfolio/weather.png'
    }
];

function getProjsForDisplay() {
    return gProjs;
}
function findProjById(id) {
    return gProjs.find(proj => proj.id === id);
}