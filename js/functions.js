//-----------  RESET FIELDS  --------------
let addnewcrap = document.querySelector( '#nueva' );
let search = document.querySelector( '#buscar' );
let selectPriority = document.querySelector( '#eligecategoria' );
let priorityFilter = document.querySelector( '#filtracategoria' );

addnewcrap.value = '';
search.value = '';
selectPriority.value = '0';
priorityFilter.value = '0';



//---------- INCLUDE CRAP ----------------
let idAsignada = crapArray.length;

function addCrap( pNewCrap, pCrapPriority ){
    crapArray[crapArray.length] = { //quiza deberias hacerlo con push...
        crapid: idAsignada, 
        crap: pNewCrap,
        priority: pCrapPriority
    }
    idAsignada ++;
}

addCrap( 'Figure it out how the hell js works', 'panic' );
addCrap( 'Sleep please, you need it', 'doordonot' );
addCrap( 'play Diablo IV', 'nicetry' );



//----------  PRINT CRAP LIST ----------------
function printCrapList( pSection, pCrapList ){
    pSection.innerHTML = " ";
    for( crap of pCrapList ){
    printOneCrap( pSection, crap );
    }
}


//----------  PRINT ONE CRAP ----------------
function printOneCrap( pSection, pCrap ){
    let priorColor = '';
    if( pCrap.priority == "panic" ){
        priorColor = 'dark';
    }if( pCrap.priority == "doordonot" ){
        priorColor = 'dgreen';
    }if( pCrap.priority == "nicetry" )
    { priorColor = 'lgreen'; }
   
    pSection.innerHTML += `<article>
                            <h3>${pCrap.crap}</h3>
                            <div class="color ${priorColor}"></div> 
                            <div id="${pCrap.crapid}" class="eliminar">
                                <i class="fas fa-trash"></i> 
                            </div>
                        </article>`; 
}



//----------  SEARCH CRAP ----------------
search.addEventListener( 'input', getSearch );

function getSearch( event ){
    console.log( event.target.value.trim() );
    searchCrap( crapArray, event.target.value.trim() );
}

function searchCrap( pArray, pWord ){
    let result = pArray.filter( crap => crap.crap.toLowerCase().includes( pWord.toLowerCase() ) );
    printCrapList( crapSection, result );
}



//----------  FILTER BY PRIORITY ----------------
priorityFilter.addEventListener( 'change', filterByPriority );

function filterByPriority( event ){
    console.log( event.target.value );
    let result = crapArray.filter( crap => crap.priority == event.target.value )
    printCrapList( crapSection, result );
}