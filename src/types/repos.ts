export interface IRepo {
    name: string;
    stars: number;
    description: string;
}

export interface IRepoApi {
    name: string;
    description: string | null;
    stargazers_count: number;
}