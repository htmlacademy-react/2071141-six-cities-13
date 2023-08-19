import { store } from '../store';
import { setError } from '../store/action';
import { clearErrorAction } from '../store/api-actons';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
