import { Repository } from "../entities/github";

export interface GithubUseCasesInterface {
  getGoogleRepositories(): Promise<Repository[] | Error>;
}