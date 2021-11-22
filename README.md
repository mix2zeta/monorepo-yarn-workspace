# monorepo-yarn-workspace

https://classic.yarnpkg.com/lang/en/docs/workspaces/


## Code

yarn setup

```sh
yarn install
yarn compile
```

to run project
```sh
node ./app/projectA
node ./app/projectB
```

### project A
- project A is link to `Library` with yarn workspace
- only need to setup in `projectA/package.json`
- Is not real time update need to `yarn install` to update Lib
- cleaner when build into dist and docker image.

To add depend lib use
```sh
yarn workspaces info
yarn workspace awesome-package add react react-dom # add --dev
yarn workspace web-project remove some-package # remove
```

### project B
- Link via `typescript alias`
- realtime update
- path is little mess up when build.
---

## Structure expand


---
## Ops

```sh
yarn run publish # Use this Repo workflow to create docker image
yarn run deploy # Use `infra` repo to deploy image to server
```

Link to https://github.com/mix2zeta/mock-infra via github-cli