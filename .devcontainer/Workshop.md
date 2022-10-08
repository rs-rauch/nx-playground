# Workshop series

## Development container

- No need to install dependencies globally
- Simple setup
- No need to change the node version ever again

## NX - What and why?

- Intro
- Getting started

```bash
> npx create-nx-workspace@latest -a

✔ Workspace name (e.g., org name)     · nx-playground
✔ What to create in the new workspace · apps
✔ Which package manager to use        · npm
✔ Main branch name                    · main
✔ Enable distributed caching to make your CI faster · No
```

- You friend for unit and e2e tests

```bash
nx generate @nrwl/angular:application --help
```

```bash
nx generate @nrwl/angular:application ng-state-example --style=scss --addTailwind --routing --standalone --standaloneConfig --no-interactive
```

## NGRX - Reactive State for Angular

- What is state?
- Start managing state
- Global state
- Component state

## Styling you app with TailwindCSS

- Basic concept
- Getting started
