

export const saveImage = function(e){
  let file = e.target.files || e.dataTransfer.files;
  if (!file.length) {
    return;
  }
  let reader = new FileReader();
  reader.onload = e => {
    img =  e.target.result;
  };

  reader.readAsDataURL(file[0]);
  }