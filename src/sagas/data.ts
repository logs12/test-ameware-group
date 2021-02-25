import axios from 'axios';
import { all, call, takeLatest, put } from 'redux-saga/effects';
import API from '@/rest';
import { apiData } from '@/rest/constants';
import * as DATA from '@/constants/data';

function* handleFetchData(action) {
  try {
    const { terms } = action.payload;
    const responseData = yield call(API.get, apiData, {
      params: { terms },
    });
    yield put({
      type: DATA.FETCH_DATA_SUCCESS,
      payload: responseData.data.length >= 4 ? responseData.data[3] : [],
    });
  } catch (e) {
    if (!axios.isCancel(e)) {
      yield put({
        type: DATA.FETCH_DATA_ERROR,
        payload: { e },
      });
    }
  }
}

function* watchFetchData() {
  yield takeLatest(DATA.FETCH_DATA, handleFetchData);
}

export default function* dataSaga() {
  yield all([watchFetchData()]);
}
