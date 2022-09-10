/*Question 1: You are given a string (STR) of length N, consisting of only the lower case English alphabet.
Your task is to remove all the duplicate occurrences of characters in the string.

Input:
abcadeecfb

Output:
"abcdef" */

function removeDuplicate(str, N)
    {
        let value = 0;
        for (let i = 0; i < N; i++)
        {
            for (j = 0; j < i; j++)
            {
                if (str[i] == str[j])
                {
                    break;
                }
            }
            if (j == i)
            {
                str[value++] = str[i];
            }
        }
        return str.join("").slice(str, value);
    }
        let str = "abcadeecfb".split("");
        let N = str.length;
        console.log(removeDuplicate(str, N));


/*Question 2 : You are given a string (STR) of length N,You have to print the count of all alphabet using maps.?

Input :
"abcadeecfb"

output :
  a = 2
  b = 2
  c = 2
  d = 1
  e = 2
  f = 1 */

  let Str = "abcadeecfb"
  let N1 = Str.length;
  let mp = new Map();
   for (let i=0;i<N1;i++) {
    if (mp.has(Str[i])) {
     mp.set(Str[i], mp.get(Str[i]) + 1);
  }
   else {
       mp.set(Str[i], 1);
      }
   }
      for (let [key, val] of mp.entries()) {
        console.log(key + "=" + val);
  }