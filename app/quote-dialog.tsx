"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";

export const whatsappNumber = "5591991984474";
export const whatsappHref = `https://wa.me/${whatsappNumber}`;

export function QuoteDialog({ onClose, initialSolution = "Landing de Serviço", includeBio = false }: { onClose: () => void; initialSolution?: string; includeBio?: boolean }) {
  const firstField = useRef<HTMLInputElement>(null);
  const [bio, setBio] = useState(includeBio);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstField.current?.focus();
    return () => { document.body.style.overflow = overflow; previous?.focus(); };
  }, []);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Olá, Suapage! Sou ${String(data.get("name")).trim()}.\nMeu negócio: ${String(data.get("business")).trim()}.\nTenho interesse em ${data.get("solution")}${bio ? " + Bio personalizada" : ""}.\nGostaria de conversar sobre escopo, prazo e orçamento.`;
    window.open(`${whatsappHref}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }
  return <div className="modal-backdrop" role="presentation" onClick={event => { if (event.target === event.currentTarget) onClose(); }} onKeyDown={event => {
    if (event.key === "Escape") onClose();
    if (event.key === "Tab") {
      const elements = event.currentTarget.querySelectorAll<HTMLElement>('button, input, select, a[href]');
      const first = elements[0], last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }
  }}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="quote-title"><button className="modal-close" onClick={onClose} aria-label="Fechar formulário">×</button><div className="overline">atendimento direto</div><h2 id="quote-title">Vamos conversar<br /><em>sobre seu projeto?</em></h2><p>Organize seu pedido e continue no WhatsApp. Você revisa a mensagem antes de enviar.</p><form onSubmit={submit}><label>Seu nome<input ref={firstField} name="name" autoComplete="name" required maxLength={100} placeholder="Como podemos chamar você?" /></label><label>Seu negócio ou área de atuação<input name="business" required maxLength={180} placeholder="Ex.: fotografia, advocacia, saúde" /></label><label>O que você quer criar?<select name="solution" defaultValue={initialSolution}><option>Landing de Serviço</option><option>Landing de Produto</option><option>Site Institucional</option><option>Ainda não sei</option></select></label><label className="quote-bio-choice"><input type="checkbox" checked={bio} onChange={event => setBio(event.target.checked)} />Incluir Bio personalizada (+R$ 490)</label><button className="button button-primary" type="submit">Continuar no WhatsApp <span>↗</span></button></form><a className="quote-direct" href={whatsappHref} target="_blank" rel="noopener noreferrer">Prefiro conversar direto no WhatsApp ↗</a></div></div>;
}
