

$(document).ready(initialized);

function initialized() {
  pageDom();
}

function pageDom() {
  var container = $(".container");
  img = $("<img>", {
    class: "img",
    src: './img/car.jpeg'
  });
  container.append(img);
  return container;
}






