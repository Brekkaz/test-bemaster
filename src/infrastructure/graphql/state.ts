import { GithubUseCases } from "../../application/githubUseCase";
import { GithubRepository } from "../githubAPI/githubRepository";

const repo = new GithubRepository();
const githubUseCases = new GithubUseCases(repo);

export interface StateInterface {
    githubUseCases: GithubUseCases;
}

export const state: StateInterface = {
    githubUseCases
};