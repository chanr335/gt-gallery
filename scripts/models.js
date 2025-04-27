import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#gallery'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff, 5);
scene.add(pointLight, ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

let group = new THREE.Group(); // new group to wrap the model
scene.add(group);

const loader = new GLTFLoader();
loader.load('models/GDB07.glb', function (gltf) {
    const model = gltf.scene;

    // Center the model geometry
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);


    model.traverse((child) => {
        if (child.isMesh) {
            if (child.material) {
                child.material.needsUpdate = true; // just mark material for updates
                child.material.lightMapIntensity = 1; // optional tweak if you have lightmaps
                child.material.envMapIntensity = 1;   // optional tweak if you add an environment map later
            }
        }
    });

    group.add(model); // add to group
}, undefined, function (error) {
    console.error(error);
});

function animate() {
    requestAnimationFrame(animate);

    group.rotation.y += 0.01; // rotate the group, not the raw model

    controls.update();
    renderer.render(scene, camera);
}

animate();
