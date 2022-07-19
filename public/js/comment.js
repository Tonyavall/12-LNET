const commentBtn = document.getElementById('comment-btn')

const postCommentHandler = async e => {
    e.preventDefault()

    const content = document.getElementById('comment-container').value.trim()
    const blogId = commentBtn.dataset.id
    const dateCreated = getDate()

    if (!content) return

    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
            content,
            blogId,
            dateCreated
        }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (!response.ok) return location.replace('/login')
    location.reload()
}

commentBtn.addEventListener('click', postCommentHandler)