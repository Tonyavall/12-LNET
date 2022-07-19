const cbBtn = document.getElementById('cb-btn')

const createBlogHandler = async e => {
    e.preventDefault()

    const cbForm = document.getElementById('cb-form')
    const title = document.getElementById('cb-title').value.trim()
    const description = document.getElementById('cb-description').value.trim()
    const content = document.getElementById('cb-content').value.trim()
    const dateCreated = getDate()

    const checkMessage = document.querySelector('.invalid-auth')
    if (checkMessage) checkMessage.remove();
    if (!(title && description && content)) {
        return appendContent({
            tag: 'p',
            setAttr: {
                class: 'invalid-auth max-w-md mx-auto mt-4 text-center text-red-500',
            },
            textContent: 'Please fill out the entire form!',
            appendTo: cbForm,
        })
    }

    try {
        const dbResponse = await fetch('/posts/create', {
            method: 'POST',
            body: JSON.stringify({
                title,
                description,
                content,
                dateCreated
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        const newPostId = await dbResponse.json()
        location.replace(`/blogs/${newPostId}`)
    } catch (error) {
        const checkMessage = document.querySelector('.invalid-auth')
        if (checkMessage) checkMessage.remove();
        return appendContent({
            tag: 'p',
            setAttr: {
                class: 'invalid-auth max-w-md mx-auto mt-4 text-center text-red-500',
            },
            textContent: 'Unable to create blog post.',
            appendTo: cbForm,
        })
    }
}

cbBtn.addEventListener('click', createBlogHandler)