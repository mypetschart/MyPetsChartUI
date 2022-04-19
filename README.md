# MyPetsChart

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Fake API
Run npm run server to start the dev mock api

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## v1
v1 design by Connor Peters (design@mainsailstudio.com)
State is managed by ngrx Data because I wanted to try it. Might honestly make more sense to pull that out and use vaninlla ngrx with Entities. I've since found that to be more flexible than Data, with only slightly more technical complexity.