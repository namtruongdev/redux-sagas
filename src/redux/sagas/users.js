import { call, put, takeEvery } from 'redux-saga/effects';

const apiUrl = 'https://5fa3d0d9f10026001618df85.mockapi.io/users';

const getApi = () => {
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
};

function* fetchUsers(action) {
  try {
    const users = yield call(getApi);
    yield put({ type: 'GET_USERS_SUCCESS', users: users });
  } catch (e) {
    yield put({ type: 'GET_USERS_FAILED', message: e.message });
  }
}

function* userSaga() {
  yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}

export default userSaga;
