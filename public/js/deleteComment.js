const commentsContainer = document.getElementById('comments-container')

const delCommentHandler = async id => {
    const commentId = id

    const response = await fetch('/api/comments', {
        method: 'DELETE',
        body: JSON.stringify({
            commentId
        }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (!response.ok) return location.replace('/login')
    location.reload()
}

commentsContainer.addEventListener('click', e => {
    if (e.target && e.target.matches('#dc-btn')) {
        delCommentHandler(e.target.dataset.id)
    }
})