let number = 100;
let even_row = 10;

let define_rows = (number,even_row)=>{
  let rows_array = [];
  let rows_sum = 0;
  let i=0;
  let fork = true;
  while(fork){
    if(i%2==0){
      let array=[];
      let prevoius_rows_sum = rows_sum;
      rows_sum=rows_sum+even_row;
      for(let ii=prevoius_rows_sum+1;ii<=rows_sum;ii++){
        array.push(ii);
      }
      rows_array.push(array);
    }else{
      let array=[];
      let prevoius_rows_sum = rows_sum;
      rows_sum=rows_sum+even_row+1;
      for(let ii=prevoius_rows_sum+1;ii<=rows_sum;ii++){
        array.push(ii);

      }
      rows_array.push(array);
    }
    if(rows_sum>=number){
      fork=false;
    }
    i++;
  }
  return rows_array;
}
let seeking_for_element=(rows_array,number)=>{
  let permission_to_break_1 = false;
  let return_array = [];
  for(let i=0;i<rows_array.length;i++){
    for(let ii=0;ii<rows_array[i].length;ii++){
      if(rows_array[i][ii] == number){
        return_array.push(i+1);
        return_array.push(ii+1);
        permission_to_break_1=true;
        break;
      }
    }
    if(permission_to_break_1){
      break;
    }
  }
  return return_array;
}
let rows_array_= define_rows(number,even_row);
console.log(rows_array_);
let place = seeking_for_element(rows_array_,number);
console.log(place)
