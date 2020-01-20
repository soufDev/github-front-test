import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Dispatch, IState } from '../../types/actions';
import { loginRequest } from '../../redux/actions/login';

interface Props {
    children: (params: any) => JSX.Element;
}
export const LoginContainer: React.FC<Props> = ({ children }) => {
    const dispatch: Dispatch = useDispatch();
    const error = useSelector((state: IState) => state.user.error, shallowEqual);
    const onLogin = (username: string, accessToken: string) => {
        dispatch(loginRequest(username, accessToken));
    }
    return children({ onLogin, error })
}