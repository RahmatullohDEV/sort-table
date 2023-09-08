let a = 5;
let b = 10;

// document.getElementById("result").innerHTML = `<p>${a+b}</p>`;
// const box = document.getElementsByClassName("box");

function calculation ( operation )
{
  const a = document.getElementById( "one" ).value;
  const b = document.getElementById( "two" ).value;
  const c = parseInt( a );
  const d = parseInt( b );

  let result;
  if ( operation === 'add1' )
  {
    result = c + d;
  } else if ( operation === 'add2' )
  {
    result = c - d;
  } else if ( operation === 'add3' )
  {
    result = c * d;
  } else if ( operation === 'add4' )
  {
    result = c / d;
  }

  document.getElementById( "result" ).innerHTML = `Natija: ${ result }`;
}

function clearWork ()
{
  document.getElementById( "result" ).innerHTML = "Natija: 0";
}


