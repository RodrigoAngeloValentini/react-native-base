/* eslint-disable no-unused-expressions */

import {createRef} from 'react';
import {StackActions, CommonActions} from '@react-navigation/native';

export const navigationRef = createRef();

function navigate(name, params, key) {
  navigationRef.current?.dispatch(CommonActions.navigate({name, params, key}));
}

function goBack(source, target) {
  navigationRef.current?.dispatch({...CommonActions.goBack(), source, target});
}

function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop());
}

function pop(n = 1) {
  navigationRef.current?.dispatch(StackActions.pop(n));
}

export default {
  navigate,
  popToTop,
  goBack,
  pop,
};
