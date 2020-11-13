import { useState, useEffect } from 'react'

const useFetchWithLoading = (fetchFn, param) => {
    const [state, setState] = useState({
        loading: true,
        data: null,
        error: null
    })

    useEffect(() => {
        fetchFn(param)
            .then(data => {
                setState({
                    data,
                    loading: false,
                    error: null
                })
            })
            .catch(error => {
                setState({
                    error,
                    loading:false,
                    data:null
                })
            })
    }, [fetchFn, param])

    return {
        loading: state.loading,
        data: state.data,
        error: state.error
    }
}

export default useFetchWithLoading
