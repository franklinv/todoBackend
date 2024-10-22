function isAlphaNumeric(todoId)
{
    let valid=false
    let RegEx = /^[A-Za-z0-9]*([A-Za-z][0-9]|[0-9][A-Za-z])[A-Za-z0-9]*$/i; 
    valid = RegEx.test(todoId);
    if (valid) return true
}

module.exports= { isAlphaNumeric }