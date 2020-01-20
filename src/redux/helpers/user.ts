import { IAuthenticatedUser } from '../../types/user';
import { initialUserValue } from '../reducers/user';
export const formatUserData = (user: IAuthenticatedUser) => {
    return {
        avatar: user?.avatar_url || initialUserValue.avatar,
        name: user?.name || initialUserValue.name,
        login: user?.login || initialUserValue.login,
        bio: user?.bio || initialUserValue.bio,
        reposUrl: user?.repos_url || initialUserValue.reposUrl,
        reposNumber: initialUserValue.reposNumber,
        commitsNumber: initialUserValue.commitsNumber
    }
}