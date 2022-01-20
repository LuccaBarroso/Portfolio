// import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// randomly rotate, scale and position the y axis
export const randomizeObjPosition = function (object, viewInfo) {
  object.position.z = 0;
  object.rotation.set(
    getRandomArbitrary(25, 90) * (Math.PI / 180),
    getRandomArbitrary(25, 90) * (Math.PI / 180),
    getRandomArbitrary(25, 90) * (Math.PI / 180)
  );

  const randomScale = getRandomArbitrary(
    viewInfo.minWidth,
    viewInfo.minWidth * 3
  );
  object.scale.set(randomScale, randomScale, randomScale);

  object.position.y = getRandomArbitrary(-0.5, 1.5);
};

// a function that uses a raycaster to check if the objs are beeing hovered or not and grow and ungrow them
export const growOnHover = function (raycaster, objects, mouse, camera) {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(objects, true);
  for (let i = 0; i < intersects.length; i++) {
    intersects[i].object.parent.scale.x += 0.02;
    intersects[i].object.parent.scale.y += 0.02;
    intersects[i].object.parent.scale.z += 0.02;
  }
  for (let i = 0; i < objects.length; i++) {
    if (
      !intersects.find((intersect) => intersect.object.parent === objects[i]) &&
      objects[i].scale.x > 10
    ) {
      objects[i].scale.x -= 0.04;
      objects[i].scale.y -= 0.04;
      objects[i].scale.z -= 0.04;
    }
  }
};

// moves objs forward and rotate them
export const moveObjects = function (objects, speed, viewInfo) {
  for (let i = 0; i < objects.length; i++) {
    objects[i].rotation.z += speed / 2;
    objects[i].position.x += speed;
    if (objects[i].position.x > viewInfo.minWidth + 0.1) {
      randomizeObjPosition(objects[i], viewInfo);
      objects[i].position.x = -viewInfo.minWidth - 0.1;
    }
  }
};

// 100 width on the page is to 1 in the three.js grid, this function makes that calculation and returns it
export const generateViewInfo = function (width, height) {
  const info = {};
  info.minWidth = width / 2 / 100;
  info.minHeight = height / 2 / 100;
  return info;
};

export const generateStack = function (stacksNames, scene, viewInfo) {
  const loader = new GLTFLoader();
  const stacks = [];
  for (let i = 0; i < stacksNames.length; i++) {
    loader.load(
      `/threeAssets/${stacksNames[i]}.gltf`,
      (gltf) => {
        stacks.push(gltf.scene);
        const cur = stacks.length - 1;
        const spacing = (viewInfo.minWidth * 2) / stacksNames.length;
        stacks[cur].position.x = -(0 + spacing * cur);
        randomizeObjPosition(stacks[cur], viewInfo);
        scene.add(stacks[cur]);
      },
      undefined,
      function (error) {
        console.log(__dirname);
        console.error("error in the gltf loader: " + error);
      }
    );
  }
  return stacks;
};
