import { Repository } from "../entities/github";

export interface GithubRepositoryInterface {
  getGoogleRepositories(): Promise<Repository[] | Error>;
}