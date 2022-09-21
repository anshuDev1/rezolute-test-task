
export interface UserDetails {
  login: string
  id?: number
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string,
  received_events_url: string
  type: string
  name: null | string
  company: null | string
  blog: string
  location: null | string
  email: null | string
  hireable: null | string
  bio: string
  public_repos: string
  followers: number,
  following: number,
  created_at: string,
  date: string,
}

export interface UserReposDetail {
  id?: number
  name: string
  description: string
  html_url: string
}
