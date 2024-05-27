import { Repository } from "../domain/entities/github";
import { GithubRepositoryInterface } from "../domain/repositories/github";
import { GithubUseCasesInterface } from "../domain/usecases/github";

export class GithubUseCases implements GithubUseCasesInterface {
    constructor(
        private githubRepository: GithubRepositoryInterface,
    ) { }

    async getGoogleRepositories(): Promise<Repository[] | Error> {
        return this.githubRepository.getGoogleRepositories();
    }
}