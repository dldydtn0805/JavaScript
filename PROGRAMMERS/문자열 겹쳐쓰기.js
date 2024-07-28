function solution(my_string, overwrite_string, s) {
    let answer = '';
    for (let i=0; i < String(my_string).length; i++) {
        if (i >= s && i < String(overwrite_string).length+s) {
            answer += String(overwrite_string)[i-s];        
        }
        else {
            answer += String(my_string)[i];
        }
    }
    return answer;
}
