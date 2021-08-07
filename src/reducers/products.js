var initState = [
    {
        id: 1,
        name: 'Iphone',
        image: 'https://drtao.vn/wp-content/uploads/2021/05/iphone-11-pro-max-gold-viendidong-300x300.jpg',
        description: 'Sản phẩm Iphone',
        price: 500,
        rating: 4,
        inventory: 10
    },
    {
        id: 2,
        name: 'SamSung',
        image: 'https://techcare.vn/wp-content/uploads/2017/02/thay-man-hinh-samsung-note-5-da-nang.png',
        description: 'Sản phẩm SamSung',
        price: 666,
        rating: 5,
        inventory: 4
    },
    {
        id: 3,
        name: 'Oppo',
        image: 'https://baolongmobile.vn/wp-content/uploads/2019/01/thay-mat-kinh-oppo-a7-1-300x300.jpg',
        description: 'Sản phẩm Oppo',
        price: 999,
        rating: 3,
        inventory: 2
    }
];

const products = (state = initState, action) => {
    switch(action.type){

        default : return [...state];
    }
}

export default products;