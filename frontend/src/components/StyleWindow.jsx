import React from "react";

export default function MacTrafficLights({
  size = 12,
  gap = 8,
  showIconsOnHover = true,
  withIcons = true,
  title = "",
}) {
  const cssVars = {
    "--ml-size": `${size}px`,
    "--ml-gap": `${gap}px`,
  };

  return (
    <div className="ml-titlebar" style={cssVars} role="banner" aria-label="Barra de título estilo macOS">
      <div className="ml-left">
        <button className="ml-light ml-red" aria-label="Fechar" title="Fechar">
          {withIcons && (
            <span className={`ml-icon ${showIconsOnHover ? "ml-icon-hide" : ""}`} aria-hidden>
              {/* X */}
              <svg width="8" height="8" viewBox="0 0 8 8">
                <path d="M1 1 L7 7 M7 1 L1 7" strokeWidth="1.25" stroke="currentColor" strokeLinecap="round" />
              </svg>
            </span>
          )}
        </button>
        <button className="ml-light ml-yellow" aria-label="Minimizar" title="Minimizar">
          {withIcons && (
            <span className={`ml-icon ${showIconsOnHover ? "ml-icon-hide" : ""}`} aria-hidden>
              {/* – */}
              <svg width="8" height="8" viewBox="0 0 8 8">
                <path d="M1 4 H7" strokeWidth="1.25" stroke="currentColor" strokeLinecap="round" />
              </svg>
            </span>
          )}
        </button>
        <button className="ml-light ml-green" aria-label="Maximizar" title="Maximizar">
          {withIcons && (
            <span className={`ml-icon ${showIconsOnHover ? "ml-icon-hide" : ""}`} aria-hidden>
              {/* + */}
              <svg width="8" height="8" viewBox="0 0 8 8">
                <path d="M4 1 V7 M1 4 H7" strokeWidth="1.25" stroke="currentColor" strokeLinecap="round" />
              </svg>
            </span>
          )}
        </button>
      </div>
      {title && <div className="ml-title" title={title}>{title}</div>}

      <style>{`
        .ml-left {
          display: flex;
          align-items: center;
          gap: var(--ml-gap);
        }
        .ml-light {
          position: relative;
          width: var(--ml-size);
          height: var(--ml-size);
          border-radius: 999px;
          border: 0.5px solid rgba(0,0,0,.15);
          box-shadow: inset 0 0.5px 0 rgba(255,255,255,.9), inset 0 -0.5px 1px rgba(0,0,0,.08);
          display: grid;
          place-items: center;
          cursor: default;
        }
        .ml-light:active { transform: translateY(0.5px); }

        .ml-red    { background: radial-gradient(circle at 30% 30%, #ff8a80, #ff5f57); color: #5a0f0a; cursor: pointer; }
        .ml-yellow { background: radial-gradient(circle at 30% 30%, #ffe082, #febc2e); color: #7a4e00; cursor: pointer; }
        .ml-green  { background: radial-gradient(circle at 30% 30%, #8cf2a3, #28c840); color: #0a4d1a; cursor: pointer; }

        .ml-icon { display: grid; place-items: center; line-height: 0; transition: opacity .15s ease; }
        .ml-icon-hide { opacity: 0; }
        .ml-titlebar:hover .ml-icon-hide { opacity: 1; }

        .ml-title {
          text-align: center;
          font-size: 12px;
          color: #555;
          letter-spacing: .2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          pointer-events: none;
        }

        /* Variante opcional: cursor para arrastar (estético) */
        .ml-titlebar { cursor: default; }

        /* Suporte a alto contraste (accessibility) */
        @media (prefers-contrast: more) {
          .ml-light { border-color: rgba(0,0,0,.35); }
          .ml-title { color: #333; }
        }
      `}</style>
    </div>
  );
}
