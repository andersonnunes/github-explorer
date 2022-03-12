export type Repository = {
  name: string
  description: string
  html_url: string
}

export class GithubApi {
  public static getRepos(): Promise<Repository[]> {
    return fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json());
  }
}
