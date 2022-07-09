export const labels = {
  language: 'Мова',
  github: 'GitHub',
  lastCommit: 'Останній коміт',
  last90Days: 'Останні 90 днів',
  loadDetails: 'Отримати деталі',
  commits: 'комітів',
  loading: 'Завантаження...'
}

// Repos are in alphabetical order by the language code
// You may need to clear your sessionStorage when adding a new item to this list
export const repos = [
  { lang: 'en-us', owner: 'vuejs', repo: 'docs', branch: 'master', url: 'https://v3.vuejs.org/' },
  { lang: 'fr', owner: 'demahom18', repo: 'docs-next', branch: 'master', url: 'https://vue3-fr.netlify.app' },
  { lang: 'id', owner: 'vuejs-id', repo: 'docs-next', branch: 'indonesian', url: 'https://v3-vuejsid-docs.netlify.app/' },
  { lang: 'ja', owner: 'vuejs-jp', repo: 'ja.vuejs.org', branch: 'lang-ja', url: 'https://v3.ja.vuejs.org/' },
  { lang: 'ko', owner: 'vuejs-kr', repo: 'docs-next', branch: 'rootKoKr', url: 'https://v3.ko.vuejs.org/'  },
  { lang: 'pt-br', owner: 'vuejs-br', repo: 'docs-next', branch: 'master', url: 'https://vuejsbr-docs-next.netlify.app/' },
  { lang: 'ua', owner: 'vuejsorgua', repo: 'docs-next', branch: 'master', url: 'https://vuejs.org.ua/' },
  { lang: 'zh-cn', owner: 'vuejs', repo: 'docs-next-zh-cn', branch: 'master', url: 'https://v3.cn.vuejs.org/' }
]
