import { IState } from '../../types/actions';

export const mostStarredRepositoriesSelector = (state: IState) => state.repos.repositories.slice(0, 3);