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
                    id: 1,
                linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://images.pexels.com/photos/1200822/pexels-photo-1200822.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'womens',
                    imageUrl: 'https://images.pexels.com/photos/904117/pexels-photo-904117.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'mens',
                    imageUrl: 'https://images.pexels.com/photos/1964970/pexels-photo-1964970.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }]
            }
        }


render() {
    return (
        <div className='directory-menu'>
         {
         this.state.sections.map(({id, ...otherSectionProps }) => (
             <MenuItem key={id} {...otherSectionProps}/>
         ))}
        </div>
    );
}

}


export default Directory;