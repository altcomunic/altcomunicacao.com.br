const architecture = [
  "Diagnóstico",
  "Direção Estratégica",
  "Narrativa da Marca",
  "Direção Criativa",
  "Aquisição",
  "Relacionamento",
  "Direção Comercial",
  "Conversão",
  "Receita",
];

const cases = [
  { sector: "Engenharia", name: "Gomes Engenharia", focus: "Posicionamento e aquisição" },
  { sector: "Agronegócio", name: "Campo Nutrição", focus: "Marketing e direção comercial" },
  { sector: "Bebidas", name: "Treme Treme", focus: "Narrativa e desejo de consumo" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ALT — início">ALT</a>
        <nav aria-label="Navegação principal">
          <a href="#arquitetura">Arquitetura</a>
          <a href="#cases">Cases</a>
          <a href="#operacao">Operação</a>
        </nav>
        <a className="header-cta" href="#diagnostico">Solicitar diagnóstico</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-noise" />
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="container hero-content">
          <p className="eyebrow">Diagnóstico e crescimento de empresas</p>
          <h1>
            Empresas crescem por decisão.
            <span>Não por postagem.</span>
          </h1>
          <p className="hero-copy">Especialistas em diagnóstico e crescimento de empresas.</p>
          <a className="primary-cta delayed-cta" href="#diagnostico">Solicitar Diagnóstico <span>→</span></a>
        </div>
        <a className="scroll-hint" href="#arquitetura">Role para explorar <span>↓</span></a>
      </section>

      <section className="section architecture" id="arquitetura">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Arquitetura ALT</p>
            <h2>O crescimento não acontece em departamentos isolados.</h2>
            <p>Conectamos estratégia, marca, aquisição, relacionamento e comercial em uma única direção.</p>
          </div>

          <div className="architecture-grid">
            {architecture.map((item, index) => (
              <div className={`architecture-node ${index === 4 ? "architecture-core" : ""}`} key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section method">
        <div className="container">
          <div className="section-intro narrow">
            <p className="eyebrow">Método ALT</p>
            <h2>Menos execução sem contexto. Mais decisão com método.</h2>
          </div>
          <div className="method-list">
            {[
              ["01", "Diagnosticar", "Entender gargalos, oportunidades e o nível de maturidade da operação."],
              ["02", "Direcionar", "Definir prioridades, posicionamento, narrativa, canais e metas."],
              ["03", "Executar", "Transformar estratégia em comunicação, aquisição e rotina comercial."],
              ["04", "Acompanhar", "Medir o que realmente avança a empresa e corrigir a direção."],
              ["05", "Escalar", "Reinvestir em processos e canais que geram conversão e receita."],
            ].map(([number, title, text]) => (
              <article className="method-item" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cases" id="cases">
        <div className="container">
          <div className="section-intro row-intro">
            <div>
              <p className="eyebrow">Cases</p>
              <h2>Estratégia aplicada a negócios reais.</h2>
            </div>
            <p>Os materiais e resultados definitivos serão adicionados na próxima etapa.</p>
          </div>
          <div className="case-grid">
            {cases.map((item, index) => (
              <article className="case-card" key={item.name}>
                <div className="case-topline">
                  <span>Case {String(index + 1).padStart(2, "0")}</span>
                  <span>{item.sector}</span>
                </div>
                <div className="case-visual"><span>ALT</span></div>
                <div>
                  <p>{item.focus}</p>
                  <h3>{item.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section operation" id="operacao">
        <div className="container operation-layout">
          <div>
            <div className="section-intro narrow">
              <p className="eyebrow">Operação ALT</p>
              <h2>A operação por trás do crescimento.</h2>
              <p>Não entregamos peças soltas. Estruturamos uma operação que conduz oportunidades até receita.</p>
            </div>
            <div className="operation-steps">
              {architecture.map((item, index) => (
                <div className="operation-step" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>

          <aside className="growth-panel" aria-label="Painel conceitual da operação">
            <div className="panel-header">
              <div><span>Operação integrada</span><strong>Painel de crescimento</strong></div>
              <em>Ao vivo</em>
            </div>
            <div className="signal-line" />
            <div className="metric-grid">
              <div><span>Aquisição</span><strong>Meta + Google</strong></div>
              <div><span>Relacionamento</span><strong>CRM</strong></div>
              <div><span>Acompanhamento</span><strong>Dados</strong></div>
              <div className="highlight"><span>Resultado</span><strong>Receita</strong></div>
            </div>
            <div className="progress-block">
              <div><span>Fluxo da operação</span><strong>Estratégia → Receita</strong></div>
              <div className="progress"><span /></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section insights">
        <div className="container">
          <div className="section-intro narrow">
            <p className="eyebrow">Insights</p>
            <h2>Ideias para empresas que querem crescer com direção.</h2>
          </div>
          <div className="insight-grid">
            <article><span>Estratégia</span><h3>Produzir mais não corrige falta de direção.</h3></article>
            <article><span>Comercial</span><h3>Marketing sem acompanhamento desperdiça oportunidade.</h3></article>
            <article><span>Crescimento</span><h3>Escala começa quando a empresa entende o que converte.</h3></article>
          </div>
        </div>
      </section>

      <section className="diagnostic" id="diagnostico">
        <div className="container diagnostic-content">
          <p className="eyebrow">Próximo passo</p>
          <h2>Sua empresa cresce por método ou por tentativa?</h2>
          <p>O diagnóstico identifica onde o crescimento está travado e quais decisões precisam ser priorizadas.</p>
          <a className="primary-cta light" href="mailto:contato@altcomunicacao.com.br?subject=Solicitação%20de%20Diagnóstico">Solicitar Diagnóstico <span>→</span></a>
        </div>
      </section>

      <footer>
        <div className="container footer-top">
          <a className="brand" href="#top">ALT</a>
          <div className="partners"><span>Kommo</span><span>Google</span><span>Meta</span><span>OpenAI</span><span>Synapse</span></div>
        </div>
        <div className="container footer-bottom">
          <p>Especialistas em diagnóstico e crescimento de empresas.</p>
          <p>© 2026 ALT Comunicação</p>
        </div>
      </footer>
    </main>
  );
}
