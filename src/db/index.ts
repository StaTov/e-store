const users = [
    {
        id: 1,
        userName: 'Nikita',
        email: 'nikita@gmail.com',
        password: 'pass',
        token: 'av2ss1',
        basket: [{ id: 1 }, { id: 2 }],
        totalAmount: 3200.7,
        admin: false,
    }
];

const stock = [
    {
        id: 1,
        price: 5000,
        img: 'url//',
        describtion: 'Новый мощный надежный',
        quantity: 30,
        inStock: true,
        rating: 4.3,
        type: 'тип1',

    }
];

export default { users, stock };