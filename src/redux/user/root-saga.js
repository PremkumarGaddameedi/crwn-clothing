import { all, call } from 'redux-saga/effets';

import { shopSagas } from '../shop/shop.sagas';
import { userSagas } from './user.sagas';
import { cartSagas } from '../cart/cart.sagas';

export default function* rootSaga() {
    yield all([call(fetchCollectionsStart), call(userSagas), call(cartSagas)]);
}