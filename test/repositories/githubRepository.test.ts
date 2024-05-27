import { Repository } from "../../src/domain/entities/github";
import { GithubRepository } from "../../src/infrastructure/githubAPI/githubRepository"

global.fetch = jest.fn();

describe('getGoogleRepositories', () => {
    beforeEach(() => {
        (fetch as jest.Mock).mockClear();
    });

    it('should throw an error when fetch fails', async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
        });
        const repository = new GithubRepository();
        
        await expect(repository.getGoogleRepositories()).rejects.toThrow('Failed getting data');
    });

    it('should return repositories, but we expect an unexpected format to fail', async () => {
        const mockResponse = [
            { id: 1, name: 'Repo1', url: 'https://github.com/google/repo1' },
            { id: 2, name: 'Repo2', url: 'https://github.com/google/repo2' },
        ];
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => mockResponse,
        });

        const repository = new GithubRepository();
        const repositories = await repository.getGoogleRepositories();

        expect(repositories).toEqual([
            new Repository(1, 'Repo1', 'https://github.com/google/repo1'),
            new Repository(2, 'Repo2', 'https://github.com/google/repo2'),
        ]);
        expect(repositories).not.toEqual([
            new Repository(1, 'Repo3', 'https://github.com/google/repo3'),
            new Repository(2, 'Repo4', 'https://github.com/google/repo4'),
        ]);
    });
});
