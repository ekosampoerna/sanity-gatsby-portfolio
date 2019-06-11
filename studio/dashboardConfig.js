export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5cffdca3bf8da38cba537e5a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-d4r766ce',
                  apiId: 'd2e3a15a-7aa2-455c-b7a7-e83af0b8a78a'
                },
                {
                  buildHookId: '5cffdca4f88877e5fa8b6fe2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-463845bi',
                  apiId: '7845871f-7101-47aa-b2de-fe3153613fa6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ekosampoerna/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-463845bi.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
