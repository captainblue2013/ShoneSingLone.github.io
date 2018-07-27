export const repositoryContents = (path = "") => {
  return `https://api.github.com/repos/ShoneSingLone/GitBook/contents` + path + `?access_token=399234264a04c4f3765841b3e11f236c698393e8`;
}
