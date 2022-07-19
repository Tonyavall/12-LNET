const getDate = () => {
    const fullDate = new Date().toString()
    const [ fullDay, month, numDay, numYear ] = fullDate.split(' ')
    return `${month} ${numDay}, ${numYear}`
}