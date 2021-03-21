const resultsNumber = (characters, idSmaller, idGreater) => {
    let count = 0;
    for(let i=0; i < characters?.length; i++) {
      if(parseInt(characters[i].id) < idSmaller && parseInt(characters[i].id) > idGreater) {
        count ++
      }
    }
      return count
    }

export default resultsNumber