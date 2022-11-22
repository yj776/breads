const React = require('react')
const Default = require('./layouts/Default')

function Show({bread, index}){
    console.group(bread.name)
    return(
        <Default>
            <h2>Show Page</h2>

            
            <form action={`/breads/${index}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>
            </form>

             <div className="newButton">
             <a href={`/breads/${index}/edit`}><button>Edit</button></a>
             </div>

    {/* <form action={`/breads/${index}?_method=PUT`} method="POST">
    <input type = 'submit' value = "Edit"/>
    </form> */}

            {/* <form action={`/breads/${index}?_method=PUT`} method="POST">
                <a href={`/breads/${index}/edit`}><button>Edit</button></a>
            </form> */}


            <h3>{bread.name}</h3>
            <p>
                and it
                {
                    bread.hasGluten
                    ? <span> does </span>
                    : <span> does NOT </span>
                }
                have gluten.
            </p>
            <img src = {bread.image} alt = {bread.name} />
            <li><a href = "/breads">Go home</a></li>
        </Default>
    )
}

module.exports = Show


    {/* <div className="newButton">
        <a href={`/breads/${index}/edit`}><button>Edit</button></a>
    </div> */}

    {/* <form action={`/breads/${index}?_method=PUT`} method="POST">
    <input type = 'submit' value = "Edit"/>
    </form> */}
  