import { useEffect } from 'react'
import Header from './components/Header'
import Icon from './components/Icon'
import ProjectCard from './components/ProjectCard'
import SectionHeading from './components/SectionHeading'
import Timeline from './components/Timeline'
import { projects, techGroups } from './data/portfolio'

function App() {
  const orbitRings = ['inner', 'middle', 'outer']
  const orbitTechnologies = techGroups.flatMap((group) => group.items)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const elements = document.querySelectorAll('.reveal')

    if (reduceMotion) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px' },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />

      <main id="conteudo">
        <section className="hero section-grid" id="inicio" aria-labelledby="hero-title">
          <div className="container hero-layout">
            <div className="hero-copy reveal">
              
              <p className="hero-intro"><span>const</span> pessoa = <b>"Luca Baccari"</b>;</p>
              <h1 id="hero-title">
                Explorando a tecnologia.<br />
                Construindo <em>soluções.</em><br />
                Evoluindo todos os dias.
              </h1>
              <p className="hero-description">
                Estudante de Engenharia de Software na FIAP e Jovem Aprendiz em Gerenciamento de Serviços de TI na Pluxee, com interesse em desenvolvimento, inteligência artificial e computação em nuvem.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#projetos">Explorar projetos <Icon name="arrow" /></a>
                <a className="button ghost" href="#trajetoria">Conhecer trajetória</a>
              </div>
              <div className="hero-footnote" aria-label="Informações rápidas">
                <span><Icon name="location" size={16} /> São Paulo, Brasil</span>
                <span><Icon name="code" size={16} /> tecnologia · prática · evolução</span>
              </div>
            </div>

            <aside className="profile-card reveal" aria-label="Resumo profissional">
              <div className="card-window-bar">
                
                <code>luca.profile</code>
                
              </div>
              <figure className="profile-photo">
                <img
                  src="./assets/luca-profile-blue.png"
                  alt="Retrato de Luca Baccari sorrindo e usando uma camisa polo preta"
                  width="1536"
                  height="1024"
                  fetchPriority="high"
                />
                <figcaption>IMG_01 / PROFILE</figcaption>
                <span className="photo-scan" aria-hidden="true" />
              </figure>
              <div className="profile-info">
                <p className="mono-label">// perfil_atual</p>
                <h2>Luca Baccari</h2>
                <p>Engenharia de Software · FIAP</p>
                <ul>
                  <li><Icon name="briefcase" size={17} /><span><small>ATUAÇÃO</small>Jovem Aprendiz · ITSM</span></li>
                  <li><Icon name="school" size={17} /><span><small>FORMAÇÃO</small>Graduação em andamento</span></li>
                </ul>
              </div>
              <div className="profile-status"> construindo a próxima versão</div>
            </aside>
          </div>
          <div className="scroll-cue" aria-hidden="true"><span>scroll</span><i /></div>
        </section>

        <section className="about section-grid" id="sobre" aria-labelledby="sobre-title">
          <div className="container">
            <SectionHeading id="sobre-title" number="02" eyebrow="sobre mim" title="Curiosidade que vira prática." />
            <div className="about-layout">
              <div className="about-lead reveal">
                <p>
                  Estou construindo minha trajetória em tecnologia unindo a base acadêmica da <strong>Engenharia de Software</strong> com a experiência prática em <strong>Gerenciamento de Serviços de TI.</strong>
                </p>
              </div>
              <div className="about-details reveal">
                <p>
                  Na FIAP, amplio meus conhecimentos em desenvolvimento e fundamentos de software. Na Pluxee, vivencio a rotina de uma área de tecnologia e aprendo como serviços, processos e pessoas se conectam no dia a dia.
                </p>
                <p>
                  Tenho interesse em desenvolvimento, IA generativa, automações e Cloud. Gosto de transformar ideias em projetos concretos, testar caminhos e evoluir a partir do que aprendo em cada entrega.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="projects section-grid" id="projetos" aria-labelledby="projetos-title">
          <div className="container">
            <SectionHeading
              id="projetos-title"
              number="03"
              eyebrow="projetos selecionados"
              title="Ideias que saíram do papel."
              description="Projetos acadêmicos, comerciais e de estudo que representam diferentes momentos do meu aprendizado."
            />
            <div className="projects-grid">
              {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
            </div>
          </div>
        </section>

        <section className="technologies section-grid" id="tecnologias" aria-labelledby="tecnologias-title">
          <div className="container">
            <SectionHeading
              id="tecnologias-title"
              number="04"
              eyebrow="tecnologias"
              title="Ferramentas para continuar evoluindo."
              description="Conhecimentos que fazem parte dos meus estudos e projetos"
            />
            <div className="tech-window reveal">
              <div className="tech-window-head">
                <span><i /><i /><i /></span>
                <code>stack.js</code>
                <small>UTF-8 &nbsp; Ln 1, Col 1</small>
              </div>
              <div className="tech-code">
                <div className="line-numbers" aria-hidden="true">
                  {Array.from({ length: 18 }, (_, index) => <span key={index}>{String(index + 1).padStart(2, '0')}</span>)}
                </div>
                <div className="code-content">
                  <p><span className="syntax-purple">const</span> <span className="syntax-blue">conhecimentos</span> = {'{'}</p>
                  {techGroups.map((group, groupIndex) => (
                    <div className="code-group" key={group.key}>
                      <p><span className="indent">{group.label}: [</span></p>
                      <ul>
                    {group.items.map((item, itemIndex) => (
                      <li key={item.name}>
                        "{item.name}"{itemIndex < group.items.length - 1 ? ',' : ''}
                      </li>
                    ))}
                      </ul>
                      <p><span className="indent">]{groupIndex < techGroups.length - 1 ? ',' : ''}</span></p>
                    </div>
                  ))}
                  <p>{'}'};</p>
                  <p className="code-comment">// aprendendo, aplicando, evoluindo.</p>
                </div>
                <aside className="tech-summary" aria-label="Resumo de áreas de interesse">
                  <p className="mono-label">// foco_atual</p>
                  <strong>Tecnologias que formam<br />meu core.</strong>
                  <div className="orbit" aria-hidden="true">
                    <div className="orbit-core"><span>tech</span><b>CORE</b></div>
                    {orbitRings.map((ring) => (
                      <div className={`orbit-ring orbit-ring-${ring}`} key={ring}>
                        {orbitTechnologies
                          .filter((technology) => technology.ring === ring)
                          .map((technology) => (
                            <span
                              className="orbit-node"
                              key={technology.name}
                              style={{
                                '--angle': `${technology.angle}deg`,
                                '--counter-angle': `${-technology.angle}deg`,
                              }}
                            >
                              <span className="orbit-node-content" title={technology.name}>
                                <img
                                  className={technology.monochrome ? 'is-monochrome' : ''}
                                  src={`./assets/tech/${technology.icon}`}
                                  alt=""
                                />
                                <small>{technology.name}</small>
                              </span>
                            </span>
                          ))}
                      </div>
                    ))}
                  </div>
                  <p>Desenvolvimento, dados e infraestrutura em movimento.</p>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <section className="journey section-grid" id="trajetoria" aria-labelledby="trajetoria-title">
          <div className="container">
            <SectionHeading
              id="trajetoria-title"
              number="05"
              eyebrow="trajetória"
              title="Próximo passo, próxima versão."
              description="Uma trajetória no início, construída com formação, prática e projetos que ampliam meu repertório."
            />
            <Timeline />
          </div>
        </section>

        <section className="contact section-grid" id="contato" aria-labelledby="contato-title">
          <div className="container contact-layout">
            <div className="contact-copy reveal">
              <p className="eyebrow">// contato</p>
              <h2 id="contato-title">Vamos construir<br /><em>algo juntos?</em></h2>
              <p>Estou sempre aberto a trocar ideias, aprender com novas pessoas e conversar sobre projetos e oportunidades em tecnologia.</p>
              <a className="button primary" href="mailto:contato.lucabaccari@gmail.com">Enviar um e-mail <Icon name="arrow" /></a>
            </div>
            <div className="contact-list reveal">
              <a href="https://github.com/Lucabaccari" target="_blank" rel="noreferrer">
                <span className="contact-icon"><Icon name="github" /></span>
                <span><small>GITHUB</small><strong>@Lucabaccari</strong></span>
                <Icon name="external" />
              </a>
              <a href="https://www.linkedin.com/in/luca-baccari" target="_blank" rel="noreferrer">
                <span className="contact-icon"><Icon name="linkedin" /></span>
                <span><small>LINKEDIN</small><strong>/in/luca-baccari</strong></span>
                <Icon name="external" />
              </a>
              <a href="mailto:contato.lucabaccari@gmail.com">
                <span className="contact-icon"><Icon name="mail" /></span>
                <span><small>E-MAIL</small><strong>contato.lucabaccari@gmail.com</strong></span>
                <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          
          <p>Projetado e desenvolvido por Luca Baccari.</p>
          <p><span>© 2026</span> · tecnologia, prática e evolução.</p>
        </div>
      </footer>
    </>
  )
}

export default App
