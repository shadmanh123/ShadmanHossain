import "./Header.css";

export default function Header() {
  return (
    <>
      {/* Hidden SVG filter: fractal-noise displacement gives the glass its
          refractive, liquid edge-warp (Chromium honors it in backdrop-filter;
          Safari/Firefox gracefully fall back to blur + saturate). */}
      <svg className="glass-defs" aria-hidden="true" focusable="false">
        <defs>
          <filter
            id="liquid-glass"
            x="-35%"
            y="-35%"
            width="170%"
            height="170%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.011 0.014"
              numOctaves={2}
              seed={7}
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation={1.4} result="softNoise" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="softNoise"
              scale={40}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <header className="header">
        <span className="header__sheen" aria-hidden="true" />
        <a href="#top" className="header__prompt">
          shadman@sfu:~$
        </a>
        <nav className="header__nav">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact" className="header__nav-cta">
            Contact
          </a>
        </nav>
      </header>
    </>
  );
}
