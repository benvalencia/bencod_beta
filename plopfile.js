const reactCli = 
{
  baseApp: {
    root: 'src/app',
    component: {
      tsx: 'src/app/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
      test: 'src/app/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
      scss: 'src/app/components/{{pascalCase name}}/{{pascalCase name}}.scss',
      main: 'src/app/components/{{pascalCase name}}/index.tsx',
      index: 'src/app/components/index.tsx',
    },
    view: {
      tsx: 'src/app/views/{{pascalCase name}}/{{pascalCase name}}.tsx',
      test: 'src/app/views/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
      scss: 'src/app/views/{{pascalCase name}}/{{pascalCase name}}.scss',
      main: 'src/app/views/{{pascalCase name}}/index.tsx',
      index: 'src/app/views/index.tsx',
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
      index: 'react_cli/component/index.tsx.hbs',
      class: {
        tsx: 'react_cli/components/classComponent/classComponent.tsx.hbs',
        test: 'react_cli/components/classComponent/classComponent.test.tsx.hbs',
        scss: 'react_cli/components/classComponent/classComponent.scss.hbs',
        main: 'react_cli/components/classComponent/main.tsx.hbs',
      },
      function: {
        tsx: 'react_cli/components/functionComponent/functionComponent.tsx.hbs',
        test: 'react_cli/components/functionComponent/functionComponent.test.tsx.hbs',
        scss: 'react_cli/components/functionComponent/functionComponent.scss.hbs',
        main: 'react_cli/components/functionComponent/main.tsx.hbs',
      },
    },
    view: {
      index: 'react_cli/view/index.tsx.hbs',
      content: {
        tsx: 'react_cli/components/classComponent/classComponent.tsx.hbs',
        test: 'react_cli/components/classComponent/classComponent.test.tsx.hbs',
        scss: 'react_cli/components/classComponent/classComponent.scss.hbs',
        main: 'react_cli/components/classComponent/main.tsx.hbs',
      },
    },
    service: 'react_cli/services',
    hook: 'react_cli/hooks',
  },
}


module.exports = plop => {
  // COMPONENTS
  plop.setGenerator('function component', {
    // TYPE: FUNCTION COMPONENT
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
    plop.setGenerator('component', {
      // TYPE: CLASS COMPONENT
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
          pattern: `/* REACT_INJECT_IMPORT */`,
          template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
        },
        {
          type: 'append',
          path: reactCli.baseApp.component.index,
          pattern: `/* REACT_INJECT_EXPORT */`,
          template: `\t{{pascalCase name}},`,
        },
      ],
    })
    // VIEWS
    plop.setGenerator('view', {
      description: 'Create a view',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your view name?',
        },
      ],
      actions: [
        {
          type: 'add',
          path: reactCli.baseApp.view.tsx,
          templateFile: reactCli.reactCli.view.content.tsx,
        },
        {
          type: 'add',
          path: reactCli.baseApp.view.test,
          templateFile: reactCli.reactCli.view.content.test,
        },
        {
          type: 'add',
          path: reactCli.baseApp.view.scss,
          templateFile: reactCli.reactCli.view.content.scss,
        },
        {
          type: 'add',
          path: reactCli.baseApp.view.main,
          templateFile: reactCli.reactCli.view.content.main,
        },
        {
          type: 'add',
          path: reactCli.baseApp.view.index,
          templateFile: reactCli.reactCli.view.index,
          skipIfExists: true,
        },
        {
          type: 'append',
          path: reactCli.baseApp.view.index,
          pattern: `/* PLOP_INJECT_IMPORT */`,
          template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
        },
        {
          type: 'append',
          path: reactCli.baseApp.view.index,
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