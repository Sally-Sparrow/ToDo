//alert( 'fuck css' );


// --------- COLOR INFO -------------
let info = document.querySelector( '#colorinfo' );
info.addEventListener( 'click', showInfo );
function showInfo( event ){
    alert( 'PALETTE: https://www.colourlovers.com/palette/559428/lucky_bubble_gum' );
}


// --------- RECOGER TAREA -----------
let putItOff = document.querySelector( '#botonposponer' );

putItOff.addEventListener( 'click', getCrap );
function getCrap( event ){
    event.preventDefault();
    let newCrap = document.querySelector( '#nueva' ).value;
    let crapPriority = document.querySelector( '#eligecategoria' ).value;
    //console.log( newCrap, crapPriority );
    addCrap( newCrap, crapPriority );
    //printCrap( pSection, newCrap, crapPriority );
}

