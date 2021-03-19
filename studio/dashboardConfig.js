export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6054fc6dac3deb496e809f9b',
                  title: 'Sanity Studio',
                  name: 'holu-sample-landing-page-studio',
                  apiId: '480f52e1-d877-4b85-a752-16b1b2cd16f3'
                },
                {
                  buildHookId: '6054fc6d26de52468a52d320',
                  title: 'Landing pages Website',
                  name: 'holu-sample-landing-page',
                  apiId: 'a813a164-08df-40e6-817c-89e3bcff299c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/holu-solar/holu-sample-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://holu-sample-landing-page.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
