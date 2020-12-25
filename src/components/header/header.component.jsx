import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden }  from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
// import { ReactComponent as Logo } from '../../assets/';
// import './header.styles.scss';
// import CartIcon from '../cart-icon/cart-icon.component';

import { HeaderContainer,
   OptionsContainer,
    OptionDiv, 
    OptionLink
   } from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
      <Link className='logo-container' to="/">
        {/* <Logo className='logo' /> */}
      </Link>
<OptionsContainer>
  <OptionLink to='/shop'>SHOP</OptionLink>
  <OptionLink to='/shop'>CONTACT</OptionLink>
 {currentUser ? (
  <OptionDiv as='div' onClick={signOutStart}>SIGN OUT</OptionDiv>
  ) : (
   <OptionLink to='/signin'>SIGN IN</OptionLink>
 )}
    <CartIcon />
   </OptionsContainer>
  {hidden ? null: <CartDropdown />}
 </HeaderContainer>
);

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden : selectCartHidden
});

   const mapDispatchToProps = dispatch => ({
     signOutStart: () => dispatch(signOutStart())
   });


export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Header);