import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';


class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                    title: 'hats',
                    imageUrl: 'https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://images.pexels.com/photos/1200822/pexels-photo-1200822.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                    id: 2
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                    id: 3
                },
                {
                    title: 'womens',
                    imageUrl: 'https://images.pexels.com/photos/904117/pexels-photo-904117.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'mens',
                    imageUrl: 'https://images.pexels.com/photos/1964970/pexels-photo-1964970.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                    size: 'large',
                    id: 5
                }]
            }
        }


render() {
    return (
        <div className='directory-menu'>
         {
         this.state.sections.map(({title, imageUrl, id, size}) => (
             <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
         ))}
        </div>
    )
}

}


export default Directory;