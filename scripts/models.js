import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1f1f1f);
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#gallery'),
});

renderer.setPixelRatio(window.devicePixelRatio);

//pull the size of the canvas according to the css
const canvas = document.querySelector('#gallery');
renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

camera.position.setX(0);
camera.position.setY(2);
camera.position.setZ(20);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 10, 10);

const ambientLight = new THREE.AmbientLight(0xffffff, 5);
scene.add(pointLight, ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
directionalLight.position.set(10, 10, 10);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 5);
directionalLight2.position.set(-10, 10, 10);

scene.add(directionalLight, directionalLight2);

const lightHelper = new THREE.PointLightHelper(pointLight);
const lightHelper2 = new THREE.DirectionalLightHelper(directionalLight);
const lightHelper3 = new THREE.DirectionalLightHelper(directionalLight2);
const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, lightHelper2, lightHelper3, gridHelper);


let group = new THREE.Group(); // new group to wrap the model
scene.add(group);

const loader = new GLTFLoader();
loadModelByName("GC8.glb")

export function loadModelByName(modelName) {
    group.clear(); // remove old model

    loader.load(`models/${modelName}`, function (gltf) {
        const model = gltf.scene;

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        model.traverse((child) => {
            if (child.isMesh && child.material) {
                child.material.needsUpdate = true;
                child.material.lightMapIntensity = 3;
                child.material.envMapIntensity = 3;
            }
        });

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
