import { all, call } from 'typed-redux-saga/macro'
import { categoriesSaga } from './categories/category.saga'
import { userSaga } from './user/user.saga'
import { cartSaga } from './cart/cart.saga'
import { notificationSaga } from './notification/notification.saga'

export function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSaga), call(cartSaga), call(notificationSaga)])
}
