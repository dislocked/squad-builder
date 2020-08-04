const someCommonValues = ['common', 'values'];


export const doSomethingWithInput = (theInput) => {
   //Do something with the input
   let loop = true;
   let multiplicador = 1.05;
   let x = 0;
   let i = 1;
   let aux = 0;

   if(theInput<40 || !theInput){
    aux = 40
     loop = false;
   }
   if(theInput>=100){
    aux = 100 + (theInput * 0.021);
     loop = false;
   }
   do {
   if(theInput<(101-i) && theInput >= (100-i) ){
    aux = theInput * multiplicador;
       loop = false;
   }else{
       i++;
       multiplicador += 0.004;
   }
   }while (loop==true);  
   theInput = aux;
   return theInput;
};

export const justAnAlert = () => {
   alert('hello');
};

export const steamid_to_64bit = (steamID) => {
   var parts = steamID.split(":");
    
    var iServer = Number(parts[1]);
    var iAuthID = Number(parts[2]);
    
    var converted = "76561197960265728"

    var lastIndex = converted.length - 1

    var toAdd = iAuthID * 2 + iServer;
    var toAddString = new String(toAdd)    
    var addLastIndex = toAddString.length - 1;

    for(var i=0;i<=addLastIndex;i++)
    {
        var num = Number(toAddString.charAt(addLastIndex - i));
        var j=lastIndex - i;
        
        do
        {
            var num2 = Number(converted.charAt(j));            
            var sum = num + num2;        
                    
            converted = converted.substr(0,j) + (sum % 10).toString() + converted.substr(j+1);    
        
            num = Math.floor(sum / 10);            
            j--;
        }
        while(num);
            
    }
    
    return converted;
};

export const getOverall = (val_del, val_def, val_mca, val_mcd, CP) => {
    let ovr;
    if(val_def>=val_del){
        if(val_def>=val_mca){
          if(val_def>=val_mcd){
            ovr = Math.trunc(val_def);
          }else{
            ovr = Math.trunc(val_mcd);
          }
        }else{
          if(val_mca>=val_mcd){
            ovr = Math.trunc(val_mca);
          }else{
            ovr = Math.trunc(val_mcd);
          }
        }
      }else{
        if(val_del>=val_mca){
          if(val_del>=val_mcd){
            ovr = Math.trunc(val_del);
          }else{
            ovr = Math.trunc(val_mcd);
          }
        }else{
          if(val_mca>=val_mcd){
            ovr = Math.trunc(val_mca);
          }else{
            ovr = Math.trunc(val_mcd);
          }
        }
      }
      if(ovr<CP){
        ovr = Math.trunc(CP);
      }
    return ovr;
 };
 
 export const getPosition = (val_del, val_def, val_mca, val_mcd, CP) => {
    let pos;
    if(val_def>=val_del){
        if(val_def>=val_mca){
          if(val_def>=val_mcd){
            if(val_def>=CP){
              pos = "CB";
            }else{
              pos = "GK";
            }
          }else{
            if(val_mcd>=CP){
              pos = "MCD";
            }else{
              pos = "GK";
            } 
          }
        }else{
          if(val_mca>=val_mcd){
            if(val_mca>=CP){
              pos = "MCA";
            }else{
              pos = "GK";
            }
          }else{
            if(val_mcd>=CP){
              pos = "MCD";
            }else{
              pos = "GK";
            }
          }
        }
      }else{
        if(val_del>=val_mca){
          if(val_del>=val_mcd){
            if(val_del>=CP){
              pos = "CF";
            }else{
              pos = "GK";
            }
          }else{
            pos = "MCD";
          }
        }else{
          if(val_mca>=val_mcd){
            if(CP >= val_mca){
              pos = "GK";
            }else{
              pos = "MCA";
            }
          }else{
            if(val_mcd>=CP){
              pos = "MCD";
            }else{
              pos = "GK";
            }
          }
        }
      }
    return pos;
 };