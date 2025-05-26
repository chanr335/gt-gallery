import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MODELS } from './switchItem';

const scene = new THREE.Scene();
const texture = new THREE.TextureLoader().load("gallerybg.png");
scene.background = texture
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#gallery'),
    // alpha: true, //SCREENSHOT
    // preserveDrawingBuffer: true, //SCREENSHOT
});

renderer.setPixelRatio(window.devicePixelRatio);

//pull the size of the canvas according to the css
const canvas = document.querySelector('#gallery');
renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 20, 10);

const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(pointLight, ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
const directionalLight2 = new THREE.DirectionalLight(0xffffff, 3);
directionalLight.position.set(10, 10, 10);
directionalLight2.position.set(-10, 10, 10);

scene.add(directionalLight, directionalLight2);

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const lightHelper2 = new THREE.DirectionalLightHelper(directionalLight);
// const lightHelper3 = new THREE.DirectionalLightHelper(directionalLight2);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, lightHelper2, lightHelper3, gridHelper);

let group = new THREE.Group(); // new group to wrap the model
scene.add(group);

// group.rotateY(4.71);//SCREENSHOT

const loader = new GLTFLoader();
const modelCache = {};

const box = new THREE.Box3();
const sizeVec = new THREE.Vector3();
const centerVec = new THREE.Vector3();

function preloadModels(){
    MODELS.forEach((name) => {
        loader.load(`models/${name}`, (gltf) => {
            modelCache[name] = gltf.scene;

            if(name === "180SX.glb"){
                loadModelByName(name);
            }
        });
    });
}

export function loadModelByName(modelName) {
    group.clear(); // Clear previous model

    const cachedModel = modelCache[modelName];
    if (!cachedModel) {
        console.warn(`Model ${modelName} is not loaded yet.`);
        return;
    }

    const model = cachedModel.clone(true);

    // Compute bounding box and scale model
    box.setFromObject(model);
    box.getSize(sizeVec);
    const scaleFactor = 2.0 / Math.max(sizeVec.x, sizeVec.y, sizeVec.z);
    model.scale.setScalar(scaleFactor);

    // Recompute bounding box after scaling
    box.setFromObject(model);
    box.getCenter(centerVec);
    model.position.sub(centerVec); // Center the model

    group.add(model); // Add directly to group

    // Adjust camera based on scaled size
    box.getSize(sizeVec); // Size already scaled
    camera.position.set(0, sizeVec.y * 0.5, sizeVec.z * 1.2);
    camera.lookAt(0, 0, 0);
}

function saveCanvasScreenshot(fileName = "screenshot.png") {
    const dataURL = renderer.domElement.toDataURL("image/png");
    const link = document.createElement("a");
    link.style = "color:white"
    link.innerHTML = "download"
    link.href = dataURL;
    link.download = fileName;
    link.click();
}

function animate() {
    requestAnimationFrame(animate);
    group.rotation.y += 0.005; // rotate the group, not the raw model
    renderer.render(scene, camera);
}

animate();
preloadModels();
