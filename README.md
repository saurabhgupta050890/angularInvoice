# Setup

Install latest NodeJS

Run `npm intsall`

# Marco Polo

Run `npm run app:program`

# User Story

An Angular Application that will run in browser 

**Note**: Use latest chrome or Firefox to run the application

How to run :

1. Run `npm run app:angular`
2. Open URL  **`localhost:8080\`** in browser
3. Input file present at  `data/input_user_story_1.txt`


# Angular 2 Questions

**What is the difference between imports, declarations, and providers ?**

> Every Angular 2 Application is consists of a root `@NgModule`.
> `@NgModule` contains metadata describing how to compile the template and create injectors at runtime
> `@NgModule` can have imports, declarations, provides, pipes , exports etc. 

> `imports`: If we need to use components from external modules (code Angular or 3rd party) then we need to add them them to imports.

> `declarations`: Indiciates which components, directives and pipes belongs to current module
>  Selectors of directives, components or pipes are only matched against the HTML if they are declared or imported

> `providers`:  Services are added to it to make them available for Dependency Injection. 
> Services are injected into other services, directives and components


**What is the difference between components, directives, models, modules, and services?**

> `Directives`: Directives are markers on DOM which are used to modify or transform the DOM in a angular application
> There are three kinds of directives : Structural, Attribute and Components

> `Components`: are a kind of directives which always have a template associated with them.
> Angular application have atleast one root Component

> `Modules`: Every angular application have atleast one root module. 
> Angular module wraps connected Components, directives, services, pipes etc. into a single unit

> `Services`: A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well.
> Angular distinuieshes Services from components as Services don't have any view related functionality

> `Models`: Models in Angular are used for data binding. Their purpose is to bind data to the view templates in the app.
> When the existing model changes angular made changes in the view also. Models can also have 2 way data bindings

