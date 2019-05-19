const reactCli = 
{
  baseApp: {
    root: 'src/app',
    component: {
      tsx: 'src/app/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
      test: 'src/app/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
      scss: 'src/app/components/{{pascalCase name}}/{{pascalCase name}}.module.scss',
      main: 'src/app/components/{{pascalCase name}}/index.tsx',
      index: 'src/app/components/index.tsx',
    },
    page: {
      tsx: 'src/app/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
      test: 'src/app/pages/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
      scss: 'src/app/pages/{{pascalCase name}}/{{pascalCase name}}.module.scss',
      main: 'src/pages/{{pascalCase name}}/index.tsx',
      index: 'src/app/pages/index.tsx',
    },
    service: {
      tsx: 'src/services/{{camelCase name}}.tsx',
      test: 'src/services/{{camelCase name}}.test.tsx',
      index: 'src/services/index.tsx',
    },
    hook: {
      tsx: 'src/hooks/{{camelCase name}}.tsx',
      index: 'src/hooks/index.tsx',
    },
  },

  reactCli: {
    root: 'react_cli',
    component: {
      index: 'react_cli/components/index.tsx.hbs',
      class: {
        tsx: 'react_cli/components/classComponent/classComponent.ts.hbs',
        test: 'react_cli/components/classComponent/classComponent.test.ts.hbs',
        scss: 'react_cli/components/classComponent/classComponent.module.scss.hbs',
        main: 'react_cli/components/classComponent/main.tsx.hbs',
      },
      function: {
        tsx: 'react_cli/components/functionComponent/functionComponent.tsx.hbs',
        test: 'react_cli/components/functionComponent/functionComponent.test.tsx.hbs',
        scss: 'react_cli/components/functionComponent/functionComponent.module.scss.hbs',
        main: 'react_cli/components/functionComponent/main.tsx.hbs',
      },
      base: {
        tsx: 'react_cli/components/Component.tsx.hbs',
        test: 'react_cli/components/Component.test.tsx.hbs',
        scss: 'react_cli/components/Component.module.scss.hbs',
      },
    },
    page: 'react_cli/pages',
    service: 'react_cli/services',
    hook: 'react_cli/hooks',
  },
}


module.exports = plop => {
  // COMPONENTS
  plop.setGenerator('function component', {
    // FUNCTION COMPONENT
    description: 'Create a reusable function component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your function component name?',
        },
      ],
      actions: [
        {
          type: 'add',
          path: reactCli.baseApp.component.tsx,
          templateFile: reactCli.reactCli.component.function.tsx,
        },
        {
          type: 'add',
          path: reactCli.baseApp.component.test,
          templateFile: reactCli.reactCli.component.function.test,
        },
        {
          type: 'add',
          path: reactCli.baseApp.component.scss,
          templateFile: reactCli.reactCli.component.function.scss,
        },
        {
          type: 'add',
          path: reactCli.baseApp.component.main,
          templateFile: reactCli.reactCli.component.function.main,
        },
        {
          type: 'add',
          path: reactCli.baseApp.component.index,
          templateFile: reactCli.reactCli.component.index,
          skipIfExists: true,
        },
        {
          type: 'append',
          path: reactCli.baseApp.component.index,
          pattern: `/* PLOP_INJECT_IMPORT */`,
          template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
        },
        {
          type: 'append',
          path: reactCli.baseApp.component.index,
          pattern: `/* PLOP_INJECT_EXPORT */`,
          template: `\t{{pascalCase name}},`,
        },
      ],
    })
    plop.setGenerator('class component', {
      // CLASS COMPONENT
      description: 'Create a reusable class component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your class component name?',
        },
      ],
      actions: [
        {
          type: 'add',
          path: reactCli.baseApp.component.tsx,
          templateFile: reactCli.reactCli.component.class.tsx,
        },
        {
          type: 'add',
          path: reactCli.baseApp.component.test,
          templateFile: reactCli.reactCli.component.class.test,
        },
        {
          type: 'add',
          path: reactCli.baseApp.component.scss,
          templateFile: reactCli.reactCli.component.class.scss,
        },
        {
          type: 'add',
          path: reactCli.baseApp.component.main,
          templateFile: reactCli.reactCli.component.class.main,
        },
        {
          type: 'add',
          path: reactCli.baseApp.component.index,
          templateFile: reactCli.reactCli.component.index,
          skipIfExists: true,
        },
        {
          type: 'append',
          path: reactCli.baseApp.component.index,
          pattern: `/* PLOP_INJECT_IMPORT */`,
          template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
        },
        {
          type: 'append',
          path: reactCli.baseApp.component.index,
          pattern: `/* PLOP_INJECT_EXPORT */`,
          template: `\t{{pascalCase name}},`,
        },
      ],
    })
    // PAGES
    plop.setGenerator('page', {
      description: 'Create a page',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your page name?',
        },
      ],
      actions: [
        {
          type: 'add',
          path: reactCli.baseApp.page.tsx,
          templateFile:
            'plop-templates/Page/Page.js.hbs',
        },
        {
          type: 'add',
          path: reactCli.baseApp.page.test,
          templateFile:
            'plop-templates/Page/Page.test.js.hbs',
        },
        {
          type: 'add',
          path: reactCli.baseApp.page.scss,
          templateFile:
            'plop-templates/Page/Page.module.css.hbs',
        },
        {
          type: 'add',
          path: reactCli.baseApp.page.main,
          templateFile: 'plop-templates/Page/index.js.hbs',
        },
        {
          type: 'add',
          path: reactCli.baseApp.page.index,
          templateFile: 'plop-templates/injectable-index.js.hbs',
          skipIfExists: true,
        },
        {
          type: 'append',
          path: reactCli.baseApp.page.index,
          pattern: `/* PLOP_INJECT_IMPORT */`,
          template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
        },
        {
          type: 'append',
          path: reactCli.baseApp.page.index,
          pattern: `/* PLOP_INJECT_EXPORT */`,
          template: `\t{{pascalCase name}},`,
        },
      ],
    })
    // SERVICES
    plop.setGenerator('service', {
      description: 'Create service',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your service name?',
        },
      ],
      actions: [
        {
          type: 'add',
          path: reactCli.baseApp.service.tsx,
          templateFile: 'plop-templates/service.js.hbs',
        },
        {
          type: 'add',
          path: reactCli.baseApp.service.test,
          templateFile: 'plop-templates/service.test.js.hbs',
        },
        {
          type: 'add',
          path: reactCli.baseApp.service.index,
          templateFile: 'plop-templates/injectable-index.js.hbs',
          skipIfExists: true,
        },
        {
          type: 'append',
          path: reactCli.baseApp.service.index,
          pattern: `/* PLOP_INJECT_IMPORT */`,
          template: `import {{camelCase name}} from './{{camelCase name}}';`,
        },
        {
          type: 'append',
          path: reactCli.baseApp.service.index,
          pattern: `/* PLOP_INJECT_EXPORT */`,
          template: `\t{{camelCase name}},`,
        }
      ],
    })
    // HOOKS
    plop.setGenerator('hook', {
      description: 'Create a custom react hook',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your hook name?',
        },
      ],
      actions: [
        {
          type: 'add',
          path: reactCli.baseApp.hook.tsx,
          templateFile: 'plop-templates/hook.js.hbs',
        },
        {
          type: 'add',
          path: reactCli.baseApp.hook.index,
          templateFile: 'plop-templates/injectable-index.js.hbs',
          skipIfExists: true,
        },
        {
          type: 'append',
          path: reactCli.baseApp.hook.index,
          pattern: `/* PLOP_INJECT_IMPORT */`,
          template: `import {{camelCase name}} from './{{camelCase name}}';`,
        },
        {
          type: 'append',
          path: reactCli.baseApp.hook.index,
          pattern: `/* PLOP_INJECT_EXPORT */`,
          template: `\t{{camelCase name}},`,
        }
      ],
    })
  }