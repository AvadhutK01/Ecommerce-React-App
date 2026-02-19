const productsArr = [
    {
        id: 'p1',
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        images: [
            'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBhcnR8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWJzdHJhY3QlMjBhcnR8ZW58MHx8MHx8fDA%3D'
        ],
        reviews: [
            { id: 1, user: 'Alice', comment: 'Amazing colors!', rating: 5 },
            { id: 2, user: 'Bob', comment: 'Really brightened up my room.', rating: 4 }
        ]
    },
    {
        id: 'p2',
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        images: [
            'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBhcnR8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBhcnR8ZW58MHx8MHx8fDA%3D'
        ],
        reviews: [
            { id: 1, user: 'Charlie', comment: 'So elegant and minimalist.', rating: 5 },
            { id: 2, user: 'Dave', comment: 'Simple yet powerful.', rating: 4 }
        ]
    },
    {
        id: 'p3',
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        images: [
            'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwYW5kJTIwYmxhY2slMjBhcnR8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eWVsbG93JTIwYW5kJTIwYmxhY2slMjBhcnR8ZW58MHx8MHx8fDA%3D'
        ],
        reviews: [
            { id: 1, user: 'Eve', comment: 'Love the contrast!', rating: 5 },
            { id: 2, user: 'Frank', comment: 'Very striking piece.', rating: 5 }
        ]
    },
    {
        id: 'p4',
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        images: [
            'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
            'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1ZSUyMGFydHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ymx1ZSUyMGFydHxlbnwwfHwwfHx8MA%3D%3D'
        ],
        reviews: [
            { id: 1, user: 'Grace', comment: 'Calming and beautiful.', rating: 5 },
            { id: 2, user: 'Heidi', comment: 'The depth of blue is amazing.', rating: 4 }
        ]
    }
];

export default productsArr;
