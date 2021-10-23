const LinksSocialMedia = {
  Github: 'viso4res',
  Youtube: 'AlexandreFlausinodaMotta',
  Facebook: 'Vinicius Soares',
  Instagram: 'vi_soaress_',
  Twitter: 'Luangameplay666'
}

function ChangeSocialMediaLinks() {
  for (let li of SocialLinks.children) {
    const Social = li.getAttribute('class')

    li.children[0].href = `https://${Social}.com/${LinksSocialMedia[Social]}`
  }
}

ChangeSocialMediaLinks()

function GetGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.Github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    UserName.textContent = data.name
    UserBio.textContent = data.bio
    UserLink.href = data.html_url
    UserImage.src = data.avatar_url
    UserLogin.textContent = data.login
  })
  //passa o objeto para json sem criar uma função
  //mudou para o html pela dom
  //href para links
  //src para source
  //textContet para texto
}
GetGithubProfileInfos()
// Arrow Function => elemina a necessidade de criar um nome para a função (execução única) basicamente!

