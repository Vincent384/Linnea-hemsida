export const validate = (form, setError) => {
    const err = {}
    
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if(form.name.trim() === ''){
        err.name = 'Please enter your first name'
    }else if(form.name.length < 3){
        err.name = 'Your name must be at least 3 characters long'
    }
    
    if(form.email.trim() === ''){
        err.email = 'Please enter your email'
    }else if(!emailRegEx.test(form.email)){
        err.email = 'Enter a valid email'
    }

    if(form.message.trim() === ''){
        err.message = 'Please enter your message'
    }

    
    setError(err)
    
    return Object.keys(err).length > 0 ? err : null;
    

    }