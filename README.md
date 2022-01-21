
# Fundación ERP

(en proceso)

Este es el artículo de referencia para la creación de la estructura de la plataforma:
[https://michalzalecki.com/elegant-frontend-architecture/]



```
src/
├── pages
├── ui
├── domain
├── infrastructure
└── utils
```

## PÁGINAS
  

## UI

Pintan la info por props y no hacen ninguna llamada a API o necesitan contexto para pintarse.

- Forms
- Layout

## DOMAIN

Pueden tener componentes de UI y gestionan sus propios hooks, fetch e info. No pueden depender de otro dominio.

```


```

- navigation

## INFRASTRUCTURE

```
├── theme
├── hooks
├── context
├── constants
└── hooks
```
