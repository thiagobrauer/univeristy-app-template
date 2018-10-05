module.exports = {
  build: {
    srcPath: './src',
    outputPath: './public'
  },
  site: {
    title: 'MBA em experiência em gestão de equipes',
    chat: [
      {
        content: 'Professor ruim',
        type: 'sent',
        datetime: ''
      },
      {
        content: 'Olá João, poderia nos detalhar melhor sobre sua insatisfação?',
        type: 'received',
        datetime: ''
      },
    ],
    lessons: [
      {
        id: '5',
        name: 'Professor John Doe',
        date: '22/09/2018',
        time: '15:09',
        thumb: 'https://placeimg.com/360/160/any',
        instructor: '',
        module: 'Informações do módulo',
        files: [
          {
            title: 'Teoria1.pdf',
            url: '#',
          },
          {
            title: 'Slides.ppt',
            url: '#',
          },
          {
            title: 'Atividades.docx',
            url: '#',
          },
        ]
      },
    ]
  }
};
