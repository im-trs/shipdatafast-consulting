document.addEventListener("DOMContentLoaded", () => {
  const headerHost = document.querySelector('[data-site-shell="header"]');
  const footerHost = document.querySelector('[data-site-shell="footer"]');

  if (headerHost) {
    headerHost.innerHTML = `
    <header class="w-full bg-surface border-b-2 border-on-surface sticky top-0 z-50">
      <div class="max-w-[1360px] mx-auto px-margin-desktop flex items-center justify-between h-16 w-full">
        <div class="flex items-center gap-6">
          <a class="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface uppercase focus:outline-none focus:ring-2 focus:ring-primary" href="/"><span class="bg-[#D7FF3F] text-on-surface px-2 py-0.5 inline-block font-bold">SHIPDATAFAST</span></a>
          <span class="hidden lg:inline-block font-label-caps text-label-caps border border-on-surface px-1.5 py-0.5 text-on-surface-variant bg-surface-container-low">SPEC 2.4.0</span>
        </div>

        <nav class="hidden md:flex items-center gap-8 text-on-surface-variant font-label-caps text-label-caps" aria-label="Main navigation">
          <details class="relative group">
            <summary class="list-none cursor-pointer text-primary border-b-2 border-primary font-semibold pb-1 flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary">
              Services
              <span class="material-symbols-outlined text-[14px]">expand_more</span>
            </summary>
            <div class="absolute top-full left-0 bg-surface border-2 border-on-surface w-56 shadow-none mt-1 p-2 space-y-1 z-50">
              <a class="block px-3 py-1.5 hover:bg-surface-container-high text-on-surface text-body-sm font-body-sm" href="/services/data-engineering/">Data Engineering</a>
              <a class="block px-3 py-1.5 hover:bg-surface-container-high text-on-surface text-body-sm font-body-sm" href="/services/data-validation/">Data Validation</a>
              <a class="block px-3 py-1.5 hover:bg-surface-container-high text-on-surface text-body-sm font-body-sm" href="/services/data-reconciliation/">Data Reconciliation</a>
            </div>
          </details>

          <details class="relative group">
            <summary class="list-none cursor-pointer text-on-surface-variant hover:text-on-surface pb-1 transition-colors flex items-center gap-1 focus:outline-none">
              Products
              <span class="material-symbols-outlined text-[14px]">expand_more</span>
            </summary>
            <div class="absolute top-full left-0 bg-surface border-2 border-on-surface w-56 shadow-none mt-1 p-2 space-y-1 z-50">
              <a class="block px-3 py-1.5 hover:bg-surface-container-high text-on-surface text-body-sm font-body-sm" href="/products/reconciliation/">Data Reconciliation</a>
              <a class="block px-3 py-1.5 hover:bg-surface-container-high text-on-surface text-body-sm font-body-sm" href="/products/validation/">Data Validation</a>
              <a class="block px-3 py-1.5 hover:bg-surface-container-high text-on-surface text-body-sm font-body-sm" href="/products/">Product Overview</a>
              <a class="block px-3 py-1.5 hover:bg-surface-container-high text-on-surface text-body-sm font-body-sm" href="/checklist/">Checklist</a>
            </div>
          </details>

          <a class="text-on-surface-variant hover:text-on-surface pb-1 transition-colors" href="/financial-services/">Financial Services</a>
          <a class="text-on-surface-variant hover:text-on-surface pb-1 transition-colors" href="/about/">About</a>
        </nav>

        <div class="hidden md:flex items-center gap-3">
          <a class="bg-on-surface text-on-primary border border-on-surface px-5 py-2 text-body-sm font-mono-data-md text-mono-data-md font-semibold hover:bg-primary-container hover:text-on-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-none" href="/contact/">Discuss a data problem</a>
        </div>

        <div class="md:hidden">
          <details class="relative">
            <summary class="list-none cursor-pointer border border-on-surface px-3 py-1.5 font-label-caps text-label-caps">Menu</summary>
            <div class="absolute right-0 top-full mt-2 w-64 bg-surface border-2 border-on-surface p-2 space-y-1 z-50">
              <a class="block px-3 py-1.5 hover:bg-surface-container-high" href="/services/data-engineering/">Data Engineering</a>
              <a class="block px-3 py-1.5 hover:bg-surface-container-high" href="/services/data-validation/">Data Validation</a>
              <a class="block px-3 py-1.5 hover:bg-surface-container-high" href="/services/data-reconciliation/">Data Reconciliation</a>
              <a class="block px-3 py-1.5 hover:bg-surface-container-high" href="/products/">Products</a>
              <a class="block px-3 py-1.5 hover:bg-surface-container-high" href="/products/reconciliation/">Data Reconciliation Product</a>
              <a class="block px-3 py-1.5 hover:bg-surface-container-high" href="/products/validation/">Data Validation Product</a>
              <a class="block px-3 py-1.5 hover:bg-surface-container-high" href="/checklist/">Checklist</a>
              <a class="block px-3 py-1.5 hover:bg-surface-container-high" href="/financial-services/">Financial Services</a>
              <a class="block px-3 py-1.5 hover:bg-surface-container-high" href="/about/">About</a>
              <a class="block px-3 py-1.5 hover:bg-surface-container-high" href="/contact/">Contact</a>
            </div>
          </details>
        </div>
      </div>
    </header>`;
  }

  if (footerHost) {
    footerHost.innerHTML = `
    <footer class="w-full bg-surface-container-low border-t-2 border-on-surface">
      <div class="max-w-[1360px] mx-auto px-margin-desktop py-space-xl w-full grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop">
        <div class="md:col-span-5 space-y-3">
          <div class="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface uppercase">SHIPDATAFAST</div>
          <p class="font-body-sm text-body-sm text-on-surface-variant max-w-sm">© 2025 ShipDataFast Consulting Inc. All rights reserved. Structural integrity and data ledger reconciliation architecture.</p>
          <p class="font-mono-data-md text-[11px] text-on-surface-variant pt-2">ShipDataFast is a trading style of TR Seeds Ltd.</p>
        </div>
        <div class="md:col-span-2 space-y-2">
          <span class="font-label-caps text-label-caps text-on-surface uppercase font-bold block mb-1">Services</span>
          <ul class="space-y-1 font-body-sm text-body-sm">
            <li><a class="text-on-surface-variant hover:text-on-surface transition-colors" href="/services/data-engineering/">Data Engineering</a></li>
            <li><a class="text-on-surface-variant hover:text-on-surface transition-colors" href="/services/data-validation/">Data Validation</a></li>
            <li><a class="text-on-surface-variant hover:text-on-surface transition-colors" href="/services/data-reconciliation/">Data Reconciliation</a></li>
            <li><a class="text-on-surface-variant hover:text-on-surface transition-colors" href="/financial-services/">Financial Services</a></li>
          </ul>
        </div>
        <div class="md:col-span-2 space-y-2">
          <span class="font-label-caps text-label-caps text-on-surface uppercase font-bold block mb-1">Products</span>
          <ul class="space-y-1 font-body-sm text-body-sm">
            <li><a class="text-on-surface-variant hover:text-on-surface transition-colors" href="/products/reconciliation/">Data Reconciliation</a></li>
            <li><a class="text-on-surface-variant hover:text-on-surface transition-colors" href="/products/validation/">Data Validation</a></li>
            <li><a class="text-on-surface-variant hover:text-on-surface transition-colors" href="/products/">Product Overview</a></li>
            <li><a class="text-on-surface-variant hover:text-on-surface transition-colors" href="/checklist/">Checklist</a></li>
          </ul>
        </div>
        <div class="md:col-span-3 space-y-2">
          <span class="font-label-caps text-label-caps text-on-surface uppercase font-bold block mb-1">Governance</span>
          <ul class="space-y-1 font-body-sm text-body-sm">
            <li><a class="text-on-surface-variant hover:text-on-surface transition-colors" href="/about/">About</a></li>
            <li><a class="text-on-surface-variant hover:text-on-surface transition-colors" href="/contact/">Contact</a></li>
            <li><a class="text-on-surface-variant hover:text-on-surface transition-colors" href="/privacy-policy/">Privacy policy</a></li>
            <li><a class="text-on-surface-variant hover:text-on-surface transition-colors" href="/financial-services/">Financial services</a></li>
            <li><a class="text-on-surface-variant hover:text-on-surface transition-colors" href="/tos/">Terms of service</a></li>
          </ul>
        </div>
      </div>
    </footer>`;
  }
});
