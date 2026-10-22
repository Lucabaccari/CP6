export default function ProjectVisual({ type, title }) {
  if (type === 'nutrition') {
    return (
      <div className="project-visual nutrition-visual" role="img" aria-label={`Prévia ilustrativa do projeto ${title}`}>
        <div className="browser-bar"><span>www.marcosmoreiranutri.com.br</span></div>
        <div className="nutrition-page">
          <div className="nutrition-nav"><b>MM</b><span>Sobre &nbsp; Atendimento &nbsp; Contato</span></div>
          <div className="nutrition-copy">
            <small>NUTRIÇÃO COM PROPÓSITO</small>
            <strong>Saúde que cabe<br />na sua rotina.</strong>
            <span className="fake-button">Agendar consulta</span>
          </div>
          <div className="nutrition-orb"><span>+</span></div>
        </div>
      </div>
    )
  }

  if (type === 'api') {
    return (
      <div className="project-visual api-visual" role="img" aria-label={`Prévia ilustrativa do projeto ${title}`}>
        <div className="terminal-head"><b>games-api — response.json</b></div>
        <div className="api-body">
          <div className="endpoint"><strong>GET</strong><code>/games</code><span>200 OK</span></div>
          <div className="code-response" aria-hidden="true">
            <span className="line-no">01</span><code>{'{'}</code>
            <span className="line-no">02</span><code>&nbsp; <i>"id"</i>: 1,</code>
            <span className="line-no">03</span><code>&nbsp; <i>"name"</i>: <b>"Game"</b>,</code>
            <span className="line-no">04</span><code>&nbsp; <i>"year"</i>: 2026</code>
            <span className="line-no">05</span><code>{'}'}</code>
          </div>
          <div className="method-row"><span>POST</span><span>PUT</span><span>DELETE</span></div>
        </div>
      </div>
    )
  }

  if (type === 'codecam') {
    return (
      <figure className="project-visual codecam-cover">
        <img
          src="./assets/codecam-cover.png"
          alt="Capa do Code-Cam com a proposta educacional e um celular fotografando anotações de uma aula"
          width="1536"
          height="1024"
          loading="lazy"
        />
        <figcaption>Code-Cam · FIAP Challenge / Jovi</figcaption>
      </figure>
    )
  }

  return (
    <div className="project-visual" role="img" aria-label={`Prévia ilustrativa do projeto ${title}`} />
  )
}
