import { IRepo, IRepoApi } from '../../types/repos';


export const formatRepo = (repo: IRepoApi): IRepo => {
    return {
        name: repo.name,
        description: repo.description || 'No Description',
        stars: repo.stargazers_count
    }
}

export const sortRepos = (repos: IRepo[]) => {
    return repos.sort(compareRepos);
}

export const compareRepos = (firstRepos: IRepo, secondRepos: IRepo) => {
    if (firstRepos.stars < secondRepos.stars) return 1;
    if (firstRepos.stars > secondRepos.stars) return -1;
    return 0;
}