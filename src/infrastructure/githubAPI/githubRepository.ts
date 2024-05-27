import { GithubRepositoryInterface } from "../../domain/repositories/github";
import { Repository } from "../../domain/entities/github";

export class GithubRepository implements GithubRepositoryInterface {
    async getGoogleRepositories(): Promise<Repository[] | Error> {
        try {
            const response = await fetch('https://api.github.com/users/google/repos?' + new URLSearchParams({
                per_page: '10',
            }));
            if (!response.ok) {
                throw new Error('Failed to fetch repositories');
            }
            const data = await response.json();
            const repositories: Repository[] = data.map((repo: Repository) => new Repository(repo.id, repo.name, repo.url));
            return repositories;
        } catch (error) {
            throw new Error('Failed getting data');
        }
    }
}