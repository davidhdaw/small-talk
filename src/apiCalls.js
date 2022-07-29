const getData = (url, object) => {
    return fetch(url, object)
      .then(response => {
        if (!response.ok) {
          throw Error ("HTTP error " + response.status)
        } else {
          return response.json()
        }
    }) 
}

export default getData 