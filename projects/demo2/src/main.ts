import {
    Scene,
    WebGLRenderer,
    PerspectiveCamera,
    LineBasicMaterial,
    Vector3,
    BufferGeometry,
    Line,
} from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import path from '../assets/test1.gltf'


function main() {
    const renderer = new WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
    camera.position.set(0, 0, 100)
    camera.lookAt(0, 0, 0)

    const scene = new Scene()

    const material = new LineBasicMaterial({ color: 0xaaaaff })
    const points = [
        new Vector3(-10, 0, 0),
        new Vector3(0, 10, 0),
        new Vector3(10, 0, 0),
    ]
    const geometry = new BufferGeometry().setFromPoints(points)

    const line = new Line(geometry, material)
    scene.add(line)

    const loader = new GLTFLoader()

    loader.load(
        path,
        (gltf) => {
            scene.add(gltf.scene)
            console.log('completed', path)
        },
        (e) => {
            console.log(e)
        },
        (err) => {
            console.log(err)
        }
    )

    function render() {
        requestAnimationFrame(render)
        line.position.z += 0.01
        line.position.x += 0.01
        line.position.y += 0.01
        renderer.render(scene, camera)
    }

    render()
}

main()