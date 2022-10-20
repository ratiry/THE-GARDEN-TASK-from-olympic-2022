let number = 145748412354 ;
let even_row = 2145233 ;
let rating_where_to_start = (number,even_row)=>{
  let pairs = Math.floor(number/(even_row+even_row+1));
  let rows_sum =pairs*(even_row+even_row+1)+1;
  let row = pairs * 2;
  if(number%(even_row+even_row+1)==0){
    rows_sum =( pairs-1) *(even_row+even_row+1)+1;
    row = (pairs-1) * 2;
  }
  let return_array = [];
  return_array.push(rows_sum);
  return_array.push(row);
  return return_array; 
}
let rating_array= rating_where_to_start(number,even_row);
console.log(rating_array)
let define_rows_2 = (number,even_row,start_row,start_number)=>{
  let rows_array = [];
  let rows_sum = start_number;
  let i=start_row;
  let fork = true;
  while(fork){
    if(i%2==0){
      let array=[];
      let prevoius_rows_sum = rows_sum;
      rows_sum=rows_sum+even_row;
      for(let ii=prevoius_rows_sum;ii<rows_sum;ii++){
        array.push(ii);
      }
      rows_array.push(array);
    }else{
      let array=[];
      let prevoius_rows_sum = rows_sum;
      rows_sum=rows_sum+even_row+1;
      for(let ii=prevoius_rows_sum;ii<rows_sum;ii++){
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
let seeking_for_element=(rows_array,number,row)=>{
  let permission_to_break_1 = false;
  let return_array = [];
  for(let i=0;i<rows_array.length;i++){
    for(let ii=0;ii<rows_array[i].length;ii++){
      if(rows_array[i][ii] == number){
        return_array.push(i+1+row);
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
let rows_array_2= define_rows_2(number,even_row,rating_array[1],rating_array[0]);
let result = seeking_for_element(rows_array_2,number,rating_array[1]);
console.log(result);
