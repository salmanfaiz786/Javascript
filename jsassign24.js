function isValid(s) {

    let str = s.toString('').split('');
    
	
    for (let i=0; i<str.length; i++)
        {
            if (str[i]==='(')
            {
               if (str[i+1]===')')
        {
                return true;}
            }
    

            if (str[i]==='{')
                {
                   if (str[i+1]==='}')
            {
                    return true;}
                }
    
   

                if (str[i]==='[')
                    {
                       if (str[i+1]===']')
                {
                        return true;}
                    }

    else  {
    return false
    }

}

}

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
