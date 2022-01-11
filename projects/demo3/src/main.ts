import {
    SphereGeometry,
    PointsMaterial,
    Points,
    Scene,
    WebGLRenderer,
    PerspectiveCamera,
} from 'three'

const radius = 7
const widthSegments = 12
const heightSegments = 8
const geometry = new SphereGeometry(radius, widthSegments, heightSegments)
const material = new PointsMaterial({
    color: 'white',
    size: 0.2,
})
const points = new Points(geometry, material)
points.position.z = 50

const scene = new Scene()
scene.add(points)

const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
camera.position.set(0, 0, 100)
camera.lookAt(0, 0, 0)

const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

function render() {
    requestAnimationFrame(render)
    points.rotation.z += 0.01
    points.rotation.x += 0.01
    points.rotation.y += 0.01
    renderer.render(scene, camera)
}

render()