import { StateInterface } from "../state";

export const githubResolver = (state: StateInterface) => ({
  googleRepositories: async () => state.githubUseCases.getGoogleRepositories()
});