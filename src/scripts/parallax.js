const parallax = document.querySelector('.wrapper-welcome');
const parallax2 = document.querySelector('.wrapper-last');

const layers = parallax.children;
const layers2 = parallax2.children;

function moveLayersDependsOnScroll(wScroll) {

  Array.from(layers).forEach(layer => {

    const divider = layer.dataset.speed;
    const strafe = wScroll * divider / 10;

    layer.style.transform = `translateY(-${strafe}%)`;

  });
}

function moveLayersDependsOnScroll2(wScroll) {

  Array.from(layers2).forEach(layer2 => {

    const divider = layer2.dataset.speed;
    const strafe = wScroll * divider / 10;

    layer2.style.transform = `translateY(-${strafe}%)`;

  });
}

window.addEventListener("scroll", e => {
  const wScroll = window.pageYOffset;
  moveLayersDependsOnScroll(wScroll);
})

window.addEventListener("scroll", e => {
  const wScroll = window.pageYOffset;
  moveLayersDependsOnScroll2(wScroll);
})