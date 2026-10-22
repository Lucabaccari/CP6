export const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Trajetória', href: '#trajetoria' },
  { label: 'Contato', href: '#contato' },
]

export const projects = [
  {
    index: '01',
    title: 'Code-Cam',
    eyebrow: 'FIAP Challenge · Jovi',
    description:
      'Projeto desenvolvido em equipe para o FIAP Challenge, em parceria com a Jovi. A proposta avançou até a banca final, entre os 20 melhores de 113 grupos.',
    contribution:
      'Forte atuação na concepção da ideia, prototipação, desenvolvimento, testes, correções e apresentação.',
    tags: ['Projeto em equipe', 'Front-end', 'Prototipação', 'Testes'],
    liveUrl: 'https://codecam.onrender.com',
    visual: 'codecam',
    featured: true,
  },
  {
    index: '02',
    title: 'Marcos Moreira',
    eyebrow: 'Landing page · Freelancer',
    description:
      'Landing page desenvolvida para um nutricionista, do contato inicial à entrega comercial, com foco em apresentar o profissional no ambiente digital.',
    contribution: 'Prospecção, desenvolvimento e entrega do projeto ao cliente.',
    tags: ['HTML', 'CSS', 'Landing page'],
    liveUrl: 'https://www.marcosmoreiranutri.com.br/',
    githubUrl: 'https://github.com/Lucabaccari/marcosmoreira-nutri-lp',
    visual: 'nutrition',
  },
  {
    index: '03',
    title: 'API de Jogos',
    eyebrow: 'Back-end · Projeto de estudo',
    description:
      'Primeira API REST criada para praticar fundamentos de back-end, organização em camadas e operações CRUD com métodos HTTP.',
    contribution:
      'Rotas, controllers e services, com dados em arquivo JSON local e testes de endpoints no Postman.',
    tags: ['Node.js', 'Express', 'JSON', 'Postman'],
    githubUrl: 'https://github.com/Lucabaccari/Api-Jogos',
    visual: 'api',
  },
]

export const techGroups = [
  {
    key: 'development',
    label: 'desenvolvimento',
    items: [
      { name: 'Python', icon: 'python.svg', ring: 'middle', angle: 0 },
      { name: 'JavaScript', icon: 'javascript.svg', ring: 'middle', angle: 120 },
      { name: 'React', icon: 'react.svg', ring: 'inner', angle: 0 },
      { name: 'Node.js', icon: 'nodejs.svg', ring: 'inner', angle: 180 },
    ],
  },
  {
    key: 'database',
    label: 'banco_de_dados',
    items: [
      { name: 'PostgreSQL', icon: 'postgresql.svg', ring: 'middle', angle: 240 },
    ],
  },
  {
    key: 'tools',
    label: 'ferramentas_e_infra',
    items: [
      { name: 'Git', icon: 'git.svg', ring: 'outer', angle: 0 },
      { name: 'GitHub', icon: 'github.svg', ring: 'outer', angle: 90, monochrome: true },
      { name: 'Jira', icon: 'jira.svg', ring: 'outer', angle: 180 },
      { name: 'AWS', icon: 'aws.svg', ring: 'outer', angle: 270 },
    ],
  },
]

export const timeline = [
  {
    date: '2025',
    title: 'Conclusão do Ensino Médio',
    description: 'Encerramento da formação básica e preparação para o próximo passo acadêmico.',
    type: 'formação',
  },
  {
    date: '2026',
    title: 'Engenharia de Software na FIAP',
    description: 'Início da graduação e aprofundamento em desenvolvimento de software e tecnologia.',
    type: 'graduação',
  },
  {
    date: 'Abr. 2026',
    title: 'Início na Pluxee',
    description: 'Entrada como Jovem Aprendiz em Gerenciamento de Serviços de TI (ITSM).',
    type: 'experiência',
  },
  {
    date: '2026',
    title: 'Na banca final do FIAP Challenge',
    description: 'Code-Cam entre os 20 projetos finalistas de 113 grupos, em parceria com a Jovi.',
    type: 'projeto',
    current: true
  },
  {
    date: '2029',
    title: 'Conclusão da graduação',
    description: 'Previsão de conclusão do curso de Engenharia de Software.',
    type: 'previsão',
    future: true,
  },
]
