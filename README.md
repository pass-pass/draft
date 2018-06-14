# introduction

## for you
- I'm looking for a new way to think programming mixed with data in the same representation
- NEED YOUR HELP: to better formalize the DSL (kinda DSL) (kinda graph) (kinda ast) (kinda tree)
- 
- Are you inspire ?

## to understand

- one unit of code (like a function) : ```<()>```
  example: ```<(...data)>```

- two unit of code communicating : ```<()> () <()>```
  example: ```<(...input:data)> (middleware: reducer || map || filter || ...) <(...output:data)>```

- expression or transformer: ```(get firstname)```
- another : ```(get (firstname lastname))```

- one unit of code with behavior: ```<(firstname contains("John"))>```
- one unit of code with behaviors: ```<(firstname contains("John") && lastname contains("DOE"))>```

# alternative syntaxe

## example

### First
```(in)_(port)_(out)```

### Second
```(in)_(middleware)_(out)```

## 


# simple form

## first draft

```<(name, (price euro))(product(1))>```

## second draft

```<(name, (price euro))> () <(product(1))>```

# composed form

## first draft

```
const xxx = ( product(n) <(
  name,
  (price euro)
)> (  ) <(
  all(
    products where(
         (date is("2018") || between(2010 2020))
      && (name is("iphone"))
    )
  )
)> ( product(n) )
```

## second draft

```
<is(auth): Page (
  (
    name,
    (price euro)
  )><(
    all(
      products where(
           (date is("2018") || between(2010 2020))
        && (name is("iphone"))
      )
    )
  )
)>
```

## third draft

```
const xxx = ( product(n) ) <(
  name,
  (price euro)
)> (  ) <(
  all(
    products where(
         (date is("2018") || between(2010 2020))
      && (name is("iphone"))
    )
  )
)> ( product(n) )
```

# new thinking

## first
state catchAll = (All: State) => {
  - (Pattern: All)(Link: State)
}

## second

state catchAll = (All: State) => {
  - (State)
    (State) => {
      - (pattern)(link)
    }
}

## logger

state catchAll = (All: State) => {
  - All: (log) => {
    - Product: (name)
    - Login: (user username)
  })
}

## draft
(state){
  - Waiting({ progress >= (10)}) : 
  - Loading(State) : 
  - error : 
  - Never : 
  - All : catchAll
  - Some : 
}