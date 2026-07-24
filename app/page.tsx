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

const logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAd4AAAChCAYAAABpnd5jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAF2dJREFUeNrsne9x27jWhxGPv6/ez3d2lqkgSgWmK4hdgeUKbFUgqwLLFViuIHYFViqIUkGU2bmfr7aCfXHsw0RWJBKkABIkn2eGo91YIkH8++EA5wDvDPSKP//8T2o/ngPd/vTvv/+7IJdhR527sJd8JjU8cmUvqYcPPuujvseVvYY1vcc2a32vJ/tec0/v9O+ePy3sM05rric39mPiu29x6POm9t43Nb6LOaJbAICAnemtdnqjGsUq0ec9awfo4z3u9T3OGhJdYaDPv7fp+WqvQcBnpb7yzjF/z/KEqmsgvAAQ0tK9bjgZE03HIe8xUiGPCbG6b2vIu7Ma6okMZO771DYQXgAIxVVH0nEVaf7WMRi4V2EMyWe15hFeAIADOYskHZUtXp3OHcaawYda8w7I+38ONa2tSxHDvjWMY/oGAAjQoRZ11Cu9fJGY/Wuvh4jGsOb32JX2YUH6FoGLM5vWvvRcR2Rgdt3H9oHwAkCozjqPB5+epEVepPbvQ/u8ZYD3fPDtEbvDon0uEOY6GNm0fPHoTS31476vjYOpZgDoAwOy4GDuVTAPFd2Bim5vywThBQAAV3ys9/ZyXRfhBQCAKiTm1Qu5qrU7Mvu9sdcILwBAN1j1qVP3xGPO31L1Ri4runmxx4s+ZS7OVQDQFZYqst/0v9dsYVqZO7Vu900JX6uz1aOj6Bat647t9RXhBegBOvV1Eej240CetLCFehbfkBNekfCh5xyxFGerlWMdv88R8Zncw94LixegJ8ioPg10bzxpoc2DGRHDsdkf9jNQ8ZUDDNY5g1uJ1d23mYocxjDuW96yxgsAAPvEd24/5jlfyd0zumBdV8T6vI/5ivACAEAeYpHmTSeP1KrdFt2X7SZzfneeZykjvAAA0FerV8Tx0uR7ht/u2FxDpqiTPd+f9tnxDeEFAIAi8V2q5ZvHc7a5hm7hmbeue9Pn/ER4AQDARXznJn+9NzvJKDX7983u7bruJng1A0DrUQvrxLyuRX5Tq2pFznhHrN6h2R8alJr8KIHerusivADQRd50+laM1yrEX8RSQ4i9WL1rm69F8b37mLKhyStMNQNAVxmoEMu0Z0J2eBNfl/XebXq/rovwAgDAIeI7N/nrvZuwrovwAgCAB4riezNY10V4AQDAg9XrEt/Lui7CCwAAHsU3b72Xdd094NUMACFYFfx98uef/5nUKBChrK5a3yNS8Z3bPJBQrtHGP7dpXbf2MsTiBYAQnfGqI68S+3ssIknH9npvTOu6sZXhGuEFgK6LwmPVH+oAImbxjeK8ZxVZsXCnKrqxlH2MZbhAeAEgFA+RpOOpI++xzTwmb2EROFnTtdcjdTG/PiK8ABCqI54b91jPkOJ0aBpmsViWG6zVuoR2leFLfUR4ASCk+Eq4iVyLmh8tz7vU5x/6Dmt7fTTucashWangvmcLzFaV4Zv6iFczANRm+eqZrYOAj1triEuI95ip5VTHe+x6fojBy+mef29CnE5z/rZsaRnurI8ILwDUKR5L3iOq91j0NS1NliFTzQAAAAgvAAAAwgsAAAAILwAAAMILAAAACC8AAADCCwAAgPACAAAAwgsAANBqWrNzVdH2XjHtwAIAABC18FpRTeyHXKm9/rDXUP+UlrjH5v/KVmByesfKXj/0/5dsKg4AAL0UXrVez+z1QcXV90bVwz3PXasIf7HXY1f2W4XfBnGjEj85CZicC5ue9MB7zBkwAiC8VTrDgQrtp0BC68pAny/XRIVYDm1+ivTwZiiPCO8kkrSMPNxjYV5nbgAA4XUSXBHbCxXdGBlo5zhSEZ7b6w4LAwAAWiO8at1eq+AmLcqLLN3X9h1EgB9w2AIAgGiFV9fWrtSCHLQ8XzIrWKafx1jAAAAQjfBuWLhXHRDcbWSK/My+49R+zqwAr6kyAKX7iH2hgOumHByLwhN9p83RyW4Zuo9xeO8QLGPsOx3zIkjajw9MuFiGtx0U3G3EWUc8VC+ZfgYojfQR6Z4+ZGrb1E1MaVKknZ96fN6zw3dO9bk+xSXzY/lkSoRnBhC5tb6bOLLOIxHdrw5fndlr7Pv5RxUTndhLKtJ9D0Q3I5HGY9/7xgCAt0GtbVP3KhDgX1y+Owwy6iCLbJGyfo6gvG8dv3ety6jNCq9auV8jKMgmO4rPdBQA3hjpoJY25dfSfY7UMErVaGsqb85K6pf3tB6VKUgZmfbMyt3HGR0FgFderDO10sDPYCbm/umswbK+Lfn91MNGOOWFd2P0NKI+v+koEF8Afwy0TZ2RFQfzqSUGTN3WrjgCJxV+6tXqPXJIaLYIzUgU8QWoQ3w/awcJ1UlbkMaTOh+m/XTVXe0Sn3Xy2EF0Y10niEp87fWRrADwxq3tfz78/fd/L8mK0gLjatEtAg+gioy1pOasmRyoZeLfM/cRXnSM6PoRX1n/ppMA8MpI+6FTYujLWWcuX7J5ehoqAbom+uwjnR4HI0UW67pA7zKL+eDwoqMckxwnqvKdxIhsAPA7qLXXV5yu4ECK1mhXxi1u+9pHXdy3xpsa1nSrcBsi5gsACw6nKzjI+k4LvjbVncrmLv18EOHVI/JkzZLzassxMA3GpwF0vG3hdAUhrN3lxm5aU4f7pYcOAvd6NYv62+ujY0LAY6EAwH5rQ/cTAHCxdkemeC15vKF7qzqs3sJwIt1HVea+VxHko6RhseOKzTK/pcoDOCMdXxnnqVEk2w5CdbK9m0OK7sChL17s2H/fpT4mh2wf7HRIgiTMPkSsX/HoqmOqJxPTbyK2rgcTaEYP9ZIYsaYsTymUUQybgQO0gKUO7stEUaTmdd33sqkTjsDZWJLri4qZlFVdpxVdO9Sn8Q69W9t6dWeKY36v7PcqnVrnfDqR3nxsH/RkPz8bvx7PUjCyrvx0yOk/msbMCp6pEIv4Xpj6A8onjlMW0OxIOjHhwhqWJS25fe/TdYa27Up7LSu+2QY255waFhdaHu+aer46uRYJ5zxn0CanEhUddZtZ1KXDSI+rZKh9qffmdcH67MAORYTpIdSIVYVYnjFXz7ZJjQKM1dtMg8+sJ9cGemOq72ZTxBhBcGKQlZ32Lc/GPapisGH50tYgw2W5b5qnHY5Wryx73JXVsErHAkqi7HVu//O8wohcOiJpJP9nr3Fd00TSAWrA+NjUZ0VcUf8BSg+WpZ0+lvzpPU5XoIPp1MEonKojVV5dlEH5ypPIHy68GwmTxvHesZGI4MoONKdNjkxlSksbdh2CPySuF6DywH5W8qc4XYFxsFLXJepWkPCiI4+NZJ8luVIL9zSWabeN6cg6xBerF6BaO5U+pez6mVg7z+x01Vtrd2SKlxPvXB2i1Ej0bvUeeWwkMoL4aN46trz8W4xrLxtTWqHFl5hegOrtdK79SpnloczpKiUHeyW6LqcPrXQKuQwuVm+p8KIjz41kpeuoMko91TXcdcSNeq1pDZnGhOlmgIPaaZUZqszpakQO9gaXs3anFerf3LhFSly5LnMcBWoo87Z4c2qjDr07F1YvgB/xLduviNPVrmlAYn+7Ze2K4BYt6y0PmH110QiXDTteOKbIXqfJbcF9MuFCjT6QywAHt9OX5SH1Xi5jyV5rx3y5MQP3DzkaVAhfNjOq0QBzOWv36cDlh5WDRe0UXoTwvh3RhBLelOwF8CbAl7Zzk52QyoQPyayTLPtwtm89ZOvs2exCthPh0rcYqyOdy0BsYsLF7G8iVm/uXgJH1I+fjVkqQ6jRWUKIA4DX9jo35fcRkA76Ox7PjYjwSAVJxPhfe33dswRQVehiojC8COF9y13gygcA/sT30ZQ/wOXF6cpef5CDjYvxwfv+q8ClEb7fLcJbriGvA1Y0APDbZmUKs+zZ4QNTbo0Y4iXWk+Byw4sQ3t95DHRfppoBwojvWs8On9Me+4MKWxJxEq/2hZIivL/zJdB98WwGCCvAEpM/JSd6IboycIp9V8C9G3ogvL+zwOIFaK34ihUUelMcaB6X8KEYGO0KYSKc6PeGu1IXeABoZxuWY0BlzbfM2b7QHms3McWOWbKL4vvA6bgxbuFJk22DDuHdb/Wmnu+Zkq0AtYlvlbN9u4KTtS9hPW1I5w5c4renNdSxG5uHF6Z4nTndPpudqWYA6Kr4ZgehzPs26GhJUkunU6dti4yYZY0H87gK/GRzLweEdzdfyAKAboivOl3Nevbqy46m0cXaHddYv+aO7yFW8TXCCwB9EuAqZ/u2maeupdFajC6nDy0aOKDHVeh/hhchvADQF/EV66Ts2b5tZRb5e5YSSMezdoVpA/VK3sPlXX6+A8ILAH0S3yo7XbXxPes4a7wqkvfnJX9zbYo91B8bPI7WdTblJbwI4QWAvonvylQ727dt7/mogwyxfleRCK5My5Y6IUqnZ12s3XHDdWru+PUJ4UQAEJoHk++wWLsAbpztu8+S8i1ULlOgqwDvuVJBGquAJfqnoQkf47zaeKflAccxJg75t9J3bRJJ4w+XLyK8ABBa5OYRp21W03NuIrH0V00Ndg5I96IN6dX8dSrn6IR31/ZaDfAX3SUAAISgNuFVQU30kgMDBhv/DwAAgPAeILIiqnJA8Yl5XUvgLFoAAACfwqsL9yK2FwgtAABAIOHVKeQrFV0AAAAIIbwquBJblZKNAAAAgYRXp5RvsXABAADKU2rnKjlT0H58RXQBAAACWrzqpSxW7ogsAwAACCi8KrrPBk9lAACAgzlCdAEAACKweBFdAIDw2L72u/m1g980hn2doSHhNa9ruoguAIC7iIrBIiceyd4G2ek/ciqPHNEnJzQtNk/Rsd+/NW+3zV2Qiz0VXj0qa0T2AACUEt1ds4QD7U9H+r2linGyJbrrBg9yhyaFt8ShwwAA8AvXWcJ933kkC/vB0Z7KMyBrAACcrd3EHDZLKBbwlJzsofDqNpBsjgEAUI6rHf8mU8orx9+PN9d+oV8WL1PMAADlSbes149WSOV6b/9brkvzOpW83vqdiO25/d6cLOwPxxvW7tBw4AEAQBVEUBf633dWSJfZH9SSneuV9bWynLe0f1uTdT0WXrN7qiQ0K62sPzYqbeOV0TaMG6x/AHDF9lmnJb67JMcQ3oy61nZFVO9k9MeaBgAA9FJ4rYUnohvakzkT3BnTKwAA0HeL91Pg58jUyiVTLAAAgPC+kgYW3VOsXIB+o7GuMrt2Yl5n2DInI9+sza9QHtmm8bHu/kd3sZKzy5OcNL5vol/cKIdPNfT/bUfq0cJeDz4NxyMthCRQoqVSnSO6AL0X3ZH9kMMAbrXTT0245a2B3l+eeS/PVU/iOrku6FcljZMGyuFmoxxSRLeQoZblV807P8Jrwh6EQFA4AKKbqgA2xcseympk1GVRukSJXNeVJk3XmSFa4xAmWpejFt4FQeEAYJoJVdwlvnWlY1LCmq9zQILoRlKXRXg/BErgA2UEACaebWjT0A/QKe1RmTT5sqIcrHCOeY2kDh2ZcOssnLQB0HMaWFvNo4603Fb4TR1Wb0Jt9MJAHecO4jhQZVzgUAUADgP7qe0rbjwK/bNpyGFI11CrPDsRxx2f+VCBU84C/lmOUg6TggHcQXkVyuL9QvEBQM/Is3blkIRVzt+vfFhSOaQUTzwcBbrviqwFgJ5ZScm+/lAdTccFMwO35CTCi/ACABSLbpHHtFi7cjiC+L0scr43imxNHFomvAAAfeHW7F+yW2ytnU4d7gUILwBA61ipdTlVi1Och94FsHYTkx8+9EZoVYTzrN5UnbSgwxyTBQDQIS5r3i0vLxRovsdTWMQ4LbB6CcfE4gUAiJ86RVc3vkhdrd0tq3ee87vE577A0B/hHZC1ANBx8qzdWcEgoGitN3R4EXRQePHMA4DOYkUx7/ShdZGwqijPC4wXHK0Q3lJ8IGsBoKOiW3Sk353jzn1FVi/hRR0W3mWA+6ZkbS9JyALoAddm/3KaWLIzl5uo1Ut4UU+FN8SeygM9+BoQ3thZkB9QwtpNCqzdacl96mcFfTDhRR3kWC3eEBbqhclfw4iZE6pGJT7Z64ZseFOP5mRDrcKYWYiyX/wygJdzkQVaxSNZ0jgseCbhRR0T3h+B7v0yUtNt0trUcAem21Ply4D3HopFUHMcZcyIpXJJNtTKUNvvtbbntdb5TIgfD+gbUlN8tnCIw+ZjOL0IPBJqjTfjvoUu8dddLvAajmts25pUyPwYqPcrNEc2kBZB/Nziuk14UZcsXgnmtgUastI/2/uftuF8XvUgnPSg3MUiTUJZebK+r6extGEgsgxY/18sIHt/2a93aaC1qM9Kkx7GWXgRMyjt0JHU5DjgZVtGLky46dVhG8RXM+u5J3UjpPAKMtMhIWV3LZl2Xptwm75kg89xWwYj8FvfUBQ+VBcSXnTHIC560f1aaPHq55MJu675khibqPMYK41OB05Mf3bc+mLCr2NLnl6LtafC9s11UNCAQC0D58dAByO3+iy5/nH87Zw188a5NvF4qEsdOqVIosWpH9m0eEOTqPhKpzqNoTPR6aMr07+dtlYNVETXkAipi10T3k0BTks+a2E437rJPiIx+WftPpYYVLrwh8n3M0krLuWsKc1acDLeXoRX17mWNQmQiN1IBfipbq9nnQq4UCFIelo5FrSPN3wjCxrjwrZJn+F7vvuwvJkwEbNL30toG2uEe9Nkv/NY8rlFM4236gHuQ3i6bsgcPBDePBbwoeYMywR4vTFqXO45RuuQCpzoe53oZ+89A2W2webNyrDBg2unBOHyNqmxHpYSFg0fGuV85S6Q38rY5K8TJmoV30Q8YOl0/+lTeOemmXXOwWblVg/TlV5l1gZPtioRrvf5PJqOh06VaEhLBiLB8nYdUd6WHdRPCqyeWcD6OC8QfQkvcl7/Dxy90ie8GIbHWw3kzsThvbc5Cma7tDA8ILy/NagR2RCsrsXQrzyVsHal30lzvjINHKUxLaiPmad1mfCiOXXcS10+mO3TiYr2DYUOWXkGp51KnTKUZhZBXVuUdEjK2ywjuOe94wEKI50OLyPm9O9h65BT/h5tFbb86I787Q2U9a+6/0inFCxvJV8/mmb2rc7Oxj0vYe3emPyp8WlNaXcxhCYlymHVYDm0GTFSJA7fJYxr4XLDd3sqnizss9juvwN6F1N6dGOA7yau9fCFYwUPkR83Jr6dy059OhxGUu9S4+5U9Zf5NT0qwuE61bdUy3RZIX2jnLSt7T1nNebVmUNfXCnWu2Q5xMDK1DxzUqXtFdSfl7q5T3iddt+AdgtvpGLTpPDKAOR/CG90Iv3cdN0A8MnRHoGQUSJ7gvZjMHBjWOvN8iKblgQAqFd4tROaG9YC+gKDrF/gYBgvsmvTv/b6bi/Z//pWZ+cAuiG8Kr6XiG8vLL2FCRST2FKrl4FI3CTm15m7X3UPbIBuCG9PxXfZRxGy5Sy75SxoEj89nBlwtodrxBc6Jbwb4jvuieiK88Y/Pa0P54btEzPG5EUUrHVAmF2rHPFltzrojvCq+M5UlFZdFt2YzwyuwdJbaxn3XnDIi2jKQfZvP9243pv9SwEpOQadEl5tBDLilADsrk3Fzuy7feyz6O4QnEfy4mdeLOgqoiqX+Z4ywdEKuie8WWek64EfO9AhrdTKHVMVfitjmXYekxcveSHiS5hRYPTsWwCEN6dDWmqH1EaL4CVeU6at+rw5gUMZy8zGeyy+n/HO5EVY7q34/k9DhW5k84xtMZZ1XHuJN3O64/eUDbSCYw8dklT2hTaQKxP3AfNi4cqWczOmlZ3L92VWQHcQysqXvOh5XgRkoKIq10TF1nUwzXo89EN4tzolmZoca1D7hTaeGNZdZL3yQcNE4PABlgjOJ9NTZ5aNvBhs5QVetc0xZjANbSH43sHaUYv4nuhnHZ21jHylc/xSRWw1zd6t9i5Oa6v1N1TROdn6c5Wybu1+vDrgHGrd+WurDg0qDkJ7s1ezxuKWPSN6raI7pzsHhNdN2LLrj61OqUj4VuZXWJN8/sj+jTVbgNYLcDZA/2tjUDfc0f7lDOU5li60jf8XYACREMJGgFYn1QAAAABJRU5ErkJggg==";

export default function Home() {
  return (
    <main>
      <header className="site-header hero-header">
        <a className="brand brand-image" href="#top" aria-label="ALT Comunicação — início">
          <img src={logo} alt="ALT Comunicação" />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#arquitetura">Arquitetura</a>
          <a href="#cases">Cases</a>
          <a href="#operacao">Operação</a>
        </nav>
        <a className="header-cta" href="#diagnostico">Diagnóstico →</a>
      </header>

      <section className="hero hero-video" id="top">
        <video className="hero-background-video" autoPlay muted loop playsInline preload="metadata">
          <source src="https://videos.pexels.com/video-files/6563850/6563850-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
        <div className="hero-noise" />
        <div className="container hero-content hero-content-revised">
          <p className="eyebrow">Diagnóstico e crescimento de empresas</p>
          <h1 className="hero-title-revised">
            <span className="hero-line hero-line-light">Empresas crescem</span>
            <span className="hero-line hero-line-strong">por decisão.</span>
            <span className="hero-line hero-line-muted">Não por postagem.</span>
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
                <span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section method"><div className="container"><div className="section-intro narrow"><p className="eyebrow">Método ALT</p><h2>Menos execução sem contexto. Mais decisão com método.</h2></div><div className="method-list">{[["01","Diagnosticar","Entender gargalos, oportunidades e o nível de maturidade da operação."],["02","Direcionar","Definir prioridades, posicionamento, narrativa, canais e metas."],["03","Executar","Transformar estratégia em comunicação, aquisição e rotina comercial."],["04","Acompanhar","Medir o que realmente avança a empresa e corrigir a direção."],["05","Escalar","Reinvestir em processos e canais que geram conversão e receita."]].map(([number,title,text])=><article className="method-item" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="section cases" id="cases"><div className="container"><div className="section-intro row-intro"><div><p className="eyebrow">Cases</p><h2>Estratégia aplicada a negócios reais.</h2></div><p>Os materiais e resultados definitivos serão adicionados na próxima etapa.</p></div><div className="case-grid">{cases.map((item,index)=><article className="case-card" key={item.name}><div className="case-topline"><span>Case {String(index+1).padStart(2,"0")}</span><span>{item.sector}</span></div><div className="case-visual"><span>ALT</span></div><div><p>{item.focus}</p><h3>{item.name}</h3></div></article>)}</div></div></section>

      <section className="section operation" id="operacao"><div className="container operation-layout"><div><div className="section-intro narrow"><p className="eyebrow">Operação ALT</p><h2>A operação por trás do crescimento.</h2><p>Não entregamos peças soltas. Estruturamos uma operação que conduz oportunidades até receita.</p></div><div className="operation-steps">{architecture.map((item,index)=><div className="operation-step" key={item}><span>{String(index+1).padStart(2,"0")}</span><strong>{item}</strong></div>)}</div></div><aside className="growth-panel" aria-label="Painel conceitual da operação"><div className="panel-header"><div><span>Operação integrada</span><strong>Painel de crescimento</strong></div><em>Ao vivo</em></div><div className="signal-line"/><div className="metric-grid"><div><span>Aquisição</span><strong>Meta + Google</strong></div><div><span>Relacionamento</span><strong>CRM</strong></div><div><span>Acompanhamento</span><strong>Dados</strong></div><div className="highlight"><span>Resultado</span><strong>Receita</strong></div></div><div className="progress-block"><div><span>Fluxo da operação</span><strong>Estratégia → Receita</strong></div><div className="progress"><span/></div></div></aside></div></section>

      <section className="section insights"><div className="container"><div className="section-intro narrow"><p className="eyebrow">Insights</p><h2>Ideias para empresas que querem crescer com direção.</h2></div><div className="insight-grid"><article><span>Estratégia</span><h3>Produzir mais não corrige falta de direção.</h3></article><article><span>Comercial</span><h3>Marketing sem acompanhamento desperdiça oportunidade.</h3></article><article><span>Crescimento</span><h3>Escala começa quando a empresa entende o que converte.</h3></article></div></div></section>

      <section className="diagnostic" id="diagnostico"><div className="container diagnostic-content"><p className="eyebrow">Próximo passo</p><h2>Sua empresa cresce por método ou por tentativa?</h2><p>O diagnóstico identifica onde o crescimento está travado e quais decisões precisam ser priorizadas.</p><a className="primary-cta light" href="mailto:contato@altcomunicacao.com.br?subject=Solicitação%20de%20Diagnóstico">Solicitar Diagnóstico <span>→</span></a></div></section>

      <footer><div className="container footer-top"><a className="brand brand-image footer-brand" href="#top"><img src={logo} alt="ALT Comunicação" /></a><div className="partners"><span>Kommo</span><span>Google</span><span>Meta</span><span>OpenAI</span><span>Synapse</span></div></div><div className="container footer-bottom"><p>Especialistas em diagnóstico e crescimento de empresas.</p><p>© 2026 ALT Comunicação</p></div></footer>
    </main>
  );
}
