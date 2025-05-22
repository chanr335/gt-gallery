import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const texture = new THREE.TextureLoader().load("public/background/background.png");
scene.background = texture
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#gallery'),
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

scene.add(directionalLight, directionalLight2);

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const lightHelper2 = new THREE.DirectionalLightHelper(directionalLight);
// const lightHelper3 = new THREE.DirectionalLightHelper(directionalLight2);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, lightHelper2, lightHelper3, gridHelper);

let group = new THREE.Group(); // new group to wrap the model
scene.add(group);

const loader = new GLTFLoader();
loadModelByName("180SX.glb")

export function loadModelByName(modelName) {

    group.clear(); // remove old model

    loader.load(`models/${modelName}`, function (gltf) {
        const model = gltf.scene;

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        camera.position.setX(0);
        camera.position.setY(size.getComponent(1) * 0.3);
        camera.position.setZ(size.getComponent(2) * 1.143);

        directionalLight.position.set(10, 10, 10);
        directionalLight2.position.set(-10, 10, 10);

        model.position.sub(center);

        group.add(model);
    }, undefined, function (error) {
        console.error("Failed to load model:", error);
    });
}

function animate() {
    requestAnimationFrame(animate);
    group.rotation.y += 0.005; // rotate the group, not the raw model
    renderer.render(scene, camera);
}

animate();
