

export const saveImage = function(e){
  let file = e.target.files || e.dataTransfer.files;
  let img = ''
  if (!file.length) {
    return;
  }
  let reader = new FileReader();
  reader.onload = e => {
    img =  e.target.result;
  };

  reader.readAsDataURL(file[0]);

  return img
  }