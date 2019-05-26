export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ceadd45e5299584e02b7b07',
                  title: 'Sanity Studio',
                  name: 'gatsby-theme-sanity-blog-studio',
                  apiId: 'a1c38286-8279-4638-8799-db94fe35e027'
                },
                {
                  buildHookId: '5ceadd4543aa24b561448778',
                  title: 'Blog Website',
                  name: 'gatsby-theme-sanity-blog',
                  apiId: 'b441ddae-0976-4174-b4d4-b7bfc0cd360a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/molebox/gatsby-theme-sanity-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://gatsby-theme-sanity-blog.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
