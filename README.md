<(name, (price euro))(product(1))>

--


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

--

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