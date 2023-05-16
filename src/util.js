export function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return true
  }
    return false
}

export function ValidateMobileNumer (number) {
    if (/^\d{10}$/.test(number)) {
        return true
    }
    return false
}

export function isNumber(number, desiredLength) {
    if (/^\d*$/.test(number)) {
        return true
    }
    return false
}