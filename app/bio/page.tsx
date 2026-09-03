import type { Metadata } from "next";

const siteUrl = "https://suapage.saratech.chatgpt.site";

export const metadata: Metadata = {
  title: "Suapage Bio — Sua marca inteira em um único link",
  description: "Crie uma bio personalizada para Instagram com seus links, serviços, produtos e contatos em uma experiência feita para celular.",
  keywords: ["link na bio", "mini site para Instagram", "bio personalizada", "página para Instagram", "Suapage Bio"],
  alternates: { canonical: `${siteUrl}/bio` },
  openGraph: {
    title: "Suapage Bio — Sua marca inteira em um único link",
    description: "Uma mini experiência digital com a estética e a estratégia da sua marca.",
    url: `${siteUrl}/bio`,
    siteName: "Suapage",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Suapage Bio — Sua marca inteira em um único link",
    description: "Uma bio personalizada para apresentar, organizar e converter seus visitantes.",
  },
};

const bioSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Suapage Bio",
  description: "Bio personalizada para Instagram com links, serviços, produtos e contatos.",
  brand: { "@type": "Brand", name: "Suapage" },
  url: `${siteUrl}/bio`,
  category: "Instagram bio page",
};

export default function BioPage() {
  return <main className="bio-product-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bioSchema) }} /><nav className="bio-nav shell"><a className="brand" href="/"><span className="brand-mark">S</span><span>suapage<span className="brand-dot">.</span></span></a><a className="bio-back" href="/">← voltar para a Suapage</a><a className="nav-cta" href="/?source=bio#orcamento">Quero minha Bio <span>↗</span></a></nav><section className="bio-hero-product shell"><div className="bio-product-copy"><div className="kicker"><span className="pulse" /> um produto Suapage</div><h1>Sua marca inteira<br /><em>em um único link.</em></h1><p>Uma bio personalizada para quem transforma atenção em relacionamento, confiança e escolha.</p><div className="bio-product-actions"><a className="button button-primary" href="/?source=bio#orcamento">Quero criar minha Bio <span>↗</span></a><a className="text-link" href="#como-funciona">Como funciona <span>↓</span></a></div><div className="bio-product-proof"><span>estética própria</span><span>·</span><span>feita para celular</span><span>·</span><span>editável</span></div></div><div className="bio-demo-wrap"><div className="bio-demo-shadow" /><div className="bio-demo"><div className="demo-tape" /><div className="demo-avatar">S</div><b>seunegocio</b><span className="demo-description">nutrição que cabe na sua rotina</span><div className="demo-chip">+ minha apresentação</div><div className="demo-link">Agende sua consulta <span>↗</span></div><div className="demo-link">Conheça meu trabalho <span>↗</span></div><div className="demo-link dark">Fale comigo no WhatsApp <span>↗</span></div><div className="demo-social">◎　◉　◌</div><small>feito com <strong>suapage.</strong></small></div></div></section><section className="bio-product-section" id="como-funciona"><div className="shell"><div className="overline">não é só um agregador de links</div><h2>É uma pequena página<br /><em>com a cara do seu negócio.</em></h2><div className="bio-benefits"><div><span>01</span><h3>Organiza sua atenção</h3><p>Todos os caminhos importantes ficam em um só lugar, com clareza para quem chega pelo Instagram.</p></div><div><span>02</span><h3>Apresenta seu trabalho</h3><p>Inclua serviços, produtos, agenda, portfólio, depoimentos e a mensagem que faz sentido para você.</p></div><div><span>03</span><h3>Continua nas suas mãos</h3><p>Troque links, textos e botões quando quiser. Sua bio acompanha seus próximos movimentos.</p></div></div></div></section><section className="bio-product-pricing shell"><div><div className="overline">duas formas de começar</div><h2>Escolha o nível<br /><em>da sua presença.</em></h2></div><div className="bio-plans"><article><span className="plan-label">essencial</span><h3>Bio Links</h3><p>Para quem precisa organizar links, contatos e redes sociais em uma página bonita e funcional.</p><a href="/?source=bio#orcamento">Quero começar <span>↗</span></a></article><article className="plan-dark"><span className="plan-label">personalizada</span><h3>Bio Signature</h3><p>Para quem quer uma experiência visual própria, alinhada ao site, serviço ou produto da sua marca.</p><a href="/?source=bio#orcamento">Quero minha Signature <span>↗</span></a></article></div></section><section className="bio-product-final"><div className="shell"><div className="overline">o seu Instagram merece um destino</div><h2>Vamos criar um link<br /><em>que parece você?</em></h2><a className="button button-primary" href="/?source=bio#orcamento">Solicitar minha Bio <span>↗</span></a></div></section><footer className="footer shell"><a className="brand" href="/"><span className="brand-mark">S</span><span>suapage<span className="brand-dot">.</span></span></a><span>sites & experiências digitais</span><span>© 2026 Suapage</span></footer></main>;
}
