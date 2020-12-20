const INITIAL_STATE = {
    sections: [
        {
        title: 'hats',
        imageUrl: 'https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
        id: 1,
        linkUrl: 'shop/hats'
    },
    {
        title: 'jackets',
        imageUrl: 'https://images.pexels.com/photos/1200822/pexels-photo-1200822.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        id: 2,
        linkUrl: 'shop/jackets'
    },
    {
        title: 'sneakers',
        imageUrl: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        id: 3,
        linkUrl: 'shop/sneakers'
    },
    {
        title: 'womens',
        imageUrl: 'https://images.pexels.com/photos/904117/pexels-photo-904117.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
    },
    {
        title: 'mens',
        imageUrl: 'https://images.pexels.com/photos/1964970/pexels-photo-1964970.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
    }
]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;