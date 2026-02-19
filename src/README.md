playwright-demo/
│
├─ src/
│   ├─ pages/           # Page Object Model classes
│   │   ├─ LoginPage.js
│   │   ├─ Inventorypage.js
│   │   └─ Checkoutpage.js
│   │
│   ├─ utils/           # Utility functions (helpers, API clients, etc.)
│   │   ├─ browserUtils.js
│   │   ├─ logger.js
│   │   └─ ...
│   │
│   ├─ fixtures/        # Test fixtures (custom test setup)
│   │   ├─ testFixtures.js
│   │   └─ ...
│   │
│   ├─ types/           # Type definitions for TypeScript support
│   │   └─ global.d.ts
│   │
│   └─ data/            # Test data
│       ├─ testData.json
│       └─ ...
│
├─ tests/               # Test specifications
│   ├─ login.spec.js
│   ├─ dashboard.spec.js
│   └─ ...
│
├─ reports/             # Test execution reports
│   └─ ...
│
├─ playwright.config.js # Playwright configuration
├─ package.json         # Project dependencies
├─ README.md
└─ .gitignore
