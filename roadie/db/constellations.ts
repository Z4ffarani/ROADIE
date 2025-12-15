export interface QuizQuestion {
  id: string
  question_text: string
  options: string[]
  order_index: number
  correct_index: number
}

export interface Quiz {
  id: string
  total_questions: number
  passing_score: number
  questions: QuizQuestion[]
}

export interface Course {
  id: string
  constellation_id: string
  title: string
  video_iframe_url: string
  article_md: string
  locked: boolean
  quiz: Quiz
}

export type CourseMap = Record<string, Course>

export const mockCourses: CourseMap = {
// Constelação 1 – Arquiteto de IA
  '1': {
    id: '1',
    constellation_id: '1',
    title: 'Machine Learning',
    video_iframe_url: 'https://www.youtube.com/embed/aircAruvnKk',
    article_md: `# Machine Learning

## Introdução

Machine Learning é um subcampo da inteligência artificial que permite que sistemas aprendam e melhorem a partir da experiência sem serem explicitamente programados.

## Conceitos Principais

### Tipos de Aprendizado

1. **Supervisionado**: Aprendizado com dados rotulados
2. **Não-supervisionado**: Descoberta de padrões em dados não rotulados
3. **Por reforço**: Aprendizado através de recompensas e penalidades

### Algoritmos Clássicos

- Regressão Linear
- Árvores de Decisão
- K-Nearest Neighbors
- Support Vector Machines

## Prática

Você aprenderá a implementar esses algoritmos usando Scikit-learn e avaliar seus modelos.`,
    locked: false,
    quiz: {
      id: 'quiz-1',
      total_questions: 5,
      passing_score: 70,
      questions: [
        { id: 'q1', question_text: 'Qual tipo de aprendizado de máquina utiliza dados rotulados?', options: ['Aprendizado Supervisionado', 'Aprendizado Não-supervisionado', 'Aprendizado por Reforço', 'Aprendizado Semi-supervisionado'], order_index: 1, correct_index: 0 },
        { id: 'q2', question_text: 'O que é overfitting em Machine Learning?', options: ['Modelo performa mal em dados de treino e teste', 'Modelo performa bem em treino mas mal em teste', 'Modelo performa bem em ambos', 'Modelo não aprende nada'], order_index: 2, correct_index: 1 },
        { id: 'q3', question_text: 'Qual biblioteca Python é mais usada para Machine Learning?', options: ['TensorFlow', 'Scikit-learn', 'PyTorch', 'Keras'], order_index: 3, correct_index: 1 },
        { id: 'q4', question_text: 'O que é um hiperparâmetro?', options: ['Parâmetro aprendido durante treino', 'Configuração definida antes do treino', 'Métrica de avaliação', 'Tipo de dado de entrada'], order_index: 4, correct_index: 1 },
        { id: 'q5', question_text: 'O que é Transfer Learning?', options: ['Transferir dados entre bancos', 'Reusar modelo pré-treinado', 'Mover modelo para produção', 'Compartilhar features'], order_index: 5, correct_index: 1 }
      ]
    }
  },

  '2': {
    id: '2',
    constellation_id: '1',
    title: 'Deploy de Modelos de ML',
    video_iframe_url: 'https://www.youtube.com/embed/fw6NMQrYc6w',
    article_md: `# Deploy de Modelos de Machine Learning

## Introdução

Aprender a colocar modelos de ML em produção é essencial para criar valor real com suas soluções.

## Ferramentas Essenciais

### FastAPI
Framework moderno para criar APIs de ML rapidamente.

### Docker
Containerização garante que seu modelo funcione em qualquer ambiente.

### Kubernetes
Orquestrador de containers para escalar e gerenciar aplicações.

## Pipeline de Deploy

1. Treinar modelo
2. Salvar artefatos
3. Criar API
4. Containerizar
5. Deploy em cloud`,
    locked: false,
    quiz: {
      id: 'quiz-2',
      total_questions: 3,
      passing_score: 70,
      questions: [
        { id: 'q1', question_text: 'Qual framework é ideal para criar APIs de ML?', options: ['Flask', 'FastAPI', 'Django', 'Express'], order_index: 1, correct_index: 1 },
        { id: 'q2', question_text: 'O que é Docker?', options: ['Linguagem de programação', 'Plataforma de containerização', 'Banco de dados', 'Framework web'], order_index: 2, correct_index: 1 },
        { id: 'q3', question_text: 'Por que versionar modelos é importante?', options: ['Para economizar espaço', 'Para permitir rollback e comparações', 'Não é importante', 'Para acelerar treino'], order_index: 3, correct_index: 1 }
      ]
    }
  },

  '3': {
    id: '3',
    constellation_id: '1',
    title: 'MLOps Básico',
    video_iframe_url: 'https://www.youtube.com/embed/Cj-24qzhdAA',
    article_md: `# MLOps Básico

## O que é MLOps?

MLOps combina Machine Learning, DevOps e Data Engineering para criar sistemas de ML confiáveis e escaláveis.

## Componentes Principais

- **CI/CD para ML**: Automação de treino e deploy
- **Monitoramento**: Rastreamento de performance em produção
- **Versionamento**: Código, dados e modelos
- **Feature Stores**: Gerenciamento de features

## Ferramentas

- MLflow
- Kubeflow
- Weights & Biases`,
    locked: true,
    quiz: {
      id: 'quiz-3',
      total_questions: 4,
      passing_score: 70,
      questions: [
        { id: 'q1', question_text: 'O que é MLOps?', options: ['Um tipo de modelo', 'Práticas para produtizar ML', 'Uma linguagem', 'Um banco de dados'], order_index: 1, correct_index: 1 },
        { id: 'q2', question_text: 'Por que monitorar modelos em produção?', options: ['Para economizar recursos', 'Para detectar degradação de performance', 'Não é necessário', 'Para acelerar o modelo'], order_index: 2, correct_index: 1 },
        { id: 'q3', question_text: 'O que é um Feature Store?', options: ['Loja online', 'Repositório centralizado de features', 'Tipo de modelo', 'Framework'], order_index: 3, correct_index: 1 },
        { id: 'q4', question_text: 'Qual ferramenta é usada para tracking de experimentos?', options: ['Docker', 'MLflow', 'React', 'PostgreSQL'], order_index: 4, correct_index: 1 }
      ]
    }
  },

  // NOVOS CURSOS PARA COMPLETAR 5
  '4': {
    id: '4',
    constellation_id: '1',
    title: 'Arquitetura de Modelos de IA',
    video_iframe_url: 'https://www.youtube.com/embed/aircAruvnKk',
    article_md: `# Arquitetura de Modelos de IA

## Introdução

Aprenda a estruturar pipelines de IA, desde a ingestão de dados até o deploy em produção.

## Conteúdo

- Planejamento de pipelines de ML
- Escolha de algoritmos
- Estrutura de dados e armazenamento
- Monitoramento e manutenção de modelos`,
    locked: true,
    quiz: {
      id: 'quiz-4',
      total_questions: 4,
      passing_score: 70,
      questions: [
        { id: 'q1', question_text: 'O que é uma pipeline de ML?', options: ['Sequência de passos de ML', 'Tipo de modelo', 'Banco de dados', 'Framework web'], order_index: 1, correct_index: 0 },
        { id: 'q2', question_text: 'Por que monitorar modelos?', options: ['Detectar degradação', 'Economizar memória', 'Aumentar dataset', 'Fazer deploy mais rápido'], order_index: 2, correct_index: 0 },
        { id: 'q3', question_text: 'Escolher o algoritmo correto é importante porque?', options: ['Performance e precisão', 'Aparência', 'Framework', 'Banco de dados'], order_index: 3, correct_index: 0 },
        { id: 'q4', question_text: 'Feature Store armazena?', options: ['Features', 'Modelos', 'Frameworks', 'Vídeos'], order_index: 4, correct_index: 0 }
      ]
    }
  },

  '5': {
    id: '5',
    constellation_id: '1',
    title: 'IA Generativa e Transformers',
    video_iframe_url: 'https://www.youtube.com/embed/TcO3X8GHSpM',
    article_md: `# IA Generativa e Transformers

## Introdução

Aprenda sobre modelos generativos e transformers, usados em NLP, imagens e multimodal.

## Conteúdo

- Redes Neurais Generativas (GANs)
- Transformers e atenção
- Aplicações em NLP e visão computacional
- Boas práticas para produção`,
    locked: true,
    quiz: {
      id: 'quiz-5',
      total_questions: 5,
      passing_score: 70,
      questions: [
        { id: 'q1', question_text: 'O que são Transformers?', options: ['Arquitetura de redes neurais', 'Banco de dados', 'Framework web', 'Pipeline de ML'], order_index: 1, correct_index: 0 },
        { id: 'q2', question_text: 'GAN significa?', options: ['Generative Adversarial Network', 'Graph Artificial Network', 'Global AI Network', 'General Algorithm Network'], order_index: 2, correct_index: 0 },
        { id: 'q3', question_text: 'Transformers são usados principalmente em?', options: ['NLP e visão', 'Somente imagens', 'Banco de dados', 'Web'], order_index: 3, correct_index: 0 },
        { id: 'q4', question_text: 'IA generativa produz?', options: ['Novos dados similares', 'Só Classificação', 'Só regressão', 'Somente gráficos'], order_index: 4, correct_index: 0 },
        { id: 'q5', question_text: 'A atenção em transformers permite?', options: ['Focar em partes relevantes do input', 'Aumentar dataset', 'Reduzir CPU', 'Monitorar modelo'], order_index: 5, correct_index: 0 }
      ]
    }
  },


  // Constelação 2 – Engenheiro DevOps
'6': {
  id: '6',
  constellation_id: '2',
  title: 'DevOps',
  video_iframe_url: 'https://www.youtube.com/embed/5fQJC9iLCbE',
  article_md: `# Fundamentos de DevOps

## Introdução

DevOps integra desenvolvimento de software e operações para entregar aplicações de forma ágil e confiável.

## Conceitos

- CI/CD
- Infraestrutura como Código
- Monitoramento e Logging
- Cultura DevOps`,
  locked: false,
  quiz: {
    id: 'quiz-6',
    total_questions: 5,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'O que significa CI/CD?', options: ['Continuous Integration / Continuous Delivery', 'Code Integration / Code Deployment', 'Continuous Input / Continuous Debug', 'Computing Infrastructure / Code Deployment'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'O que é Infraestrutura como Código?', options: ['Gerenciamento manual de servidores', 'Definir infra via scripts e templates', 'Monitoramento de logs', 'Deploy manual'], order_index: 2, correct_index: 1 },
      { id: 'q3', question_text: 'Por que monitoramento é importante?', options: ['Para detectar falhas e performance', 'Para escrever documentação', 'Para aumentar equipe', 'Para treinar ML'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'DevOps foca principalmente em?', options: ['Integração entre desenvolvimento e operações', 'Marketing', 'Design de interface', 'Banco de dados'], order_index: 4, correct_index: 0 },
      { id: 'q5', question_text: 'Qual é um benefício do DevOps?', options: ['Entrega mais rápida e confiável', 'Maior complexidade', 'Mais bugs', 'Mais reuniões'], order_index: 5, correct_index: 0 }
    ]
  }
},

'7': {
  id: '7',
  constellation_id: '2',
  title: 'Containers e Docker',
  video_iframe_url: 'https://www.youtube.com/embed/3c-iBn73dDE',
  article_md: `# Containers e Docker

## Introdução

Containers permitem executar aplicações isoladas, garantindo portabilidade e consistência entre ambientes.

## Conteúdo

- Conceito de container
- Docker CLI e imagens
- Docker Compose
- Boas práticas para produção`,
  locked: false,
  quiz: {
    id: 'quiz-7',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'O que é um container?', options: ['Máquina virtual completa', 'Ambiente isolado leve', 'Banco de dados', 'Framework web'], order_index: 1, correct_index: 1 },
      { id: 'q2', question_text: 'Docker Compose serve para?', options: ['Orquestrar múltiplos containers', 'Gerar logs', 'Treinar modelos', 'Desenvolver UI'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Qual comando inicia um container?', options: ['docker run', 'docker build', 'docker compose', 'docker start'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Por que usar containers?', options: ['Portabilidade, isolamento e consistência', 'Aumentar memória', 'Rodar CSS', 'Melhorar design'], order_index: 4, correct_index: 0 }
    ]
  }
},

'8': {
  id: '8',
  constellation_id: '2',
  title: 'Kubernetes e Orquestração',
  video_iframe_url: 'https://www.youtube.com/embed/X48VuDVv0do',
  article_md: `# Kubernetes e Orquestração

## Introdução

Kubernetes é um orquestrador de containers que gerencia deploy, escalabilidade e operação de aplicações.

## Conteúdo

- Pods, Services e Deployments
- Escalabilidade automática
- ConfigMaps e Secrets
- Monitoramento de clusters`,
  locked: true,
  quiz: {
    id: 'quiz-8',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'O que é um Pod?', options: ['Menor unidade deployável no Kubernetes', 'Servidor físico', 'Tipo de banco', 'Pipeline CI/CD'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Para que servem Services?', options: ['Expor Pods para comunicação', 'Armazenar logs', 'Executar testes', 'Treinar modelos'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'ConfigMaps armazenam?', options: ['Configurações', 'Logs', 'Imagens Docker', 'Banco de dados'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Escalabilidade automática permite?', options: ['Ajustar número de pods conforme demanda', 'Fazer deploy manual', 'Treinar ML', 'Aumentar CPU do servidor'], order_index: 4, correct_index: 0 }
    ]
  }
},

'9': {
  id: '9',
  constellation_id: '2',
  title: 'CI/CD Avançado',
  video_iframe_url: 'https://www.youtube.com/embed/1rQWhCawI4g',
  article_md: `# CI/CD Avançado

## Introdução

Automatize build, teste e deploy com pipelines avançadas de integração e entrega contínua.

## Conteúdo

- Pipelines declarativas
- Testes automatizados
- Deploy canary e blue-green
- Integração com Kubernetes`,
  locked: true,
  quiz: {
    id: 'quiz-9',
    total_questions: 5,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'O que é Blue-Green Deployment?', options: ['Deploy com duas versões para reduzir risco', 'Deploy manual', 'Tipo de container', 'Pipeline CI/CD'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Pipelines declarativas significam?', options: ['Infra declarada via código', 'Criar gráficos', 'Executar ML', 'Gerar logs'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Deploy Canary é usado para?', options: ['Testar nova versão com poucos usuários', 'Treinar IA', 'Monitorar CPU', 'Gerar logs'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Qual ferramenta pode automatizar CI/CD?', options: ['Jenkins', 'Photoshop', 'Excel', 'Word'], order_index: 4, correct_index: 0 },
      { id: 'q5', question_text: 'Testes automatizados ajudam a?', options: ['Garantir qualidade do software', 'Desenhar UI', 'Aumentar servidores', 'Criar containers'], order_index: 5, correct_index: 0 }
    ]
  }
},

'10': {
  id: '10',
  constellation_id: '2',
  title: 'Monitoramento e Observabilidade',
  video_iframe_url: 'https://www.youtube.com/embed/WZ7KQmZWGk0',
  article_md: `# Monitoramento e Observabilidade

## Introdução

Monitore sistemas, detecte problemas e garanta disponibilidade com observabilidade.

## Conteúdo

- Logs e métricas
- Alertas e dashboards
- Ferramentas: Prometheus, Grafana
- Boas práticas`,
  locked: true,
  quiz: {
    id: 'quiz-10',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Prometheus é usado para?', options: ['Coletar métricas', 'Treinar ML', 'Criar containers', 'Deploy de aplicações'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Grafana é usado para?', options: ['Visualizar dashboards', 'Escrever código', 'Monitorar banco', 'Gerar containers'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Logs ajudam a?', options: ['Detectar erros e comportamento', 'Fazer deploy', 'Treinar IA', 'Criar pipelines'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Observabilidade inclui?', options: ['Métricas, logs e tracing', 'Só logs', 'Só métricas', 'Só tracing'], order_index: 4, correct_index: 0 }
    ]
  }
},

// Constelação 3 – Engenheiro Full-Stack Cloud
'11': {
  id: '11',
  constellation_id: '3',
  title: 'Cloud Computing',
  video_iframe_url: 'https://www.youtube.com/embed/N0SYCyS2xZA?si=_aNd8BU_3Ezf3Qc6',
  article_md: `# Cloud Computing

## Introdução

Cloud Computing permite escalar aplicações de forma rápida e econômica.

## Conceitos

- Modelos: IaaS, PaaS, SaaS
- Provisionamento e escalabilidade
- Segurança e compliance
- Principais provedores: AWS, Azure, GCP`,
  locked: false,
  quiz: {
    id: 'quiz-11',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'O que é IaaS?', options: ['Infraestrutura como serviço', 'Software como serviço', 'Plataforma como serviço', 'Internet como serviço'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Qual é um benefício da nuvem?', options: ['Escalabilidade rápida', 'Mais cabos', 'Mais servidores físicos', 'Mais burocracia'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'AWS é um exemplo de?', options: ['Provedor de Cloud', 'Linguagem de programação', 'Framework Front-end', 'Banco de dados'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'PaaS fornece?', options: ['Plataforma para desenvolvimento', 'Servidores físicos', 'Só banco de dados', 'Ferramentas de design'], order_index: 4, correct_index: 0 }
    ]
  }
},

'12': {
  id: '12',
  constellation_id: '3',
  title: 'Backend com Node.js',
  video_iframe_url: 'https://www.youtube.com/embed/ENrzD9HAZK4',
  article_md: `# Backend com Node.js

## Introdução

Node.js permite criar servidores escaláveis usando JavaScript.

## Conteúdo

- Event Loop e Async
- Express.js
- APIs RESTful
- Conexão com bancos de dados`,
  locked: false,
  quiz: {
    id: 'quiz-12',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'O que é o Event Loop?', options: ['Executa código assíncrono', 'Framework de UI', 'Banco de dados', 'Servidor físico'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Express.js é usado para?', options: ['Criar APIs', 'Gerar logs', 'Treinar ML', 'Orquestrar containers'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Node.js é baseado em qual linguagem?', options: ['JavaScript', 'Python', 'Java', 'Go'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Async/Await serve para?', options: ['Gerenciar código assíncrono', 'Criar containers', 'Fazer deploy', 'Desenhar UI'], order_index: 4, correct_index: 0 }
    ]
  }
},

'13': {
  id: '13',
  constellation_id: '3',
  title: 'Frontend Moderno com React',
  video_iframe_url: 'https://www.youtube.com/embed/0-S5a0eXPoc',
  article_md: `# Frontend Moderno com React

## Introdução

React permite criar interfaces dinâmicas e reativas para aplicações web.

## Conteúdo

- Componentes e Props
- Hooks (useState, useEffect)
- Gerenciamento de estado (Redux, Context API)
- Rotas e navegação`,
  locked: false,
  quiz: {
    id: 'quiz-13',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'React é uma biblioteca para?', options: ['Frontend', 'Backend', 'Cloud', 'DevOps'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'useState serve para?', options: ['Gerenciar estado local', 'Fazer deploy', 'Orquestrar containers', 'Coletar logs'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Redux é usado para?', options: ['Gerenciar estado global', 'Treinar ML', 'Monitorar CPU', 'Criar containers'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Props servem para?', options: ['Passar dados para componentes', 'Gerar logs', 'Criar containers', 'Treinar IA'], order_index: 4, correct_index: 0 }
    ]
  }
},

'14': {
  id: '14',
  constellation_id: '3',
  title: 'Banco de Dados e ORM',
  video_iframe_url: 'https://www.youtube.com/embed/9Pzj7Aj25lw',
  article_md: `# Banco de Dados e ORM

## Introdução

Aprenda a armazenar e consultar dados de forma eficiente.

## Conteúdo

- Bancos relacionais e NoSQL
- SQL básico e avançado
- ORM (Sequelize, TypeORM)
- Boas práticas de modelagem`,
  locked: true,
  quiz: {
    id: 'quiz-14',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'SQL é usado para?', options: ['Consultar bancos relacionais', 'Criar UI', 'Treinar ML', 'Orquestrar containers'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'NoSQL é ideal para?', options: ['Dados não estruturados', 'Somente imagens', 'Treinar ML', 'Criar containers'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'ORM serve para?', options: ['Mapear objetos para banco', 'Criar gráficos', 'Deploy', 'Monitorar logs'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Sequelize é um?', options: ['ORM para Node.js', 'Banco de dados', 'Framework Frontend', 'Container'], order_index: 4, correct_index: 0 }
    ]
  }
},

'15': {
  id: '15',
  constellation_id: '3',
  title: 'CI/CD e Deploy na Nuvem',
  video_iframe_url: 'https://www.youtube.com/embed/1rQWhCawI4g',
  article_md: `# CI/CD e Deploy na Nuvem

## Introdução

Automatize build, testes e deploy em ambientes de cloud.

## Conteúdo

- Pipelines com GitHub Actions ou Jenkins
- Deploy em AWS, Azure ou GCP
- Monitoramento pós-deploy
- Boas práticas de segurança`,
  locked: true,
  quiz: {
    id: 'quiz-15',
    total_questions: 5,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'GitHub Actions é usado para?', options: ['Automatizar CI/CD', 'Criar containers', 'Treinar ML', 'Orquestrar Kubernetes'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Deploy em nuvem pode ser feito em?', options: ['AWS, Azure, GCP', 'Só AWS', 'Só Azure', 'Só GCP'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Testes automatizados ajudam a?', options: ['Garantir qualidade do software', 'Criar UI', 'Monitorar pods', 'Treinar IA'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Boas práticas de segurança incluem?', options: ['Gerenciamento de segredos e logs', 'Aumentar memória', 'Criar containers', 'Treinar ML'], order_index: 4, correct_index: 0 },
      { id: 'q5', question_text: 'Jenkins é usado para?', options: ['Automação de pipelines', 'Design de interface', 'Banco de dados', 'Monitoramento'], order_index: 5, correct_index: 0 }
    ]
  }
},

// Constelação 4 – Especialista em Cibersegurança
'21': {
  id: '21',
  constellation_id: '4',
  title: 'Cibersegurança',
  video_iframe_url: 'https://www.youtube.com/embed/X-O1-l0gP5Q',
  article_md: `# Fundamentos de Cibersegurança

## Introdução

Aprenda os princípios básicos de segurança da informação para proteger sistemas e dados.

## Conteúdo

- Confidencialidade, Integridade e Disponibilidade (CIA)
- Tipos de ameaças: malware, phishing, ransomware
- Criptografia básica
- Boas práticas de senhas`,
  locked: false,
  quiz: {
    id: 'quiz-21',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'O que significa CIA em cibersegurança?', options: ['Confidencialidade, Integridade e Disponibilidade', 'Criptografia, Integração e Autenticação', 'Controle, Informação e Acesso', 'Cloud, Internet e Antivirus'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Qual é um tipo de malware?', options: ['Ransomware', 'Python', 'HTML', 'Docker'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Boas práticas de senha incluem?', options: ['Senhas fortes e únicas', 'Senha 1234', 'Mesma senha para tudo', 'Sem senha'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Criptografia serve para?', options: ['Proteger dados', 'Acelerar processamento', 'Fazer deploy', 'Gerar logs'], order_index: 4, correct_index: 0 }
    ]
  }
},

'22': {
  id: '22',
  constellation_id: '4',
  title: 'Redes e Segurança',
  video_iframe_url: 'https://www.youtube.com/embed/3Xc3CA655Y4',
  article_md: `# Redes e Segurança

## Introdução

Entender redes é essencial para proteger sistemas contra ataques.

## Conteúdo

- TCP/IP, DNS e HTTP/HTTPS
- Firewalls e IDS/IPS
- VPNs e segmentação de rede
- Monitoramento de tráfego`,
  locked: true,
  quiz: {
    id: 'quiz-22',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'O que é IDS?', options: ['Sistema de Detecção de Intrusão', 'Banco de dados', 'Firewall', 'Provedor Cloud'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Qual protocolo garante comunicação segura?', options: ['HTTPS', 'HTTP', 'FTP', 'SSH'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'VPN serve para?', options: ['Conexão segura e privada', 'Desenvolver apps', 'Treinar ML', 'Criar containers'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Firewall atua em?', options: ['Filtragem de tráfego', 'Desenho de UI', 'Banco de dados', 'Deploy'], order_index: 4, correct_index: 0 }
    ]
  }
},

'23': {
  id: '23',
  constellation_id: '4',
  title: 'Pentest e Ethical Hacking',
  video_iframe_url: 'https://www.youtube.com/embed/LwY9zGJ0g24',
  article_md: `# Pentest e Ethical Hacking

## Introdução

Aprenda a testar sistemas para identificar vulnerabilidades antes que sejam exploradas.

## Conteúdo

- Tipos de pentest: caixa preta, branca, cinza
- Ferramentas: Nmap, Metasploit, Burp Suite
- Relatórios e mitigação
- Ética e legislação`,
  locked: true,
  quiz: {
    id: 'quiz-23',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'O que é pentest de caixa preta?', options: ['Teste sem informações internas', 'Teste com total acesso', 'Teste de rede Wi-Fi', 'Teste de UI'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Nmap é usado para?', options: ['Mapear redes', 'Criptografar dados', 'Criar containers', 'Deploy'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Ética em hacking significa?', options: ['Agir legalmente e com permissão', 'Invadir sistemas sem permissão', 'Roubar dados', 'Vender exploits'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Burp Suite é uma ferramenta para?', options: ['Testes de segurança web', 'Monitoramento de rede', 'Treinar IA', 'Gerenciar banco'], order_index: 4, correct_index: 0 }
    ]
  }
},

'24': {
  id: '24',
  constellation_id: '4',
  title: 'Criptografia Avançada',
  video_iframe_url: 'https://www.youtube.com/embed/1U1j2j4l6gk',
  article_md: `# Criptografia Avançada

## Introdução

Aprenda técnicas avançadas de criptografia para proteger dados sensíveis.

## Conteúdo

- Criptografia simétrica e assimétrica
- Hashing e assinaturas digitais
- Certificados digitais e PKI
- Aplicações em segurança de dados`,
  locked: true,
  quiz: {
    id: 'quiz-24',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Criptografia simétrica usa?', options: ['Mesma chave para cifrar e decifrar', 'Chaves diferentes', 'Sem chave', 'Só hash'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Hashing serve para?', options: ['Garantir integridade', 'Criptografar rede', 'Deploy', 'Gerar UI'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'PKI é?', options: ['Infraestrutura de chaves públicas', 'Framework de UI', 'Pipeline CI/CD', 'Banco NoSQL'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Assinaturas digitais servem para?', options: ['Autenticar origem e integridade', 'Treinar ML', 'Orquestrar containers', 'Monitorar rede'], order_index: 4, correct_index: 0 }
    ]
  }
},

'25': {
  id: '25',
  constellation_id: '4',
  title: 'Monitoramento e Resposta a Incidentes',
  video_iframe_url: 'https://www.youtube.com/embed/jwLzD4U_Fu8',
  article_md: `# Monitoramento e Resposta a Incidentes

## Introdução

Aprenda a detectar e reagir rapidamente a ataques cibernéticos.

## Conteúdo

- SIEM e ferramentas de monitoramento
- Análise de logs
- Playbooks de resposta
- Comunicação de incidentes`,
  locked: true,
  quiz: {
    id: 'quiz-25',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'SIEM é usado para?', options: ['Monitoramento de segurança', 'Treinar IA', 'Deploy', 'Desenhar UI'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Playbooks ajudam a?', options: ['Responder incidentes rapidamente', 'Criar gráficos', 'Gerenciar containers', 'Treinar modelos'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Análise de logs serve para?', options: ['Detectar atividades suspeitas', 'Treinar ML', 'Criar UI', 'Gerenciar banco'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Comunicação de incidentes é importante para?', options: ['Transparência e mitigação', 'Aumentar memória', 'Treinar ML', 'Deploy'], order_index: 4, correct_index: 0 }
    ]
  }
},

// Constelação 5 – Designer de Experiências AR/VR
'31': {
  id: '31',
  constellation_id: '5',
  title: 'Augmented Reality',
  video_iframe_url: 'https://www.youtube.com/embed/QpbJwad6v_s',
  article_md: `# Fundamentos de AR e VR

## Introdução

Aprenda os conceitos básicos de Realidade Aumentada (AR) e Realidade Virtual (VR) e suas aplicações.

## Conteúdo

- Diferença entre AR e VR
- Dispositivos e sensores
- Experiências imersivas
- Principais ferramentas: Unity, Unreal Engine`,
  locked: false,
  quiz: {
    id: 'quiz-31',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Qual a diferença principal entre AR e VR?', options: ['AR sobrepõe elementos no mundo real, VR cria mundos virtuais', 'AR é só para celular, VR só para desktop', 'AR é design, VR é programação', 'Não há diferença'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Qual ferramenta é usada para desenvolvimento VR?', options: ['Unity', 'Photoshop', 'Excel', 'React'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Sensores em AR servem para?', options: ['Detectar posição e movimento', 'Renderizar gráficos 2D', 'Criar bancos de dados', 'Gerar APIs'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Experiência imersiva significa?', options: ['Usuário sente presença no ambiente virtual', 'Usuário assiste um vídeo normal', 'Usuário navega em web', 'Usuário escreve código'], order_index: 4, correct_index: 0 }
    ]
  }
},

'32': {
  id: '32',
  constellation_id: '5',
  title: 'Modelagem 3D para AR/VR',
  video_iframe_url: 'https://www.youtube.com/embed/xCRg7yJpPvs',
  article_md: `# Modelagem 3D para AR/VR

## Introdução

Aprenda a criar objetos 3D que podem ser usados em ambientes AR e VR.

## Conteúdo

- Software de modelagem: Blender, Maya
- Texturização e iluminação
- Exportação de modelos para engines
- Otimização de performance`,
  locked: false,
  quiz: {
    id: 'quiz-32',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Qual software é popular para modelagem 3D?', options: ['Blender', 'Word', 'Excel', 'PowerPoint'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Por que otimizar modelos 3D?', options: ['Para performance em AR/VR', 'Para imprimir', 'Para banco de dados', 'Para SEO'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Texturização serve para?', options: ['Adicionar aparência realista aos modelos', 'Criar código', 'Gerar logs', 'Treinar ML'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Iluminação 3D influencia em?', options: ['Percepção de profundidade e realismo', 'Tamanho do arquivo', 'Velocidade do processador', 'Rede'], order_index: 4, correct_index: 0 }
    ]
  }
},

'33': {
  id: '33',
  constellation_id: '5',
  title: 'Desenvolvimento em Unity para AR/VR',
  video_iframe_url: 'https://www.youtube.com/embed/IlKaB1etrik',
  article_md: `# Desenvolvimento em Unity para AR/VR

## Introdução

Aprenda a programar experiências interativas usando Unity para AR e VR.

## Conteúdo

- C# para AR/VR
- Física e colisões
- Animações e interações
- Build para dispositivos`,
  locked: true,
  quiz: {
    id: 'quiz-33',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Qual linguagem é usada em Unity?', options: ['C#', 'Python', 'JavaScript', 'PHP'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Física em AR/VR serve para?', options: ['Simular movimento e colisões', 'Desenhar UI', 'Treinar IA', 'Monitorar logs'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Build para dispositivos significa?', options: ['Exportar app para hardware específico', 'Criar gráficos', 'Treinar modelos', 'Gerar PDF'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Animações em AR/VR ajudam a?', options: ['Melhorar interatividade e imersão', 'Gerar logs', 'Salvar dados', 'Monitorar rede'], order_index: 4, correct_index: 0 }
    ]
  }
},

'34': {
  id: '34',
  constellation_id: '5',
  title: 'Experiência do Usuário em AR/VR',
  video_iframe_url: 'https://www.youtube.com/embed/7Xc-8WkKuvk',
  article_md: `# Experiência do Usuário em AR/VR

## Introdução

Aprenda a criar experiências que sejam intuitivas, confortáveis e imersivas.

## Conteúdo

- Navegação e interação natural
- Conforto visual e prevenção de enjoo
- Feedback visual e sonoro
- Testes com usuários`,
  locked: true,
  quiz: {
    id: 'quiz-34',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'O que é importante em UX para AR/VR?', options: ['Intuitividade e conforto', 'Somente gráficos', 'Somente velocidade', 'Só hardware'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Feedback sonoro ajuda a?', options: ['Melhorar interação e imersão', 'Desenhar modelos', 'Treinar IA', 'Gerar logs'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Prevenção de enjoo é chamada de?', options: ['Conforto visual', 'FPS', 'Latency', 'Build'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Testes com usuários servem para?', options: ['Validar e melhorar a experiência', 'Gerar logs', 'Criar banco de dados', 'Treinar ML'], order_index: 4, correct_index: 0 }
    ]
  }
},

'35': {
  id: '35',
  constellation_id: '5',
  title: 'AR/VR Avançado: Interações e Gamificação',
  video_iframe_url: 'https://www.youtube.com/embed/fq4N0hgOWzU',
  article_md: `# AR/VR Avançado: Interações e Gamificação

## Introdução

Aprenda técnicas avançadas para engajar usuários em experiências imersivas.

## Conteúdo

- Gamificação em ambientes AR/VR
- Interações com gestos e sensores
- Realidade mista (MR)
- Métricas de engajamento`,
  locked: true,
  quiz: {
    id: 'quiz-35',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Gamificação em AR/VR serve para?', options: ['Aumentar engajamento e motivação', 'Reduzir FPS', 'Salvar logs', 'Criar banco'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Interações com gestos usam?', options: ['Sensores e tracking', 'Só teclado', 'Só mouse', 'Banco de dados'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Realidade mista combina?', options: ['Mundo real + virtual', 'Só AR', 'Só VR', 'Só 2D'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Métricas de engajamento medem?', options: ['Como o usuário interage e se envolve', 'FPS', 'Tamanho de arquivo', 'Banco de dados'], order_index: 4, correct_index: 0 }
    ]
  }
},

// Constelação 6 – Engenheiro de Robótica
'36': {
  id: '36',
  constellation_id: '6',
  title: 'Robótica',
  video_iframe_url: 'https://www.youtube.com/embed/NRj6gzah7JA?si=djIwwQFFv0YowYIm',
  article_md: `# Fundamentos de Robótica

## Introdução

Conheça os princípios básicos da robótica, tipos de robôs e aplicações na indústria e no dia a dia.

## Conteúdo

- Tipos de robôs: industrial, móvel, humanoide
- Sensores e atuadores
- Cinemática e dinâmica
- Controle e automação`,
  locked: false,
  quiz: {
    id: 'quiz-36',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Qual tipo de robô é usado na indústria?', options: ['Robô industrial', 'Robô doméstico', 'Humanoide', 'Drone'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Sensores servem para?', options: ['Captar informações do ambiente', 'Desenhar gráficos', 'Gerar logs', 'Compilar código'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'O que é cinemática?', options: ['Estudo do movimento dos robôs', 'Controle de temperatura', 'Banco de dados', 'Compilador'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Atuadores são usados para?', options: ['Movimentar partes do robô', 'Renderizar gráficos', 'Treinar ML', 'Monitorar rede'], order_index: 4, correct_index: 0 }
    ]
  }
},

'37': {
  id: '37',
  constellation_id: '6',
  title: 'Programação de Robôs com Python',
  video_iframe_url: 'https://www.youtube.com/embed/dhD4JQTZt_Q',
  article_md: `# Programação de Robôs com Python

## Introdução

Aprenda a controlar robôs usando Python e bibliotecas específicas.

## Conteúdo

- Bibliotecas: ROS, PyRobot
- Controle de motores e sensores
- Automação de tarefas
- Simulação de robôs`,
  locked: false,
  quiz: {
    id: 'quiz-37',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Qual biblioteca é usada para robótica?', options: ['ROS', 'React', 'TensorFlow', 'Unity'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Python controla robôs servindo para?', options: ['Programar movimentos e tarefas', 'Editar fotos', 'Criar banco', 'Gerar PDF'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Simulação de robôs é importante para?', options: ['Testar sem hardware real', 'Compilar código', 'Enviar e-mails', 'Design gráfico'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Motores nos robôs são controlados por?', options: ['Python e ROS', 'Photoshop', 'Excel', 'SQL'], order_index: 4, correct_index: 0 }
    ]
  }
},

'38': {
  id: '38',
  constellation_id: '6',
  title: 'Sensores e Percepção Robótica',
  video_iframe_url: 'https://www.youtube.com/embed/ljTzXz9gCks',
  article_md: `# Sensores e Percepção Robótica

## Introdução

Aprenda como os robôs "veem" e entendem o ambiente.

## Conteúdo

- Sensores: câmeras, LIDAR, ultrassônicos
- Fusão de dados de sensores
- Localização e mapeamento (SLAM)
- Detecção de obstáculos`,
  locked: true,
  quiz: {
    id: 'quiz-38',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Qual sensor é usado para mapeamento?', options: ['LIDAR', 'Teclado', 'GPU', 'SSD'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'SLAM significa?', options: ['Simultaneous Localization and Mapping', 'System Log And Monitor', 'Sensor Line And Motion', 'Signal Lab Analysis'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Detecção de obstáculos serve para?', options: ['Evitar colisões', 'Renderizar gráficos', 'Salvar dados', 'Treinar ML'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Fusão de sensores ajuda a?', options: ['Melhorar percepção do robô', 'Gerar PDF', 'Criar banco', 'Editar fotos'], order_index: 4, correct_index: 0 }
    ]
  }
},

'39': {
  id: '39',
  constellation_id: '6',
  title: 'Controle e Automação de Robôs',
  video_iframe_url: 'https://www.youtube.com/embed/9YkUCxMyXJI',
  article_md: `# Controle e Automação de Robôs

## Introdução

Aprenda técnicas avançadas para controlar robôs e automatizar tarefas complexas.

## Conteúdo

- PID Controllers
- Controle baseado em eventos
- Automação de processos
- Integração com sistemas externos`,
  locked: true,
  quiz: {
    id: 'quiz-39',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'O que é PID Controller?', options: ['Controlador proporcional-integral-derivativo', 'Banco de dados', 'GPU', 'Framework'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Controle baseado em eventos serve para?', options: ['Reagir a mudanças rapidamente', 'Desenhar gráficos', 'Gerar logs', 'Compilar código'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Automação de processos ajuda a?', options: ['Reduzir intervenção humana', 'Criar PDF', 'Editar fotos', 'Treinar ML'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Integração com sistemas externos é importante para?', options: ['Conectar robôs a softwares e sensores', 'Gerar logs', 'Treinar IA', 'Banco de dados'], order_index: 4, correct_index: 0 }
    ]
  }
},

'40': {
  id: '40',
  constellation_id: '6',
  title: 'Robótica Avançada e Inteligência Artificial',
  video_iframe_url: 'https://www.youtube.com/embed/4Hyt3GfPrt4',
  article_md: `# Robótica Avançada e Inteligência Artificial

## Introdução

Aprenda como aplicar IA em robótica para criar robôs inteligentes e adaptativos.

## Conteúdo

- Planejamento de movimento com IA
- Machine Learning em robôs
- Robôs autônomos
- Aprendizado por reforço para robôs`,
  locked: true,
  quiz: {
    id: 'quiz-40',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Machine Learning em robôs serve para?', options: ['Aprender e adaptar comportamentos', 'Gerar logs', 'Criar PDF', 'Editar fotos'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Aprendizado por reforço permite?', options: ['Robô aprender por tentativa e erro', 'Renderizar gráficos', 'Salvar dados', 'Compilar código'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Planejamento de movimento com IA é importante para?', options: ['Trajetórias eficientes e seguras', 'Criar gráficos', 'Treinar usuários', 'Banco de dados'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Robôs autônomos significam?', options: ['Tomam decisões sem intervenção humana', 'Renderizam gráficos', 'Geram logs', 'Treinam IA'], order_index: 4, correct_index: 0 }
    ]
  }
},

// Constelação 7 – Engenheiro de IoT
'41': {
  id: '41',
  constellation_id: '7',
  title: 'Internet of Things',
  video_iframe_url: 'https://www.youtube.com/embed/_AlcRoqS65E',
  article_md: `# Fundamentos de IoT

## Introdução

Aprenda o que é Internet das Coisas e como ela conecta dispositivos ao mundo digital.

## Conteúdo

- Conceito de IoT
- Arquitetura de sistemas IoT
- Protocolos de comunicação: MQTT, CoAP
- Sensores e atuadores`,
  locked: false,
  quiz: {
    id: 'quiz-41',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'O que significa IoT?', options: ['Internet das Coisas', 'Internet of Tools', 'Internal of Technology', 'Input on Time'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'MQTT é um protocolo usado para?', options: ['Comunicação entre dispositivos IoT', 'Criar gráficos', 'Armazenar dados em Excel', 'Compilar código'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Sensores servem para?', options: ['Captar informações do ambiente', 'Renderizar gráficos', 'Gerar PDFs', 'Treinar ML'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Atuadores servem para?', options: ['Executar ações físicas', 'Editar imagens', 'Salvar logs', 'Criar banco'], order_index: 4, correct_index: 0 }
    ]
  }
},

'42': {
  id: '42',
  constellation_id: '7',
  title: 'Programação de Dispositivos IoT',
  video_iframe_url: 'https://www.youtube.com/embed/8oT-oRKiN5c',
  article_md: `# Programação de Dispositivos IoT

## Introdução

Aprenda a programar microcontroladores e placas IoT usando Python e C++.

## Conteúdo

- Microcontroladores: Arduino, ESP32
- Linguagens: Python, C++
- Comunicação via Wi-Fi e Bluetooth
- Coleta de dados de sensores`,
  locked: true,
  quiz: {
    id: 'quiz-42',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Qual placa é usada em IoT?', options: ['ESP32', 'Raspberry Pi', 'GPU', 'Monitor'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Linguagens usadas em IoT incluem?', options: ['Python e C++', 'HTML e CSS', 'SQL e NoSQL', 'JavaScript e PHP'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Comunicação sem fio pode ser feita por?', options: ['Wi-Fi e Bluetooth', 'Ethernet apenas', 'USB', 'HDMI'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Coleta de dados é feita por?', options: ['Sensores', 'GPU', 'Banco de dados', 'Editor de texto'], order_index: 4, correct_index: 0 }
    ]
  }
},

'43': {
  id: '43',
  constellation_id: '7',
  title: 'Redes e Protocolos para IoT',
  video_iframe_url: 'https://www.youtube.com/embed/FNwA_1L3k9s',
  article_md: `# Redes e Protocolos para IoT

## Introdução

Aprenda como dispositivos IoT se conectam e trocam dados.

## Conteúdo

- Protocolos: MQTT, CoAP, HTTP
- Redes: LAN, Wi-Fi, LPWAN
- Segurança em redes IoT
- Gateway e cloud integration`,
  locked: true,
  quiz: {
    id: 'quiz-43',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Qual protocolo é leve para IoT?', options: ['MQTT', 'FTP', 'SMTP', 'POP3'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'LPWAN é usado para?', options: ['Comunicação de longa distância com baixo consumo', 'Renderizar gráficos', 'Salvar logs', 'Treinar ML'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Segurança em IoT envolve?', options: ['Criptografia e autenticação', 'Cores e fontes', 'Design UX', 'Monitoramento de CPU'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Gateway conecta?', options: ['Dispositivos IoT à nuvem', 'Monitores à CPU', 'Sensores ao Excel', 'Usuário à impressora'], order_index: 4, correct_index: 0 }
    ]
  }
},

'44': {
  id: '44',
  constellation_id: '7',
  title: 'Plataformas IoT e Cloud',
  video_iframe_url: 'https://www.youtube.com/embed/d6rK7QbPz6I',
  article_md: `# Plataformas IoT e Cloud

## Introdução

Conheça as principais plataformas que permitem gerenciar dispositivos IoT e seus dados na nuvem.

## Conteúdo

- Plataformas: AWS IoT, Azure IoT, Google Cloud IoT
- Gerenciamento de dispositivos
- Dashboard e monitoramento
- Processamento e análise de dados`,
  locked: true,
  quiz: {
    id: 'quiz-44',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Qual plataforma é da Amazon?', options: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'IBM Cloud'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Dashboards em IoT servem para?', options: ['Monitorar dispositivos', 'Editar vídeos', 'Renderizar gráficos', 'Criar PDFs'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Gerenciamento de dispositivos inclui?', options: ['Atualizações e configuração remota', 'Treinar IA', 'Banco de dados', 'Compilar código'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Processamento de dados é feito em?', options: ['Cloud ou Edge', 'Local storage', 'Notebook', 'Excel'], order_index: 4, correct_index: 0 }
    ]
  }
},

'45': {
  id: '45',
  constellation_id: '7',
  title: 'Segurança e Privacidade em IoT',
  video_iframe_url: 'https://www.youtube.com/embed/2S3Sfz9H4k8',
  article_md: `# Segurança e Privacidade em IoT

## Introdução

Aprenda como proteger dispositivos e dados em ambientes IoT.

## Conteúdo

- Criptografia e autenticação
- Atualizações seguras
- Proteção contra ataques
- Privacidade de dados`,
  locked: true,
  quiz: {
    id: 'quiz-45',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Criptografia serve para?', options: ['Proteger dados', 'Salvar logs', 'Editar fotos', 'Renderizar gráficos'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Autenticação em IoT é importante para?', options: ['Garantir acesso autorizado', 'Desenhar gráficos', 'Criar PDFs', 'Compilar código'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Atualizações seguras ajudam a?', options: ['Evitar vulnerabilidades', 'Gerar logs', 'Treinar IA', 'Criar banco'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Privacidade de dados significa?', options: ['Proteger informações pessoais', 'Editar fotos', 'Renderizar gráficos', 'Treinar ML'], order_index: 4, correct_index: 0 }
    ]
  }
},

// Constelação 8 – Especialista em Computação Quântica
'51': {
  id: '51',
  constellation_id: '8',
  title: 'Computação Quântica',
  video_iframe_url: 'https://www.youtube.com/embed/JhHMJCUmq28',
  article_md: `# Fundamentos de Computação Quântica

## Introdução

Aprenda os conceitos básicos da computação quântica, incluindo qubits e superposição.

## Conteúdo

- O que é computação quântica
- Qubits e superposição
- Entanglement e interferência quântica
- Diferenças entre computação clássica e quântica`,
  locked: false,
  quiz: {
    id: 'quiz-51',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'O que é um qubit?', options: ['Unidade de informação quântica', 'Processador clássico', 'Banco de dados', 'Linguagem de programação'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Superposição significa?', options: ['Qubit pode estar em múltiplos estados ao mesmo tempo', 'Qubit é ligado/desligado', 'Banco de dados criptografado', 'Código paralelo'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Entanglement é?', options: ['Entrelaçamento de qubits', 'Compilação de código', 'Rede de computadores', 'Renderização 3D'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Computação quântica é diferente da clássica porque?', options: ['Explora superposição e entanglement', 'Usa mais memória RAM', 'Executa mais rápido todo programa', 'Não precisa de eletricidade'], order_index: 4, correct_index: 0 }
    ]
  }
},

'52': {
  id: '52',
  constellation_id: '8',
  title: 'Programação Quântica com Qiskit',
  video_iframe_url: 'https://www.youtube.com/embed/5U3rVLMcG-I',
  article_md: `# Programação Quântica com Qiskit

## Introdução

Aprenda a programar computadores quânticos usando a biblioteca Qiskit da IBM.

## Conteúdo

- Introdução ao Qiskit
- Criando circuitos quânticos
- Portas lógicas quânticas
- Simuladores e execução em hardware real`,
  locked: true,
  quiz: {
    id: 'quiz-52',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Qiskit é?', options: ['Biblioteca de programação quântica', 'Banco de dados', 'Sistema operacional', 'IDE para Python'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Circuitos quânticos servem para?', options: ['Executar operações quânticas', 'Armazenar dados', 'Renderizar gráficos', 'Compilar código'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Portas lógicas quânticas fazem?', options: ['Manipulam qubits', 'Editam imagens', 'Geram PDFs', 'Salvam logs'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Simuladores quânticos permitem?', options: ['Testar circuitos sem hardware real', 'Treinar IA', 'Gerar relatórios', 'Configurar rede Wi-Fi'], order_index: 4, correct_index: 0 }
    ]
  }
},

'53': {
  id: '53',
  constellation_id: '8',
  title: 'Algoritmos Quânticos',
  video_iframe_url: 'https://www.youtube.com/embed/1j0FVhXzrZg',
  article_md: `# Algoritmos Quânticos

## Introdução

Aprenda sobre algoritmos quânticos que superam suas contrapartes clássicas.

## Conteúdo

- Algoritmo de Grover
- Algoritmo de Shor
- Busca e fatoração quântica
- Aplicações em criptografia e otimização`,
  locked: true,
  quiz: {
    id: 'quiz-53',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Algoritmo de Grover é usado para?', options: ['Busca em base de dados', 'Fatoração de números', 'Renderizar gráficos', 'Treinar ML'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Algoritmo de Shor é usado para?', options: ['Fatoração de números grandes', 'Compressão de dados', 'Editar imagens', 'Simular circuitos'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Algoritmos quânticos têm vantagem sobre clássicos porque?', options: ['Exploram superposição e entanglement', 'Usam GPU', 'Ocupa menos memória', 'Roda em qualquer PC'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Aplicações incluem?', options: ['Criptografia e otimização', 'Design UX', 'Banco de dados', 'IoT'], order_index: 4, correct_index: 0 }
    ]
  }
},

'54': {
  id: '54',
  constellation_id: '8',
  title: 'Simulação Quântica e Hardware',
  video_iframe_url: 'https://www.youtube.com/embed/G3J3O_o6J6Q',
  article_md: `# Simulação Quântica e Hardware

## Introdução

Aprenda a testar algoritmos quânticos e explorar diferentes tipos de hardware.

## Conteúdo

- Simuladores quânticos
- Computadores quânticos baseados em supercondutores
- Trapped ions
- Comparação com hardware clássico`,
  locked: true,
  quiz: {
    id: 'quiz-54',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Trapped ions são?', options: ['Qubits físicos aprisionados por campos eletromagnéticos', 'Simuladores de CPU', 'Redes IoT', 'Linguagem de programação'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Hardware quântico pode ser?', options: ['Supercondutor ou íons aprisionados', 'GPU ou CPU', 'Notebook ou tablet', 'IoT devices'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Simuladores quânticos servem para?', options: ['Testar algoritmos sem hardware físico', 'Renderizar vídeos', 'Treinar ML', 'Gerar dashboards'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Comparação com hardware clássico mostra?', options: ['Algoritmos quânticos podem ser exponencialmente mais rápidos', 'Menor consumo de energia', 'Mais barato', 'Não há diferença'], order_index: 4, correct_index: 0 }
    ]
  }
},

'55': {
  id: '55',
  constellation_id: '8',
  title: 'Criptografia e Computação Quântica',
  video_iframe_url: 'https://www.youtube.com/embed/0aYD3Xc2dtc',
  article_md: `# Criptografia e Computação Quântica

## Introdução

Entenda os impactos da computação quântica na segurança da informação.

## Conteúdo

- Criptografia clássica vs quântica
- Quantum key distribution (QKD)
- Algoritmos quânticos de quebra de criptografia
- Preparação para segurança pós-quântica`,
  locked: true,
  quiz: {
    id: 'quiz-55',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'QKD serve para?', options: ['Distribuir chaves quânticas com segurança', 'Renderizar gráficos', 'Treinar ML', 'Salvar logs'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Computação quântica ameaça?', options: ['Criptografia clássica', 'IoT devices', 'UX Design', 'Banco de dados'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Preparação pós-quântica inclui?', options: ['Novos algoritmos criptográficos', 'Simulação de ML', 'Redes IoT', 'Web design'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Criptografia quântica explora?', options: ['Propriedades de qubits', 'GPU', 'Sensores IoT', 'Hooks React'], order_index: 4, correct_index: 0 }
    ]
  }
},

// Constelação 9 – Especialista em Gêmeos Digitais
'61': {
  id: '61',
  constellation_id: '9',
  title: 'Gêmeos Digitais',
  video_iframe_url: 'https://www.youtube.com/embed/zj_Fow9lvc0',
  article_md: `# Introdução a Gêmeos Digitais

## O que são Gêmeos Digitais?

Gêmeos Digitais são representações virtuais de objetos, processos ou sistemas reais.

## Conteúdo

- Conceito e aplicações
- Diferença entre simulação e gêmeo digital
- Benefícios para indústria 4.0 e IoT
- Ferramentas básicas`,
  locked: false,
  quiz: {
    id: 'quiz-61',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Gêmeos digitais são?', options: ['Representações virtuais de sistemas reais', 'Jogos digitais', 'Redes IoT', 'Frameworks web'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Aplicações típicas incluem?', options: ['Indústria 4.0 e monitoramento', 'UX design', 'Banco de dados', 'Machine Learning'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Diferença entre simulação e gêmeo digital?', options: ['Gêmeo é conectado ao sistema real', 'Simulação é mais rápida', 'Não há diferença', 'Simulação é quântica'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Ferramentas básicas incluem?', options: ['Plataformas CAD e IoT', 'React e Angular', 'Docker e Kubernetes', 'TensorFlow e PyTorch'], order_index: 4, correct_index: 0 }
    ]
  }
},

'62': {
  id: '62',
  constellation_id: '9',
  title: 'Modelagem 3D e CAD para Gêmeos Digitais',
  video_iframe_url: 'https://www.youtube.com/embed/Q7AOvWpIVHU',
  article_md: `# Modelagem 3D e CAD para Gêmeos Digitais

## Introdução

Aprenda a criar modelos digitais precisos para representar objetos reais.

## Conteúdo

- Ferramentas CAD
- Modelagem paramétrica
- Texturização e simulação
- Exportação para plataformas digitais`,
  locked: false,
  quiz: {
    id: 'quiz-62',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'CAD significa?', options: ['Computer-Aided Design', 'Computer Algorithm Data', 'Centralized App Development', 'Cloud Analysis Dashboard'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Modelagem paramétrica é?', options: ['Modelos ajustáveis por parâmetros', 'Modelos fixos', 'Simulação física', 'Renderização gráfica'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Exportação serve para?', options: ['Levar modelos para plataformas digitais', 'Treinar ML', 'Gerar dashboards', 'Monitorar sensores IoT'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Texturização ajuda a?', options: ['Aumentar realismo do modelo digital', 'Acelerar algoritmo', 'Salvar dados', 'Criar APIs'], order_index: 4, correct_index: 0 }
    ]
  }
},

'63': {
  id: '63',
  constellation_id: '9',
  title: 'Integração com IoT e Sensores',
  video_iframe_url: 'https://www.youtube.com/embed/IhxzMv4N8HM',
  article_md: `# Integração com IoT e Sensores

## Introdução

Aprenda a conectar gêmeos digitais com sensores e dispositivos IoT para monitoramento em tempo real.

## Conteúdo

- Protocolos IoT
- Coleta de dados
- Atualização de modelos digitais
- Alertas e monitoramento`,
  locked: false,
  quiz: {
    id: 'quiz-63',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Gêmeos digitais podem se integrar a?', options: ['Sensores e IoT', 'APIs web', 'UX design', 'GPU'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Protocolos IoT incluem?', options: ['MQTT e CoAP', 'HTTP e CSS', 'TCP/IP e JSON', 'WebGL e Three.js'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Atualização de modelos digitais serve para?', options: ['Refletir mudanças no sistema real', 'Renderizar gráficos', 'Salvar logs', 'Treinar ML'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Alertas podem ser usados para?', options: ['Monitoramento em tempo real', 'UX testing', 'Docker', 'Compilação'], order_index: 4, correct_index: 0 }
    ]
  }
},

'64': {
  id: '64',
  constellation_id: '9',
  title: 'Simulação e Otimização de Processos',
  video_iframe_url: 'https://www.youtube.com/embed/LlGf-9jQWXE',
  article_md: `# Simulação e Otimização de Processos

## Introdução

Aprenda a simular processos industriais e otimizar operações usando gêmeos digitais.

## Conteúdo

- Modelagem de processos
- Simulação dinâmica
- Análise de performance
- Otimização de recursos`,
  locked: true,
  quiz: {
    id: 'quiz-64',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Simulação dinâmica é?', options: ['Executar processos virtualmente em tempo real', 'Renderizar imagens', 'Treinar modelos ML', 'Criar dashboards'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Otimização de recursos ajuda a?', options: ['Melhorar eficiência e reduzir custos', 'Aumentar RAM', 'Gerar gráficos', 'Configurar rede'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Modelagem de processos envolve?', options: ['Descrever etapas do sistema real', 'Criar qubits', 'Programar em Python', 'Gerar PDFs'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Análise de performance serve para?', options: ['Identificar gargalos e melhorias', 'Salvar logs', 'Editar imagens', 'Treinar ML'], order_index: 4, correct_index: 0 }
    ]
  }
},

'65': {
  id: '65',
  constellation_id: '9',
  title: 'Monitoramento e Manutenção Preditiva',
  video_iframe_url: 'https://www.youtube.com/embed/R9K5cA1QoD4',
  article_md: `# Monitoramento e Manutenção Preditiva

## Introdução

Aprenda a usar gêmeos digitais para prever falhas e planejar manutenção de sistemas.

## Conteúdo

- Monitoramento em tempo real
- Análise de dados históricos
- Modelos preditivos
- Planejamento de manutenção preventiva`,
  locked: true,
  quiz: {
    id: 'quiz-65',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Manutenção preditiva serve para?', options: ['Prever falhas e reduzir paradas', 'Renderizar 3D', 'Treinar IA', 'Criar APIs'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Monitoramento em tempo real ajuda a?', options: ['Detectar problemas rapidamente', 'Otimizar gráficos', 'Salvar PDFs', 'Criar dashboards'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Modelos preditivos usam?', options: ['Dados históricos e algoritmos', 'GPU', 'Sensores 3D', 'HTML e CSS'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Planejamento preventivo reduz?', options: ['Custos e paradas não planejadas', 'RAM usada', 'Complexidade de código', 'Tempo de deploy'], order_index: 4, correct_index: 0 }
    ]
  }
},

// Constelação 10 – Especialista em Blockchain
'66': {
  id: '66',
  constellation_id: '10',
  title: 'Blockchain',
  video_iframe_url: 'https://www.youtube.com/embed/SSo_EIwHSd4',
  article_md: `# Introdução ao Blockchain

## O que é Blockchain?

Blockchain é um livro-razão digital descentralizado que registra transações de forma segura e transparente.

## Conteúdo

- Conceitos básicos de blockchain
- Blocos, nós e mineração
- Diferença entre centralizado e descentralizado
- Aplicações práticas`,
  locked: false,
  quiz: {
    id: 'quiz-66',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Blockchain é?', options: ['Livro-razão digital descentralizado', 'Banco de dados tradicional', 'Framework web', 'Sistema operacional'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Componentes do blockchain incluem?', options: ['Blocos, nós e mineração', 'Views, States e Hooks', 'Pods e Services', 'Sensores IoT'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Blockchain é seguro porque?', options: ['É descentralizado e imutável', 'Tem firewall', 'Usa CSS', 'Executa ML'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Aplicações incluem?', options: ['Criptomoedas, contratos inteligentes e supply chain', 'UX design', 'Machine Learning', 'Simulação 3D'], order_index: 4, correct_index: 0 }
    ]
  }
},

'67': {
  id: '67',
  constellation_id: '10',
  title: 'Criptomoedas e Tokens',
  video_iframe_url: 'https://www.youtube.com/embed/bBC-nXj3Ng4',
  article_md: `# Criptomoedas e Tokens

## Introdução

Aprenda os conceitos de moedas digitais, tokens e como eles são usados no ecossistema blockchain.

## Conteúdo

- Diferença entre criptomoeda e token
- Bitcoin e Ethereum
- Stablecoins
- Exchanges e wallets`,
  locked: true,
  quiz: {
    id: 'quiz-67',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Bitcoin é?', options: ['Criptomoeda', 'Token ERC20', 'Framework web', 'Blockchain privado'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Tokens podem representar?', options: ['Ativos digitais, utilidade ou governança', 'Somente moedas', 'Sensores IoT', 'APIs REST'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Stablecoins são?', options: ['Moedas digitais com valor estável', 'Moedas voláteis', 'Bancos', 'Sensores 3D'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Wallets servem para?', options: ['Armazenar criptomoedas e tokens', 'Renderizar gráficos', 'Treinar ML', 'Criar APIs'], order_index: 4, correct_index: 0 }
    ]
  }
},

'68': {
  id: '68',
  constellation_id: '10',
  title: 'Contratos Inteligentes (Smart Contracts)',
  video_iframe_url: 'https://www.youtube.com/embed/ZE2HxTmxfrI',
  article_md: `# Contratos Inteligentes

## Introdução

Smart Contracts são programas autoexecutáveis que rodam em blockchains.

## Conteúdo

- Conceito de contrato inteligente
- Plataformas: Ethereum, Solana
- Linguagens: Solidity, Rust
- Casos de uso`,
  locked: true,
  quiz: {
    id: 'quiz-68',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Smart Contracts são?', options: ['Programas autoexecutáveis', 'Banco de dados', 'Sensor IoT', 'Aplicativo mobile'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Principais plataformas incluem?', options: ['Ethereum e Solana', 'React e Vue', 'AWS e Azure', 'Docker e Kubernetes'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Linguagens comuns incluem?', options: ['Solidity e Rust', 'Python e R', 'JavaScript e CSS', 'C++ e MATLAB'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Casos de uso incluem?', options: ['DeFi, NFTs e supply chain', 'UX design', 'Simulação 3D', 'ML deployment'], order_index: 4, correct_index: 0 }
    ]
  }
},

'69': {
  id: '69',
  constellation_id: '10',
  title: 'DeFi e Finanças Descentralizadas',
  video_iframe_url: 'https://www.youtube.com/embed/6WG7D47tGb0',
  article_md: `# DeFi e Finanças Descentralizadas

## Introdução

Aprenda como criar e utilizar sistemas financeiros descentralizados.

## Conteúdo

- Conceito de DeFi
- Exchanges descentralizadas (DEX)
- Liquidity Pools
- Yield Farming`,
  locked: true,
  quiz: {
    id: 'quiz-69',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'DeFi significa?', options: ['Finanças Descentralizadas', 'Banco Digital', 'Token ERC20', 'Blockchain privado'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'DEX são?', options: ['Exchanges descentralizadas', 'Corretoras centralizadas', 'Carteiras digitais', 'APIs REST'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Liquidity Pools permitem?', options: ['Fornecer liquidez para tokens', 'Renderizar gráficos', 'Treinar ML', 'Criar contratos'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Yield Farming é?', options: ['Ganhar recompensas fornecendo liquidez', 'Mineração de Bitcoin', 'Simulação 3D', 'Criação de NFTs'], order_index: 4, correct_index: 0 }
    ]
  }
},

'70': {
  id: '70',
  constellation_id: '10',
  title: 'Segurança e Auditoria em Blockchain',
  video_iframe_url: 'https://www.youtube.com/embed/6WCb3UGp5Ro',
  article_md: `# Segurança e Auditoria em Blockchain

## Introdução

Aprenda práticas essenciais de segurança para proteger sistemas e contratos blockchain.

## Conteúdo

- Ataques comuns e vulnerabilidades
- Boas práticas de desenvolvimento seguro
- Auditoria de contratos inteligentes
- Monitoramento de transações suspeitas`,
  locked: true,
  quiz: {
    id: 'quiz-70',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Segurança em blockchain envolve?', options: ['Proteger sistemas e contratos', 'Renderizar gráficos', 'Treinar ML', 'Criar APIs'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Ataques comuns incluem?', options: ['Reentrancy e Sybil attacks', 'XSS e SQL Injection', 'Buffer Overflow', 'Phishing'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Auditoria serve para?', options: ['Verificar vulnerabilidades de smart contracts', 'Gerar dashboards', 'Criar APIs', 'Renderizar 3D'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Monitoramento de transações ajuda a?', options: ['Detectar atividades suspeitas', 'Aumentar FPS', 'Criar gráficos', 'Treinar ML'], order_index: 4, correct_index: 0 }
    ]
  }
},

// Constelação 11 – Especialista em Energia Inteligente
'71': {
  id: '71',
  constellation_id: '11',
  title: 'Energia Inteligente',
  video_iframe_url: 'https://www.youtube.com/embed/lZ0SiwYUPsg',
  article_md: `# Fundamentos de Energia Inteligente

## Introdução

Energia Inteligente combina tecnologias digitais com sistemas energéticos para eficiência e sustentabilidade.

## Conteúdo

- Conceito de smart grids
- Sensores e medidores inteligentes
- Otimização de consumo energético
- Integração com energias renováveis`,
  locked: false,
  quiz: {
    id: 'quiz-71',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Smart grids são?', options: ['Redes elétricas inteligentes', 'Bancos de energia', 'Sensores IoT', 'Plataformas web'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Medidores inteligentes permitem?', options: ['Monitoramento e controle do consumo', 'Renderizar gráficos', 'Treinar ML', 'Criar contratos'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Integração com renováveis inclui?', options: ['Solar, eólica e baterias', 'Gasolina e diesel', 'Rede 4G', 'NFTs'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Benefício principal?', options: ['Eficiência e sustentabilidade', 'Mais consumo', 'Renderizar gráficos', 'Criar contratos'], order_index: 4, correct_index: 0 }
    ]
  }
},

'72': {
  id: '72',
  constellation_id: '11',
  title: 'IoT para Energia',
  video_iframe_url: 'https://www.youtube.com/embed/HbratO4RTDY',
  article_md: `# IoT para Energia

## Introdução

IoT permite monitorar, automatizar e otimizar sistemas energéticos em tempo real.

## Conteúdo

- Sensores conectados
- Automação de dispositivos
- Coleta de dados em tempo real
- Integração com plataformas de análise`,
  locked: false,
  quiz: {
    id: 'quiz-72',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'IoT em energia é usado para?', options: ['Monitoramento e automação', 'Criar NFTs', 'Renderizar 3D', 'Treinar ML'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Sensores conectados permitem?', options: ['Coleta de dados em tempo real', 'Reduzir FPS', 'Gerar dashboards', 'Criar contratos'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Automação de dispositivos ajuda a?', options: ['Otimizar consumo energético', 'Renderizar gráficos', 'Treinar ML', 'Criar APIs'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Integração com análise permite?', options: ['Detectar padrões e previsões', 'Aumentar consumo', 'Criar NFTs', 'Renderizar 3D'], order_index: 4, correct_index: 0 }
    ]
  }
},

'73': {
  id: '73',
  constellation_id: '11',
  title: 'Gestão de Smart Grids',
  video_iframe_url: 'https://www.youtube.com/embed/FxVpXfxrF10',
  article_md: `# Gestão de Smart Grids

## Introdução

Aprenda a planejar, operar e otimizar redes elétricas inteligentes.

## Conteúdo

- Balanceamento de carga
- Previsão de demanda
- Distribuição eficiente
- Ferramentas de monitoramento`,
  locked: true,
  quiz: {
    id: 'quiz-73',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Balanceamento de carga serve para?', options: ['Evitar sobrecarga e desperdício', 'Renderizar gráficos', 'Treinar ML', 'Criar NFTs'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Previsão de demanda ajuda a?', options: ['Planejar recursos e consumo', 'Aumentar consumo', 'Renderizar 3D', 'Criar contratos'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Distribuição eficiente significa?', options: ['Reduzir perdas e otimizar energia', 'Criar dashboards', 'Treinar ML', 'Renderizar 3D'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Ferramentas de monitoramento permitem?', options: ['Controlar e analisar rede em tempo real', 'Aumentar consumo', 'Treinar ML', 'Criar NFTs'], order_index: 4, correct_index: 0 }
    ]
  }
},

'74': {
  id: '74',
  constellation_id: '11',
  title: 'Energia Renovável Integrada',
  video_iframe_url: 'https://www.youtube.com/embed/qw5l7w3uF7M',
  article_md: `# Energia Renovável Integrada

## Introdução

Aprenda como integrar fontes de energia renováveis em sistemas inteligentes.

## Conteúdo

- Solar, eólica e hidrelétrica
- Armazenamento em baterias
- Conexão com smart grids
- Otimização do consumo`,
  locked: true,
  quiz: {
    id: 'quiz-74',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Fontes renováveis incluem?', options: ['Solar, eólica e hidrelétrica', 'Gasolina e diesel', 'NFTs', 'Sensores IoT'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Armazenamento em baterias serve para?', options: ['Guardar energia e liberar quando necessário', 'Aumentar consumo', 'Treinar ML', 'Renderizar 3D'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Conexão com smart grids permite?', options: ['Distribuir energia eficientemente', 'Criar NFTs', 'Renderizar gráficos', 'Treinar ML'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Otimização do consumo visa?', options: ['Reduzir desperdício e custos', 'Renderizar gráficos', 'Treinar ML', 'Criar contratos'], order_index: 4, correct_index: 0 }
    ]
  }
},

'75': {
  id: '75',
  constellation_id: '11',
  title: 'Análise de Dados Energéticos',
  video_iframe_url: 'https://www.youtube.com/embed/Zg1PTHuN2xM',
  article_md: `# Análise de Dados Energéticos

## Introdução

Aprenda a coletar, processar e analisar dados de consumo energético.

## Conteúdo

- Coleta de dados de sensores
- Limpeza e organização
- Visualização de consumo
- Insights e previsões`,
  locked: true,
  quiz: {
    id: 'quiz-75',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Coleta de dados envolve?', options: ['Sensores e medidores inteligentes', 'Renderizar gráficos', 'Treinar ML', 'Criar NFTs'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Visualização de consumo ajuda a?', options: ['Identificar padrões e oportunidades', 'Aumentar consumo', 'Criar contratos', 'Renderizar gráficos'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Limpeza e organização dos dados é importante para?', options: ['Insights precisos', 'Renderizar gráficos', 'Treinar ML', 'Criar NFTs'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Previsões energéticas permitem?', options: ['Planejar e otimizar recursos', 'Aumentar consumo', 'Renderizar gráficos', 'Criar contratos'], order_index: 4, correct_index: 0 }
    ]
  }
},

// Constelação 12 – Especialista em Brain-Computer Interfaces
'76': {
  id: '76',
  constellation_id: '12',
  title: 'Brain-Computer Interfaces',
  video_iframe_url: 'https://www.youtube.com/embed/3GCS9JqNJB0',
  article_md: `# Introdução a Brain-Computer Interfaces

## Introdução

BCI permite comunicação direta entre cérebro e dispositivos eletrônicos, abrindo possibilidades para neurotecnologia e reabilitação.

## Conteúdo

- Conceito de BCI
- Aplicações atuais
- Neurofeedback
- Reabilitação e próteses inteligentes`,
  locked: false,
  quiz: {
    id: 'quiz-76',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'BCI significa?', options: ['Brain-Computer Interface', 'Binary Code Interface', 'Brain Control Input', 'Brain Communication Internet'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Aplicações de BCI incluem?', options: ['Reabilitação e neurofeedback', 'Redes sociais', 'Criação de NFTs', 'Smart grids'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Neurofeedback é usado para?', options: ['Treinar sinais cerebrais', 'Renderizar gráficos', 'Otimizar energia', 'Treinar ML'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Próteses inteligentes permitem?', options: ['Controle via sinais neurais', 'Aumentar consumo', 'Renderizar gráficos', 'Criar contratos'], order_index: 4, correct_index: 0 }
    ]
  }
},

'77': {
  id: '77',
  constellation_id: '12',
  title: 'Sensores e Captação de Sinais Neurais',
  video_iframe_url: 'https://www.youtube.com/embed/K8uijjp6hfc',
  article_md: `# Sensores e Captação de Sinais Neurais

## Introdução

Aprenda sobre tecnologias que captam sinais elétricos e magnéticos do cérebro.

## Conteúdo

- EEG, fNIRS e ECoG
- Processamento de sinais
- Filtragem de ruído
- Protocolos de aquisição de dados`,
  locked: false,
  quiz: {
    id: 'quiz-77',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'EEG é usado para?', options: ['Registrar atividade elétrica cerebral', 'Renderizar gráficos', 'Otimizar energia', 'Treinar ML'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'fNIRS mede?', options: ['Fluxo sanguíneo cerebral', 'Sinais elétricos', 'Energia', 'NFTs'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Filtragem de ruído serve para?', options: ['Obter sinais mais limpos e precisos', 'Aumentar consumo', 'Renderizar gráficos', 'Criar contratos'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'ECoG é?', options: ['Registro intracortical de sinais cerebrais', 'Renderizar gráficos', 'Treinar ML', 'Otimizar energia'], order_index: 4, correct_index: 0 }
    ]
  }
},

'78': {
  id: '78',
  constellation_id: '12',
  title: 'Processamento de Sinais Neurais',
  video_iframe_url: 'https://www.youtube.com/embed/UhGqkq8sXYg',
  article_md: `# Processamento de Sinais Neurais

## Introdução

Aprenda técnicas para transformar sinais cerebrais brutos em informações úteis.

## Conteúdo

- Pré-processamento de sinais
- Extração de features
- Machine Learning aplicado a BCI
- Interpretação de dados neurais`,
  locked: true,
  quiz: {
    id: 'quiz-78',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Extração de features é usada para?', options: ['Obter informações relevantes dos sinais', 'Renderizar gráficos', 'Criar NFTs', 'Otimizar energia'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Pré-processamento serve para?', options: ['Remover ruído e artefatos', 'Aumentar consumo', 'Renderizar gráficos', 'Treinar ML'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Machine Learning em BCI ajuda a?', options: ['Interpretar padrões neurais', 'Renderizar gráficos', 'Criar contratos', 'Otimizar energia'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Interpretação de dados neurais é essencial para?', options: ['Controle de dispositivos e comunicação', 'Aumentar consumo', 'Treinar ML', 'Renderizar gráficos'], order_index: 4, correct_index: 0 }
    ]
  }
},

'79': {
  id: '79',
  constellation_id: '12',
  title: 'Interfaces Neurais e Aplicações Práticas',
  video_iframe_url: 'https://www.youtube.com/embed/a7Hn0q8iF50',
  article_md: `# Interfaces Neurais e Aplicações Práticas

## Introdução

Explore como BCI é aplicado em próteses, comunicação e entretenimento.

## Conteúdo

- Controle de próteses
- Comunicação assistiva
- Jogos e realidade virtual
- Experimentos acadêmicos e industriais`,
  locked: true,
  quiz: {
    id: 'quiz-79',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Controle de próteses via BCI permite?', options: ['Movimentação controlada pelo cérebro', 'Renderizar gráficos', 'Treinar ML', 'Otimizar energia'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Comunicação assistiva é para?', options: ['Pacientes com deficiência motora ou fala', 'Renderizar gráficos', 'Criar NFTs', 'Otimizar energia'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'BCI em jogos permite?', options: ['Controle cerebral em VR/AR', 'Aumentar consumo', 'Renderizar gráficos', 'Treinar ML'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Aplicações industriais incluem?', options: ['Monitoramento e controle de máquinas', 'Criar NFTs', 'Renderizar gráficos', 'Otimizar energia'], order_index: 4, correct_index: 0 }
    ]
  }
},

'80': {
  id: '80',
  constellation_id: '12',
  title: 'Ética e Futuro das BCIs',
  video_iframe_url: 'https://www.youtube.com/embed/9u4tR6XGqKg',
  article_md: `# Ética e Futuro das BCIs

## Introdução

Discuta impactos éticos, regulamentação e tendências futuras em interfaces cérebro-computador.

## Conteúdo

- Privacidade de dados neurais
- Consentimento informado
- Implicações sociais e médicas
- Tendências futuras e oportunidades`,
  locked: true,
  quiz: {
    id: 'quiz-80',
    total_questions: 4,
    passing_score: 70,
    questions: [
      { id: 'q1', question_text: 'Privacidade de dados neurais é importante porque?', options: ['Protege informações sensíveis do cérebro', 'Renderizar gráficos', 'Treinar ML', 'Criar NFTs'], order_index: 1, correct_index: 0 },
      { id: 'q2', question_text: 'Consentimento informado significa?', options: ['Usuário entende e autoriza coleta e uso de dados', 'Aumentar consumo', 'Renderizar gráficos', 'Treinar ML'], order_index: 2, correct_index: 0 },
      { id: 'q3', question_text: 'Implicações sociais incluem?', options: ['Impacto em comunicação, emprego e privacidade', 'Renderizar gráficos', 'Criar NFTs', 'Otimizar energia'], order_index: 3, correct_index: 0 },
      { id: 'q4', question_text: 'Tendências futuras incluem?', options: ['Integração BCI em saúde, entretenimento e indústria', 'Aumentar consumo', 'Renderizar gráficos', 'Treinar ML'], order_index: 4, correct_index: 0 }
    ]
  }
}












}