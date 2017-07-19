let menu ={
    name: ''
};

menu.name = (NODE_ENV == 'development') ? 'lol' : 'oops';

console.log(menu.name)

export default menu;