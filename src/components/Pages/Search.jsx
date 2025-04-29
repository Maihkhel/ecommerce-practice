import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import NewProducts from '../../assets/Newproducts'
import Card from '../commonfiles/Card'

const Search = () => {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const categoryQuery = searchParams.get('category')?.toLowerCase() || ''
    const [results, setResult] = useState([])

    useEffect(()=> {
        const filtered = NewProducts.filter((item) =>
            item.category.toLowerCase()===categoryQuery
        )

        if (filtered.length===0){
            navigate('/')
        }
        else {
            setResult(filtered)
        }
    }, [categoryQuery,navigate ])

    return (
        <div>


            <div className='new_collections'>
                <h1>Search result for '{categoryQuery}'</h1>

                <hr />
                <div className='collections'>
                    {results.map((card) => {
                        return <Card key={card.id}
                            id={card.id}
                            name={card.name}
                            img={card.img}
                            new_price={card.new_price}
                            old_price={card.old_price} />
                    })}

                </div>

            </div>

        </div>
    )
}

export default Search


// import React, { useState, useEffect } from 'react'
// import { useNavigate, useSearchParams } from 'react-router-dom'
// import NewProducts from '../../assets/NewProducts'
// import Card from '../commonfiles/Card'

// const Search = () => {
//     const [searchParams] = useSearchParams()
//     const navigate = useNavigate()
//     const categoryQuery = searchParams.get('category')?.toLowerCase() || '';
//     const [results, setResult] = useState([])

//     useEffect(() => {
//         const filtered = NewProducts.filter((item) =>
//             item.category.toLowerCase() === categoryQuery

//         )

//         if (filtered.length === 0) {
//             navigate('/')
//         }
//         else {
//             setResult(filtered)
//         }
//     }, [categoryQuery, navigate])

//     return (
//         <div>


//             <div className='new_collections'>
//                 <h1>Search result for '{categoryQuery}'</h1>


//                 <div className='collections'>
//                     {results.map((card) => {
//                         return <Card key={card.id}
//                             id={card.id}
//                             name={card.name}
//                             img={card.img}
//                             new_price={card.new_price}
//                             old_price={card.old_price} />
//                     })}

//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Search