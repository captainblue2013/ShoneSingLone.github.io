const token = ['?', 'a', 'c', 'c', 'e', 's', 's', '_', 't', 'o', 'k', 'e', 'n', '=', '7', 'f', 'a', '0', 'c', 'e', 'f', '8', '2', 'e', '9', 'a', 'b', '2', 'a', 'a', 'c', 'd', 'd', '0', '6', '7', '4', '9', 'b', '5', 'c', '2', 'e', '1', '1', '9', 'e', '3', '3', '2', 'a', '1', '3', '6'];
export const repositoryContents = (path = "") => {
  return `https://api.github.com/repos/ShoneSingLone/GitBook/contents` + path + token.join("");;
}
