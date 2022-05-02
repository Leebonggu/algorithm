// 아 열받네

function solution(arr) {
    return arr.filter((val,index) => val != arr[index+1]);
}
