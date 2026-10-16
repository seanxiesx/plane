/*
 * Maps Plane's semantic token names onto Tailwind utilities so the prototypes
 * can be authored with the same class vocabulary the real app uses
 * (bg-surface-1, text-tertiary, border-subtle, …).
 * Load AFTER the Tailwind Play CDN script.
 */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        canvas: "var(--bg-canvas)",
        "surface-1": "var(--bg-surface-1)",
        "surface-2": "var(--bg-surface-2)",
        "layer-1": "var(--bg-layer-1)",
        "layer-1-hover": "var(--bg-layer-1-hover)",
        "layer-2": "var(--bg-layer-2)",
        "layer-2-hover": "var(--bg-layer-2-hover)",
        "layer-3": "var(--bg-layer-3)",
        "layer-3-hover": "var(--bg-layer-3-hover)",
        "transparent-hover": "var(--bg-layer-transparent-hover)",
        "transparent-selected": "var(--bg-layer-transparent-selected)",
        "accent-primary": "var(--bg-accent-primary)",
        "accent-primary-hover": "var(--bg-accent-primary-hover)",
        "accent-subtle": "var(--bg-accent-subtle)",
        "accent-subtle-hover": "var(--bg-accent-subtle-hover)",
        success: "var(--bg-success-primary)",
        "success-subtle": "var(--bg-success-subtle)",
        warning: "var(--bg-warning-primary)",
        "warning-subtle": "var(--bg-warning-subtle)",
        danger: "var(--bg-danger-primary)",
        "danger-subtle": "var(--bg-danger-subtle)",
        "info-subtle": "var(--bg-info-subtle)",
        inverse: "var(--bg-inverse)",
        /* text namespace */
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        tertiary: "var(--text-tertiary)",
        placeholder: "var(--text-placeholder)",
        "on-color": "var(--text-on-color)",
        "accent-text": "var(--text-accent-primary)",
        link: "var(--text-link)",
        "success-text": "var(--text-success)",
        "warning-text": "var(--text-warning)",
        "danger-text": "var(--text-danger)",
        /* borders */
        subtle: "var(--border-subtle)",
        "subtle-1": "var(--border-subtle-1)",
        strong: "var(--border-strong)",
        "accent-border": "var(--border-accent)",
        /* priority + state accents */
        "p-urgent": "var(--priority-urgent)",
        "p-high": "var(--priority-high)",
        "p-medium": "var(--priority-medium)",
        "p-low": "var(--priority-low)",
        "p-none": "var(--priority-none)",
        "st-completed": "var(--state-completed)",
        "st-started": "var(--state-started)",
        "st-unstarted": "var(--state-unstarted)",
        "st-backlog": "var(--state-backlog)",
        "st-cancelled": "var(--state-cancelled)",
        /* sticky fills */
        "sticky-gray": "var(--sticky-gray)",
        "sticky-peach": "var(--sticky-peach)",
        "sticky-pink": "var(--sticky-pink)",
        "sticky-orange": "var(--sticky-orange)",
        "sticky-green": "var(--sticky-green)",
        "sticky-blue": "var(--sticky-blue)",
        "sticky-indigo": "var(--sticky-indigo)",
        "sticky-purple": "var(--sticky-purple)",
        "sticky-ink": "var(--sticky-ink)",
      },
      fontFamily: {
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        raised: "var(--shadow-raised)",
        overlay: "var(--shadow-overlay)",
      },
      borderRadius: { md: "6px", lg: "8px", xl: "10px" },
      fontSize: {
        11: "0.6875rem",
        13: "0.8125rem",
        15: "0.9375rem",
      },
    },
  },
};

/* Shared: theme toggle + Lucide render. Call PlaneProto.init() at end of body. */
window.PlaneProto = {
  init() {
    const saved = localStorage.getItem("plane-proto-theme") || "light";
    document.documentElement.setAttribute("data-theme", saved);
    this.renderIcons();
    const btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", () => {
        const now = document.documentElement.getAttribute("data-theme");
        const next = now === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("plane-proto-theme", next);
        this.renderIcons();
      });
    }
  },
  renderIcons() {
    if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 2 } });
  },
};
