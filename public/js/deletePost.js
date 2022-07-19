const psContainer = document.getElementById('myposts-container')

const deletePostHandler = async id => {
    const postId = id

    try {
        const response = await fetch('/posts', {
            method: 'DELETE',
            body: JSON.stringify({ postId }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        location.reload()
    } catch (error) {
        console.log('Unable to delete post.')
    }
}

psContainer.addEventListener('click', e => {
    if (e.target && e.target.matches('#dp-btn')) {
        deletePostHandler(e.target.dataset.id)
    }
})