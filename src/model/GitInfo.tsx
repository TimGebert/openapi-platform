/**
 * Note: At the moment this is pretty much an exact replica of the auth fields from
 * isomorphic-git https://isomorphic-git.github.io/docs/en/push
 */

export enum OAuth2Format {
  github = 'github',
  bitbucket = 'bitbucket',
  gitlab = 'gitlab',
}

export interface GitAuth {
  username: string;
  token?: string;
  password?: string;
  oauth2format?: OAuth2Format;
}

export interface GitInfo {
  repoUrl: string;
  auth: GitAuth;
}
