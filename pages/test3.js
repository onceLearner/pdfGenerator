import React, { useEffect } from 'react'

const Test3 = () => {
    useEffect(() => {
        fetch("http://localhost:3000/api/pdfTemplate")
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
            })

    }, [])
    return (
        <div>

        </div>
    )
}

export default Test3
