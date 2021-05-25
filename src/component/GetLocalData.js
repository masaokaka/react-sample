const GetLocalData = () => {
    if (localStorage.data) {
        let data = []
        data = localStorage.getItem('data')
        data = JSON.parse(data)
        return data
    } else {
        return []
    }
}

export default GetLocalData;