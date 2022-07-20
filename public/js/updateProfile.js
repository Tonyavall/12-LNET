const updateProfileForm = document.getElementById('update-profile')

const updateProfileHandler = async e => {
    e.preventDefault()

    const first_name = document.querySelector('#update-firstname').value.trim();
    const last_name = document.querySelector('#update-lastname').value.trim();
    const username = document.querySelector('#update-username').value.trim()
    const email = document.querySelector('#update-email').value.trim()
    const password = document.querySelector('#update-password').value.trim();
    const confirmPassword = document.querySelector('#update-password-confirm').value.trim();

    const updateBtnContainer = document.getElementById('update-profile-btn-container')
    
    const checkMessage = document.querySelector('.invalid-auth')
    if (checkMessage) checkMessage.remove()

    if (password !== confirmPassword) {
        return appendContent({
            tag: 'p',
            setAttr: {
                class: 'invalid-auth max-w-md mx-auto mt-4 text-center text-red-500',
            },
            textContent: 'Passwords do not match!',
            appendTo: updateBtnContainer,
        })
    } else if (!(first_name && last_name && password && confirmPassword)) {
        return appendContent({
            tag: 'p',
            setAttr: {
                class: 'invalid-auth max-w-md mx-auto mt-4 text-center text-red-500',
            },
            textContent: 'Please fill out the entire form!',
            appendTo: updateBtnContainer,
        })
    }
    // If all fields are good and password confirm is matching..
    try {
        const response = await fetch('/api/users', {
            method: 'PUT',
            body: JSON.stringify({ 
                first_name, 
                last_name, 
                username, 
                email, 
                password 
            }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            return appendContent({
                tag: 'p',
                setAttr: {
                    class: 'invalid-auth max-w-md mx-auto mt-4 text-center',
                },
                textContent: await response.json(),
                appendTo: updateBtnContainer,
            })
        }
    } catch (error) {
        return appendContent({
            tag: 'p',
            setAttr: {
                class: 'invalid-auth max-w-md mx-auto mt-4 text-center text-red-500',
            },
            textContent: error,
            appendTo: updateBtnContainer,
        })
    }
}

updateProfileForm.addEventListener('submit', updateProfileHandler)