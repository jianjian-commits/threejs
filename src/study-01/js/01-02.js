function init() {
    /* ***************x轴的正半轴是屏幕往里面   y轴的正半轴是屏幕往上面   z轴的正半轴是屏幕往右边  我的角度来看***************** */
    /* 粉色表示 x轴   蓝色表示z轴    绿色表y轴 */
    // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer(); //申明了渲染器
    renderer.setClearColor(new THREE.Color(0x0faddd)); //更改场景的背颜色
    renderer.setSize(window.innerWidth, window.innerHeight); //设置场景的大小

    // show axes in the screen
    var axes = new THREE.AxesHelper(20); //添加坐标轴并且把坐标轴的粗细设置为20  效果显示的是坐标轴线的长度而不是粗细
    scene.add(axes);

    // create the ground plane
    var planeGeometry = new THREE.PlaneGeometry(60, 20); //定义平面的大小
    var planeMaterial = new THREE.MeshBasicMaterial({ //定义平面的材质
        color: 0xdddddd
    });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial); //定义平面

    // rotate and position the plane 
    plane.rotation.x = -0.5 * Math.PI; //定义了平面的倾斜角度  默认是xy轴   -表示向x轴逆时针选择角度  目前测试范围为 -0.7-0.2有效
    plane.position.set(15, 0, 0); //定义了平面的位置

    // add the plane to the scene
    scene.add(plane);  //将平面添加到场景中

    // create a cube  创建一个方块
    var cubeGeometry = new THREE.BoxGeometry(8, 8, 8); //球的大小
    var cubeMaterial = new THREE.MeshBasicMaterial({ //球的材质
        color: 0xFF0000,
        wireframe: true // 如果wireframe设置为false会显示为实体  如果为true会显示为 线体
    });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    // position the cube
    cube.position.set(-4, 3, 0);

    // add the cube to the scene
    scene.add(cube);

    // create a sphere  创建一个球
    var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    var sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x7777FF,
        wireframe: true 
    });
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

    // position the sphere
    sphere.position.set(20, 4, 2);

    // add the sphere to the scene
    scene.add(sphere);

    // position and point the camera to the center of the scene
    camera.position.set(-30, 40, 30);
    // camera.position.set(0, 0, -100); //y表示相机在电脑屏幕的上方   z表示往电脑右边的角度    x表示电脑正前方角度
    camera.lookAt(scene.position);

    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    // render the scene
    renderer.render(scene, camera);
}