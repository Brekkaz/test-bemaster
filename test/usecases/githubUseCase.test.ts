import { GithubUseCases } from "../../src/application/githubUseCase";
import { Repository } from "../../src/domain/entities/github";
import { GithubRepository } from "../../src/infrastructure/githubAPI/githubRepository";

describe("GithubUseCases", () => {
  test("should return 10 repositories", async () => {
    const repo = new GithubRepository();
    const githubUseCases = new GithubUseCases(repo);

    const repositories = await githubUseCases.getGoogleRepositories();

    expect(repositories).not.toBeInstanceOf(Error);
    expect((repositories as Repository[]).length).toBe(10);
  });

  test("should return an error", async () => {
    const repo = new GithubRepository();
    const githubUseCases = new GithubUseCases(repo);
    jest.spyOn(repo, 'getGoogleRepositories').mockRejectedValueOnce(new Error('Failed to fetch repositories'));

    await expect(
      githubUseCases.getGoogleRepositories()
    ).rejects.toThrow('Failed to fetch repositories');
  });
});